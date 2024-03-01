package com.examportal.ExamPortalBackend.service;

import com.examportal.ExamPortalBackend.entity.exam.Category;
import com.examportal.ExamPortalBackend.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class CategoryServiceImpl implements CategoryServiceI{

    @Autowired
    private CategoryRepo categoryRepo;
    @Override
    public Category addCategory(Category category) {
        Category category1 = this.categoryRepo.save(category);
        return category1;
    }

    @Override
    public Category updateCategory(Category category, long categoryId) {

        Category category1 = this.categoryRepo.findById(categoryId).get();
        category1.setDescription(category.getDescription());
        category1.setTitle(category.getTitle());
        category1.setQuizzes(category.getQuizzes());
        Category save = this.categoryRepo.save(category1);
        return save;
    }

    @Override
    public List<Category> getAllCategories() {

        List<Category> all = this.categoryRepo.findAll();
        return  all;
    }

    @Override
    public Category getCategory(long categoryId) {

        Category category = this.categoryRepo.findById(categoryId).get();

        return category;
    }

    @Override
    public void deleteCategory(long categoryId) {

        Category category = this.categoryRepo.findById(categoryId).get();

        this.categoryRepo.delete(category);
    }
}
