package com.torajawonders.torajawondersapi.exception;

import com.torajawonders.torajawondersapi.payload.ExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(APIException.class)
    public ResponseEntity<ExceptionResponse> handleBlogAPIException(APIException exception, WebRequest webRequest) {
        ExceptionResponse exceptionResponse = new ExceptionResponse(exception.getCode(), exception.getDetails());
        return new ResponseEntity<>(exceptionResponse, exception.getStatus());
    }
}
