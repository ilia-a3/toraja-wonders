package com.torajawonders.torajawondersapi.payload;
import com.torajawonders.torajawondersapi.entity.ArticleSection;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ArticleResponse {
    private String title;
    private List<String> imgUrls;
    private List<ArticleSection> sections;
    private Date datePublished;
    private String category;
}
