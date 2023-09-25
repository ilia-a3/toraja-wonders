package com.torajawonders.torajawondersapi.repository;

import com.torajawonders.torajawondersapi.entity.RefreshToken;
import com.torajawonders.torajawondersapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Ref;
import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByToken(String token);
    void deleteByToken(String token);
    Optional<RefreshToken> findByOwner(User owner);
}