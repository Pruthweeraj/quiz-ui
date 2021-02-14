import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Result } from '../beans/beans.component';
import { AuthenticationService } from '../service/authentication.service';
import { QuizDataService } from '../service/data/quiz/quiz-data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  results: Result[] = [];
  constructor(public QuizDataService: QuizDataService) {}

  ngOnInit(): void {
    this.refreshResult();
  }

  refreshResult() {
    this.QuizDataService.getResults().subscribe((response) => {
      console.log(response);
      this.results = response;
    });
  }
}
