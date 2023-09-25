package com.torajawonders.torajawondersapi.controller;

import com.torajawonders.torajawondersapi.payload.LoginForm;
import com.torajawonders.torajawondersapi.payload.TokensDto;
import com.torajawonders.torajawondersapi.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(originPatterns = "*")
public class AuthController {
    private AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }
    @PostMapping("login")
    public ResponseEntity<TokensDto> login(@RequestBody LoginForm loginForm) {

        return ResponseEntity.ok(authService.login(loginForm));
    }
    @PostMapping("refresh")
    public TokensDto refresh(@RequestBody TokensDto tokens) {
        return authService.refresh(tokens.getRefreshToken());
    }
    @PostMapping("logout")
    @ResponseStatus(HttpStatus.OK)
    public void logout(@RequestParam String refreshToken) {
        authService.logout(refreshToken);
    }
}
