package com.torajawonders.torajawondersapi.service.impl;

import com.torajawonders.torajawondersapi.entity.RefreshToken;
import com.torajawonders.torajawondersapi.entity.User;
import com.torajawonders.torajawondersapi.exception.APIException;
import com.torajawonders.torajawondersapi.repository.RefreshTokenRepository;
import com.torajawonders.torajawondersapi.service.RefreshTokenService;
import com.torajawonders.torajawondersapi.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

@Service
public class RefreshTokenServiceImpl implements RefreshTokenService {
    private RefreshTokenRepository refreshTokenRepository;
    private UserService userService;

    @Value("${app.auth.expiration.refreshToken}")
    private String expiration;

    public RefreshTokenServiceImpl(RefreshTokenRepository refreshTokenRepository, UserService userService) {
        this.refreshTokenRepository = refreshTokenRepository;
        this.userService = userService;
    }

    @Override
    public User validateToken(String token) {
        System.out.println(token);
        RefreshToken refreshToken = validateRefreshToken(token);

        return refreshToken.getOwner();
    }

    @Override
    public String generateToken(String ownerUsername) {
        User owner = userService.getUserByUsername(ownerUsername);
//        Remove old token if one already exists for that user
        refreshTokenRepository.delete(refreshTokenRepository.findByOwner(owner).orElseThrow());


        RefreshToken refreshToken = new RefreshToken();
        refreshToken.setOwner(owner);
        if (refreshToken.getOwner() == null) {
            throw new APIException("AUTH", "That username doesn't exist", HttpStatus.UNAUTHORIZED);
        }

        Date expiryDate = new Date();
        expiryDate.setTime(new Date().getTime() + Long.decode(expiration));
        refreshToken.setExpiry(expiryDate);

        refreshToken.setToken(UUID.randomUUID() + "@" + expiryDate.toString().replace(" ", "-"));
        refreshTokenRepository.save(refreshToken);
        return refreshToken.getToken();
    }

    @Override
    public void removeToken(String token) {
        refreshTokenRepository.deleteByToken(token);
    }

    private RefreshToken validateRefreshToken(String tokenStr){
        RefreshToken token = refreshTokenRepository.findByToken(tokenStr).orElseThrow(() -> new APIException("AUTH_TOKEN", "Refresh token doesn't exist", HttpStatus.UNAUTHORIZED));
        if (new Date().after(token.getExpiry())){
            removeToken(token.getToken());
            throw new APIException("AUTH_ERROR", "Refresh token has expired. Please login again", HttpStatus.UNAUTHORIZED);
        }
        return token;
    }
}
