import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from 'src/app/beans/beans.component';

@Injectable({
  providedIn: 'root',
})
export class QuizDataService {
  constructor(private http: HttpClient) {}

  getResults() {
    return this.http.get<Result[]>('http://localhost:8080/quiz-app/results');
  }
}
