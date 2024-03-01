package com.examportal.ExamPortalBackend.controller;

import com.examportal.ExamPortalBackend.entity.exam.Category;
import com.examportal.ExamPortalBackend.service.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private CategoryServiceImpl categoryService;

    @PostMapping("/")
    ResponseEntity<Category> addCategory(@RequestBody Category category){
        Category category1 = this.categoryService.addCategory(category);
        return new ResponseEntity<>(category1, HttpStatus.CREATED);
    }

    @GetMapping("/{categoryId}")
    ResponseEntity<Category> getCategory(@PathVariable long categoryId){

        Category category = this.categoryService.getCategory(categoryId);
        return new ResponseEntity<>(category,HttpStatus.OK);
    }

    @PutMapping("/{categoryId}")
    ResponseEntity<Category> updateCategory(@RequestBody Category category,@PathVariable long categoryId){
        Category category1 = this.categoryService.updateCategory(category, categoryId);
        return new ResponseEntity<>(category1,HttpStatus.OK);
    }

    @DeleteMapping("/{categoryId}")
    ResponseEntity<String> deleteCategory(@PathVariable long categoryId){
        this.categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>("Category delete Successfully",HttpStatus.OK);
    }

    @GetMapping("/")
    ResponseEntity<List<Category>> getAllCategory(){

        List<Category> allCategories = this.categoryService.getAllCategories();
        return new ResponseEntity<>(allCategories,HttpStatus.OK);
    }

}
