package com.torajawonders.torajawondersapi.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.UniqueElements;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;
    @NotBlank(message = "Username can't be blank.")
    @Column(unique = true)
    @Size(min = 2, max = 12, message = "Your username must be be longer than 2 and shorter than 12 characters long.")
    private String username;
    @NotBlank(message = "E-Mail can't be blank.")
    private String email;
    @JsonIgnore
    @NotBlank(message = "You must have a password.")
    private String password;
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;
}
