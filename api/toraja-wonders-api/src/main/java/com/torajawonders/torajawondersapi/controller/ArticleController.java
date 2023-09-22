package com.torajawonders.torajawondersapi.controller;

import com.torajawonders.torajawondersapi.entity.Article;
import com.torajawonders.torajawondersapi.payload.ArticleDto;
import com.torajawonders.torajawondersapi.payload.ArticleResponse;
import com.torajawonders.torajawondersapi.payload.ArticleSectionDto;
import com.torajawonders.torajawondersapi.service.ArticleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/articles/")
public class ArticleController {
    private ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }
    @GetMapping("{title}")
    public ResponseEntity<ArticleResponse> getArticleByTitle(@PathVariable String title) {
        ArticleResponse a = articleService.getArticleByTitle(title);
        if (a == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(a);
    }
    @PostMapping
    public ArticleResponse addArticle(@RequestBody ArticleDto articleDto) {
        return articleService.addArticle(articleDto);
    }


}
