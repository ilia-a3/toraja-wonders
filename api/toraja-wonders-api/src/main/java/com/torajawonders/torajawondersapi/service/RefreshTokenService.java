package com.torajawonders.torajawondersapi.service;

import com.torajawonders.torajawondersapi.entity.RefreshToken;
import com.torajawonders.torajawondersapi.entity.User;

public interface RefreshTokenService {
    User validateToken(String token);
    String generateToken(String ownerUsername);
}
