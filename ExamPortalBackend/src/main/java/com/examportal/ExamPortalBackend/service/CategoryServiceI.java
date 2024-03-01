package com.examportal.ExamPortalBackend.service;

import com.examportal.ExamPortalBackend.entity.exam.Category;

import java.util.List;
import java.util.Set;

public interface CategoryServiceI {

    Category addCategory(Category category);

    Category updateCategory(Category category,long categoryId);

    List<Category> getAllCategories();

    Category getCategory(long categoryId);

    void deleteCategory(long categoryId);
}
