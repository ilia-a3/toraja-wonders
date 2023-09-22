package com.torajawonders.torajawondersapi.controller;

import com.torajawonders.torajawondersapi.payload.LoginForm;
import com.torajawonders.torajawondersapi.payload.TokensDto;
import com.torajawonders.torajawondersapi.service.AuthService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }
    @PostMapping("login")
    public TokensDto login(@RequestBody LoginForm loginForm) {
        return authService.login(loginForm);
    }
}
