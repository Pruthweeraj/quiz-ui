import { Component, OnInit } from '@angular/core';

export class User {
  public constructor(
    public id: number,
    public name: string,
    public password: string,
    public role: string // public result: Result
  ) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.role = role;
    // this.result = result;
  }
}

export class Result {
  public constructor(
    public id: number,
    public user: User,
    public score: number
  ) {
    this.id = id;
    this.user = user;
    this.score = score;
  }
}

export class Question {
  public constructor(
    public id: number,
    public name: string,
    public options: Option[]
  ) {
    this.id = id;
    this.name = name;
    this.options = options;
  }
}

export class Option {
  public constructor(
    public id: number,
    public name: string,
    // public question: Question,
    public selected: boolean
  ) {
    this.id = id;
    this.name = name;
    // this.question = question;
    this.selected = selected;
  }
}

@Component({
  selector: 'app-beans',
  templateUrl: './beans.component.html',
  styleUrls: ['./beans.component.css'],
})
export class BeansComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
