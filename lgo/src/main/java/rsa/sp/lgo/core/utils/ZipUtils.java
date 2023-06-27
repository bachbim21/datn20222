package rsa.sp.lgo.core.utils;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class ZipUtils {
    public static void createZipFile(Path sourceDirectory, String zipFilePath) throws IOException {
        try (FileOutputStream fos = new FileOutputStream(zipFilePath);
             ZipOutputStream zipOut = new ZipOutputStream(fos)) {

            Files.walkFileTree(sourceDirectory, new SimpleFileVisitor<Path>() {
                @Override
                public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                    String relativePath = sourceDirectory.relativize(file).toString();
                    zipOut.putNextEntry(new ZipEntry(relativePath));

                    Files.copy(file, zipOut);

                    zipOut.closeEntry();
                    return FileVisitResult.CONTINUE;
                }

                @Override
                public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) throws IOException {
                    String relativePath = sourceDirectory.relativize(dir).toString();
                    if (!relativePath.isEmpty()) {
                        zipOut.putNextEntry(new ZipEntry(relativePath + "/"));
                        zipOut.closeEntry();
                    }
                    return FileVisitResult.CONTINUE;
                }
            });
        }
    }
}
