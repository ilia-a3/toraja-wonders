package com.torajawonders.torajawondersapi.controller;

import com.torajawonders.torajawondersapi.entity.Article;
import com.torajawonders.torajawondersapi.payload.ArticleDto;
import com.torajawonders.torajawondersapi.payload.ArticleResponse;
import com.torajawonders.torajawondersapi.payload.ArticleSectionDto;
import com.torajawonders.torajawondersapi.service.ArticleService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/articles")
@CrossOrigin(origins = {"http://localhost:3000/", "localhost:3000/", "http://localhost:8080/", "localhost:8080/"})
public class ArticleController {
    private ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }
    @GetMapping("title/{title}")
    public ResponseEntity<ArticleResponse> getArticleByTitle(@PathVariable String title) {
        ArticleResponse a = articleService.getArticleByTitle(title);
        if (a == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(a);
    }
    @PreAuthorize("hasRole('ADM')")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    @ResponseBody
    public ArticleResponse addArticle(@RequestBody ArticleDto articleDto) {
        return articleService.addArticle(articleDto);
    }

    @GetMapping("all")
    public List<ArticleResponse> getAllArticles() {
        return articleService.getAllArticles();
    }

    @RequestMapping(method = RequestMethod.OPTIONS, value = "")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity options(HttpServletResponse response) {
        System.out.println("OPTIONS called");
        response.setHeader("Allow", "HEAD,GET,PUT,OPTIONS");
        return new ResponseEntity(HttpStatus.OK);
    }
}
