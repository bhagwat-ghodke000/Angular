import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuestionOfQuiz(quizId:any){
      
   return this.http.get(`${baseUrl}/question/quiz/${quizId}`);
  }

  public addQuestions(questions:any){
      
    return this.http.post(`${baseUrl}/question/`,questions);
   }

   public deleteQuestions(questionId:any){
      
    return this.http.delete(`${baseUrl}/question/${questionId}`);
   }
}
