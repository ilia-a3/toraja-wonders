package com.torajawonders.torajawondersapi.exception;

import com.torajawonders.torajawondersapi.payload.ExceptionResponse;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.*;
import java.util.stream.Collectors;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(APIException.class)
    public ResponseEntity<ExceptionResponse<String>> handleBlogAPIException(APIException exception, WebRequest webRequest) {
        System.out.println("EXCEPTION HANDLED");
        ExceptionResponse<String> exceptionResponse = new ExceptionResponse<>(exception.getCode(), exception.getDetails());
        return new ResponseEntity<>(exceptionResponse, exception.getStatus());
    }
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ExceptionResponse<String>> handleConstraintViolationException(ConstraintViolationException exception, WebRequest webRequest){
        ExceptionResponse<String> res = new ExceptionResponse<>("CONSTRAINT_VIOLATION", "");
        res.setDetails(exception.getConstraintViolations().stream().map(ConstraintViolation::getMessage).collect(Collectors.joining(", ")));
        return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST) ;
    }
    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public ResponseEntity<ExceptionResponse<String>> handleSQLIntegrityConstraintViolationException(SQLIntegrityConstraintViolationException exception, WebRequest webRequest){
        ExceptionResponse<String> res = new ExceptionResponse<>("CONSTRAINT_VIOLATION", exception.getMessage() + "\n\nThis may be caused because an article with this title already exists.\n\n");
        System.out.println(exception.getMessage());
        return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
    }
}