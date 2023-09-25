package com.torajawonders.torajawondersapi.service.impl;

import com.torajawonders.torajawondersapi.entity.Article;
import com.torajawonders.torajawondersapi.entity.ArticleSection;
import com.torajawonders.torajawondersapi.payload.ArticleDto;
import com.torajawonders.torajawondersapi.payload.ArticleResponse;
import com.torajawonders.torajawondersapi.payload.ArticleSectionDto;
import com.torajawonders.torajawondersapi.repository.ArticleRepository;
import com.torajawonders.torajawondersapi.repository.ArticleSectionRepository;
import com.torajawonders.torajawondersapi.service.ArticleService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArticleServiceImpl implements ArticleService {
    private ArticleRepository articleRepository;
    private ArticleSectionRepository articleSectionRepository;
    private ModelMapper modelMapper;

    public ArticleServiceImpl(ArticleRepository articleRepository, ArticleSectionRepository articleSectionRepository, ModelMapper modelMapper) {
        this.articleRepository = articleRepository;
        this.articleSectionRepository = articleSectionRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public ArticleResponse getArticleByTitle(String title) {
        try {
            Article a = articleRepository.findByTitle(title).orElseThrow(() -> new RuntimeException("No articles found with that title"));
            ArticleResponse articleDto = modelMapper.map(a, ArticleResponse.class);
            articleDto.setImgUrls(List.of(a.getImgUrls().split(",")));
            return articleDto;
        } catch (RuntimeException e) {
            return null;
        }
    }

    @Override
    public ArticleResponse addArticle(ArticleDto articleDto) {
        Article article = modelMapper.map(articleDto, Article.class);
        article.setImgUrls(String.join(",", articleDto.getImgUrls()));
        article.setSections(articleDto.getSections().stream().map(this::addArticleSection).collect(Collectors.toList()));
        article.setDatePublished(new Date());
        articleRepository.save(article);
        return getArticleByTitle(articleDto.getTitle());
    }

    @Override
    public List<ArticleResponse> getAllArticles() {
        return articleRepository.findAll().stream().map((element) -> modelMapper.map(element, ArticleResponse.class)).collect(Collectors.toList());
    }

    @Override
    public ArticleResponse editArticle(ArticleDto articleResponse) {
        return null;
    }

    public ArticleSection addArticleSection(ArticleSectionDto articleSectionDto) {
        return articleSectionRepository.save(modelMapper.map(articleSectionDto, ArticleSection.class));
    }
}
