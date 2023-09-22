package com.torajawonders.torajawondersapi.payload;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class ExceptionResponse {
    private String code;
    private String details;
    private Date timestamp;

    public ExceptionResponse(String code, String details) {
        this.code = code;
        this.details = details;
        timestamp = new Date();
    }
}
