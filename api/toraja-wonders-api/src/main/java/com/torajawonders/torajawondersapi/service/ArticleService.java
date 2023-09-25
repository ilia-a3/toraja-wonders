package com.torajawonders.torajawondersapi.service;

import com.torajawonders.torajawondersapi.entity.Article;
import com.torajawonders.torajawondersapi.payload.ArticleDto;
import com.torajawonders.torajawondersapi.payload.ArticleResponse;

import java.util.List;

public interface ArticleService {
    ArticleResponse getArticleByTitle(String title);
    ArticleResponse addArticle(ArticleDto articleDto);
    List<ArticleResponse> getAllArticles();
    ArticleResponse editArticle(ArticleDto articleResponse);
}
