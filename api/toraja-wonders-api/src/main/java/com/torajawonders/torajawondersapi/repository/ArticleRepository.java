package com.torajawonders.torajawondersapi.repository;

import com.torajawonders.torajawondersapi.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    Optional<Article> findByTitle(String title);
}