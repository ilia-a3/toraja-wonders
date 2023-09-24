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
        RefreshToken refreshToken = refreshTokenRepository.findByToken(token).orElseThrow(() -> new APIException("AUTH_ERROR", "Refresh token doesn't exist", HttpStatus.UNAUTHORIZED));
        if (new Date().after(refreshToken.getExpiry())){
            throw new APIException("AUTH_ERROR", "Refresh token has expired. Please login again", HttpStatus.UNAUTHORIZED);
        }
        return refreshToken.getOwner();
    }

    @Override
    public String generateToken(String ownerUsername) {
        RefreshToken refreshToken = new RefreshToken();

        refreshToken.setOwner(userService.getUserByUsername(ownerUsername));
        if (refreshToken.getOwner() == null) {
            throw new APIException("AUTH", "That username doesn't exist", HttpStatus.UNAUTHORIZED);
        }

        Date expiryDate = new Date();
        expiryDate.setTime(new Date().getTime() + Long.decode(expiration));
        refreshToken.setExpiry(expiryDate);

        refreshToken.setToken(UUID.randomUUID().toString() + "@" + expiryDate.toString().replace(" ", "-"));
        refreshTokenRepository.save(refreshToken);
        return refreshToken.getToken();
    }
}
