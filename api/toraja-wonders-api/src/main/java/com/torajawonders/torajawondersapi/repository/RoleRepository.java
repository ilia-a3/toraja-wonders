package com.torajawonders.torajawondersapi.repository;

import com.torajawonders.torajawondersapi.entity.Role;
import com.torajawonders.torajawondersapi.entity.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}