package com.examportal.ExamPortalBackend.entity.exam;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Category {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private long categoryId;

   private String title;

   private String description;

   @OneToMany(mappedBy = "category",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
  @JsonIgnore
   private Set<Quiz> quizzes = new LinkedHashSet<>();
}
