import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../beans/beans.component';
import { AuthenticationService } from '../service/authentication.service';
import { QuizDataService } from '../service/data/quiz/quiz-data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private router: Router, public quizDataService: QuizDataService) { }

  public questions: Question[] = [];

  public ansMap: any;

  ngOnInit(): void {
    this.refreshQuiz()
  }

  refreshQuiz() {
    this.quizDataService.getQuestions().subscribe(
      (response) => {
        console.log(response);
        this.questions = response;
      }
    )
  }

  onSubmit(value: any) {
    this.ansMap = new Map<string, string>();
    let thisPointer = this;
    Object.keys(value).map(function (questionId) {
      if (typeof (value[questionId]) === "string") {
        thisPointer.ansMap[questionId] = value[questionId];
      }
    })
    this.submitAns(this.ansMap);

    this.router.navigate(['welcome', this.authenticationService.getUsernameFromSection()]);
  }

  submitAns(ansMap: Map<string, string>) {
    this.quizDataService.submitAns(this.authenticationService.getUserIdFromSection(), ansMap).subscribe();
  }

}