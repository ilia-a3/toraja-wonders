package com.torajawonders.torajawondersapi.service;

import com.torajawonders.torajawondersapi.payload.LoginForm;
import com.torajawonders.torajawondersapi.payload.TokensDto;

public interface AuthService {
    TokensDto login(LoginForm loginForm);
    TokensDto refresh(String refreshToken);
    void logout(String refreshToken);
}
