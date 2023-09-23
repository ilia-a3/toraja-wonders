package com.torajawonders.torajawondersapi.controller;

import com.torajawonders.torajawondersapi.entity.Roles;
import com.torajawonders.torajawondersapi.entity.User;
import com.torajawonders.torajawondersapi.payload.UserRegistration;
import com.torajawonders.torajawondersapi.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("register/user")
    public User registerUser(@RequestBody UserRegistration userRegistration) {
        return userService.registerUser(userRegistration);

    }
    @PreAuthorize("hasRole('ADM')")
    @PostMapping("register/admin")
    public User registerAdmin(@RequestBody UserRegistration userRegistration) {
        return userService.registerAdmin(userRegistration);
    }
}
