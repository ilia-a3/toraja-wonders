package com.torajawonders.torajawondersapi.controller;

import com.torajawonders.torajawondersapi.entity.Roles;
import com.torajawonders.torajawondersapi.entity.User;
import com.torajawonders.torajawondersapi.payload.UserRegistration;
import com.torajawonders.torajawondersapi.service.UserService;
import jakarta.validation.Valid;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin()
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("register/user")
    public User registerUser(@Valid @RequestBody UserRegistration userRegistration) {
        return userService.registerUser(userRegistration);

    }
    @PreAuthorize("hasRole('ADM')")
    @PostMapping("register/admin")
    public User registerAdmin(@Valid @RequestBody UserRegistration userRegistration) {
        return userService.registerAdmin(userRegistration);
    }
}
