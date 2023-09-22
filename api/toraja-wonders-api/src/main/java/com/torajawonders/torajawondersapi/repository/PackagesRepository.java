package com.torajawonders.torajawondersapi.repository;

import com.torajawonders.torajawondersapi.entity.Package;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackagesRepository extends JpaRepository<Package, Long> {
}