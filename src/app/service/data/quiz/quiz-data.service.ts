import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question, Result } from 'src/app/beans/beans.component';

@Injectable({
  providedIn: 'root',
})
export class QuizDataService {
  constructor(private http: HttpClient) { }

  getResults() {
    return this.http.get<Result[]>('http://localhost:8080/quiz-app/results');
  }

  getQuestions() {
    return this.http.get<Question[]>('http://localhost:8080/quiz-app/questions');
  }

  submitAns(userId: any, ansMap: Map<string, string>) {
    const params = new HttpParams()
      .set('userId', userId.toString());
    return this.http.post('http://localhost:8080/quiz-app/answer', ansMap, { params });
  }
}
