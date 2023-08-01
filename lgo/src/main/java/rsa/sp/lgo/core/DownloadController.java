package rsa.sp.lgo.core;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import rsa.sp.lgo.core.error.BadRequestException;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;

@RestController
@RequestMapping("/api")
public class DownloadController {
    @RequestMapping(path = "/download", method = RequestMethod.GET)
    public void download(HttpServletResponse response, @RequestParam("filePath") String filePath) throws IOException {
        validateFileName(filePath);
        File file = new File(filePath);

        if (file.exists()) {
            response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + file.getName());
            String contentType = Files.probeContentType(file.toPath());
            response.setContentType(contentType != null ? contentType : MediaType.APPLICATION_OCTET_STREAM_VALUE);

            try (InputStream inputStream = new FileInputStream(file)) {
                int nRead;
                byte[] data = new byte[4096];
                while ((nRead = inputStream.read(data, 0, data.length)) != -1) {
                    response.getOutputStream().write(data, 0, nRead);
                }
                response.flushBuffer();
            }
        } else {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
        }
    }

    public void validateFileName(String fileName){
        if(fileName.contains("../") || fileName.contains("..\\")){
            throw new BadRequestException("Invalid path");
        }

        if(fileName.matches("%2e%2e%2f|%2e%2e/|..%2f|%2e%2e%5c|%2e%2e\\|..%5c|%252e%252e%255c|..%255c|..%255c|..%c1%9c|%00")){
            throw new BadRequestException("Invalid path");
        }

        int pos = fileName.lastIndexOf('.');
        String extension = fileName.substring(pos+1);
        if(!extension.toLowerCase().matches("zip|rar|jpg|jpeg|png|bmp|xlsx|doc|xls|pdf|docx|txt")) {
            throw new  BadRequestException("Invalid path");
        }
    }
}
