package com.torajawonders.torajawondersapi.payload;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
public class ExceptionResponse<T> {
    private String code;
    private T details;
    private Date timestamp;

    public ExceptionResponse(String code, T details) {
        this.code = code;
        this.details = details;
        timestamp = new Date();
    }
}
