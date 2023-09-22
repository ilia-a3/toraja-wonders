package com.torajawonders.torajawondersapi.exception;

import org.springframework.http.HttpStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class APIException extends RuntimeException {
    private String code;
    private String details;
    private HttpStatus status;

    public APIException(String code, String details, HttpStatus status) {
        this.code = code;
        this.details = details;
        this.status = status;
    }
    public static APIException notFoundException(String resource) {
        return new APIException("RESOURCE_NOT_FOUND", "Resource \"" + resource + "\" could not be found as does not exist.", HttpStatus.NOT_FOUND);
    }
}
