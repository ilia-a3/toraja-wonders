package com.torajawonders.torajawondersapi.service.impl;

import com.torajawonders.torajawondersapi.entity.RefreshToken;
import com.torajawonders.torajawondersapi.entity.User;
import com.torajawonders.torajawondersapi.payload.LoginForm;
import com.torajawonders.torajawondersapi.payload.TokensDto;
import com.torajawonders.torajawondersapi.security.JwtTokenProvider;
import com.torajawonders.torajawondersapi.service.AuthService;
import com.torajawonders.torajawondersapi.service.RefreshTokenService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;
    private RefreshTokenService refreshTokenService;
    private PasswordEncoder passwordEncoder;

    public AuthServiceImpl(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, RefreshTokenService refreshTokenService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.refreshTokenService = refreshTokenService;
    }

    @Override
    public TokensDto login(LoginForm loginForm) {

        Authentication auth =  authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginForm.getUsername(),
                        loginForm.getPassword()
                )
        );
        System.out.println("made it here");
        SecurityContextHolder.getContext().setAuthentication(auth);
        String accessToken = jwtTokenProvider.generateToken(loginForm.getUsername());
        String refreshToken = refreshTokenService.generateToken(loginForm.getUsername());
        return new TokensDto(accessToken, refreshToken);
    }


    @Override
    public TokensDto refresh(String refreshToken) {
        User user =  refreshTokenService.validateToken(refreshToken);
        return new TokensDto(jwtTokenProvider.generateToken(user.getUsername()), refreshToken);
    }
}
