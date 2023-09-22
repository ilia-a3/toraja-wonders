package com.torajawonders.torajawondersapi.security;

import com.torajawonders.torajawondersapi.entity.User;
import com.torajawonders.torajawondersapi.exception.APIException;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtTokenProvider {
    @Value("${app.jwt-secret}")
    private String jwtSecret;
    @Value("${app.jwt-expiration-milliseconds}")
    private String jwtExpiration;

    //  generate jwt token
    public String generateToken(String username) {
        System.out.println("username : " + username);
        Date currentDate = new Date();

        Date expireDate = new Date(currentDate.getTime() + Long.decode(jwtExpiration));

        System.out.println(expireDate);

        String jwtToken = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(currentDate)
                .setExpiration(expireDate)
                .signWith(key())
                .compact();

        return jwtToken;
    }

    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

    //  get username from jwt token
    public String getUsername(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key())
                .build()
                .parseClaimsJws(token)
                .getBody();

        String username = claims.getSubject();
        return username;
    }

    public boolean validateToken(String token){
        try {
            Jwts.parserBuilder()
                    .setSigningKey(key())
                    .build()
                    .parse(token);
            return true;
        } catch (MalformedJwtException e) {
            throw new APIException("SECURITY_ERROR", "Invalid JWT Format", HttpStatus.BAD_REQUEST);
        } catch (ExpiredJwtException e) {
            throw new APIException("SECURITY_ERROR", "Expired JWT Token", HttpStatus.BAD_REQUEST);
        } catch (UnsupportedJwtException e) {
            throw new APIException("SECURITY_ERROR", "Unsupported JWT Token", HttpStatus.BAD_REQUEST);
        } catch (IllegalArgumentException e) {
            throw new APIException("SECURITY_ERROR", "JWT Claims String Empty", HttpStatus.BAD_REQUEST);
        }
    }
}
