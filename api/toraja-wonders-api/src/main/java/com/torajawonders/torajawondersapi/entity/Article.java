package com.torajawonders.torajawondersapi.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
@Entity
@Table(
        uniqueConstraints = @UniqueConstraint(columnNames = {"title"}, name = "uc_article_title")
)
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(unique = true)
    @NotBlank(message = "You must include a title")
    private String title;
//    private String imgUrls;
    @OneToMany(
            orphanRemoval = true
    )
    private List<ArticleSection> sections;
    @CreatedDate
    private Date datePublished;
    @NotBlank(message = "You must include a category")
    private String category;
}
