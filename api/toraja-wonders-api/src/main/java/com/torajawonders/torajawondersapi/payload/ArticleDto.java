package com.torajawonders.torajawondersapi.payload;
import com.torajawonders.torajawondersapi.entity.ArticleSection;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ArticleDto {
    private long id;
    private String title;
//    private List<String> imgUrls;
    private List<ArticleSectionDto> sections;
    private String category;
}
