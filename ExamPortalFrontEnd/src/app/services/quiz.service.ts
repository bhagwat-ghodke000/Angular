import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public quizzes(){
    return this.http.get(`${baseUrl}/quiz/`);
  }

  public addQuiz(quiz:any){
    return this.http.post(`${baseUrl}/quiz/`,quiz);
  }

  public delete(quizId:any){
    return this.http.delete(`${baseUrl}/quiz/${quizId}`);
  }

  public getquiz(quizId:any){
      
    return this.http.get(`${baseUrl}/quiz/${quizId}`);

  }

  public updatequiz(quiz:any,quizId:any){
      
    return this.http.put(`${baseUrl}/quiz/${quizId}`,quiz);

  }

  
  public getquizsOfCategory(categoryId:any){
      
    return this.http.get(`${baseUrl}/quiz/category/${categoryId}`);

  }

   
  public getactivequizsOfCategory(categoryId:any){
      
    return this.http.get(`${baseUrl}/quiz/activequizofcategory/${categoryId}`);

  }

  public getactiveQuizz(){
      
    return this.http.get(`${baseUrl}/quiz/activequizes`);

  }

  



}
