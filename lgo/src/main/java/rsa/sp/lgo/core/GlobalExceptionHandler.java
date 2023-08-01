package rsa.sp.lgo.core;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import rsa.sp.lgo.core.error.BadRequestException;
import rsa.sp.lgo.core.error.InvalidTokenException;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ResponseError> handleBadException(BadRequestException ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ResponseError(ex.getMessage(), ex.getErrorKey(), ex.getErrorName()));
    }
    @ExceptionHandler(InvalidTokenException.class)
    public ResponseEntity<ResponseError> handleTokenException(InvalidTokenException ex) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ResponseError(ex.getMessage(), ex.getErrorKey(), ex.getErrorName()));
    }
}
