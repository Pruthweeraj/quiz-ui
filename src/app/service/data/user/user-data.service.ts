import { HttpClient } from '@angular/common/http';
import { collectExternalReferences } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from 'src/app/beans/beans.component';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  validateAndGetUser(user: User) {
    return this.http.post<User>('http://localhost:8080/quiz-app/user', user);
  }
}
