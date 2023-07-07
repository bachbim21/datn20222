package rsa.sp.lgo.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsa.sp.lgo.core.utils.GeneralEntity;
import rsa.sp.lgo.models.Node;
import rsa.sp.lgo.repository.NodeRepository;
import rsa.sp.lgo.utils.DateUtils;
import rsa.sp.lgo.utils.StringUtils;

import javax.persistence.Access;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Service
public class ZipService {
    private static Logger logger = LoggerFactory.getLogger(ZipService.class);
    @Autowired
    private NodeRepository nodeRepository;
    @Autowired
    private NodeService nodeService;
    public GeneralEntity exportDirectoryAsZip(Long id) throws IOException {
        Node rootNode = nodeRepository.findById(id).orElse(null);
        if (rootNode == null) {
            return null;
        }
        nodeService.setReference(rootNode);

        String name = rootNode.getName() +  "_" + rootNode.getId() + "_" + rootNode.getUser().getId();
        name = name.replace("|", "").replace("\\", "").replace("/", "");

        String directoryName = System.getProperty("user.dir") +"/";
        String zipUrlName = "export/project/" + name  + ".zip";
        String zipFileName = directoryName + zipUrlName;
        zipFileName = zipFileName.replaceAll("\\\\", "/"); //replace fileName to download
        zipUrlName = zipUrlName.replaceAll("\\\\", "/");
        // Tạo thư mục tạm thời để chứa cây thư mục
        Path tempDirectory = Files.createTempDirectory("temp");

        // Tạo cây thư mục trong thư mục tạm thời
        createDirectoryStructure(rootNode, tempDirectory);

        Path destinationDirectory = Paths.get(directoryName, "export", "project");
        if (Files.exists(destinationDirectory)) {
            deleteDirectory(destinationDirectory);
        }
        Files.createDirectories(destinationDirectory);

        // Sao chép nội dung từ thư mục tạm thời vào thư mục đích
        copyDirectory(tempDirectory, destinationDirectory);
        // Nén thư mục đích thành tệp tin zip
        Files.deleteIfExists(Paths.get(zipFileName));
        createZipFile(String.valueOf(destinationDirectory.resolve(rootNode.getName())), zipFileName);

        return new GeneralEntity(zipFileName, zipUrlName);
    }
    private void copyDirectory(Path sourceDir, Path targetDir) throws IOException {
        Files.walkFileTree(sourceDir, new SimpleFileVisitor<Path>() {
            @Override
            public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) throws IOException {
                Path targetPath = targetDir.resolve(sourceDir.relativize(dir));
                Files.copy(dir, targetPath, StandardCopyOption.REPLACE_EXISTING);
                return FileVisitResult.CONTINUE;
            }

            @Override
            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                Path targetPath = targetDir.resolve(sourceDir.relativize(file));
                Files.copy(file, targetPath, StandardCopyOption.REPLACE_EXISTING);
                return FileVisitResult.CONTINUE;
            }
        });
    }
    private void deleteDirectory(Path directory) throws IOException {
        Files.walkFileTree(directory, new SimpleFileVisitor<Path>() {
            @Override
            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                Files.delete(file);
                return FileVisitResult.CONTINUE;
            }

            @Override
            public FileVisitResult postVisitDirectory(Path dir, IOException exc) throws IOException {
                Files.delete(dir);
                return FileVisitResult.CONTINUE;
            }
        });
    }
    private void createDirectoryStructure(Node node, Path parentDirectory) throws IOException {
        Path currentDirectory = Files.createDirectory(parentDirectory.resolve(node.getName()));

        for (Node child : node.getChildren()) {
            if (child.getFile()) {
                // Tạo tệp tin HTML
                Path filePath = currentDirectory.resolve(child.getName() + ".html");
                String htmlContent = generateHtmlContent(child);
                Files.write(filePath, htmlContent.getBytes());
            } else {
                // Đệ quy tạo thư mục cho các node con
                createDirectoryStructure(child, currentDirectory);
            }
        }
    }

    private String generateHtmlContent(Node node) {
        String htmlContent = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <title>Document</title>\n" +
                "    <script src=\"https://cdn.tailwindcss.com\"></script>\n" +
                "</head>\n" +
                "<body>\n" +
                node.getCode() + "\n" +
                "</body>\n" +
                "</html>";

        return htmlContent;
    }

    private void createZipFile(String sourceDirPath, String zipFilePath) throws IOException {
        Path sourceDir = Paths.get(sourceDirPath);
        FileOutputStream fos = new FileOutputStream(zipFilePath);
        ZipOutputStream zipOut = new ZipOutputStream(fos);

        Files.walkFileTree(sourceDir, new SimpleFileVisitor<Path>() {
            @Override
            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                Path relativePath = sourceDir.relativize(file);
                zipOut.putNextEntry(new ZipEntry(relativePath.toString()));
                Files.copy(file, zipOut);
                zipOut.closeEntry();
                return FileVisitResult.CONTINUE;
            }

            @Override
            public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) throws IOException {
                Path relativePath = sourceDir.relativize(dir);
                if (!relativePath.toString().isEmpty()) {
                    zipOut.putNextEntry(new ZipEntry(relativePath.toString() + "/"));
                    zipOut.closeEntry();
                }
                return FileVisitResult.CONTINUE;
            }
        });

        zipOut.close();
        fos.close();
    }
}
