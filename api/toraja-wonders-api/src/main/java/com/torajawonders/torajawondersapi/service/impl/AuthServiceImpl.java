package com.torajawonders.torajawondersapi.service.impl;

import com.torajawonders.torajawondersapi.payload.LoginForm;
import com.torajawonders.torajawondersapi.payload.TokensDto;
import com.torajawonders.torajawondersapi.security.JwtTokenProvider;
import com.torajawonders.torajawondersapi.service.AuthService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;

    public AuthServiceImpl(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public TokensDto login(LoginForm loginForm) {
        System.out.println(loginForm.getUsername()+loginForm.getPassword());

        Authentication auth =  authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginForm.getUsername(),
                        loginForm.getPassword()
                )
        );
        System.out.println("made it here");
        SecurityContextHolder.getContext().setAuthentication(auth);
        String accessToken = jwtTokenProvider.generateToken(loginForm.getUsername());
        String refreshToken = "";
        return new TokensDto(accessToken, refreshToken);
    }
}
