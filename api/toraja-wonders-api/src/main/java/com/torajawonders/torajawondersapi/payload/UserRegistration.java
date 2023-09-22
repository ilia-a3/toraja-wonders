package com.torajawonders.torajawondersapi.payload;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.torajawonders.torajawondersapi.entity.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserRegistration {
    private String username;
    private String email;
    private String password;
//    private String role;
}
