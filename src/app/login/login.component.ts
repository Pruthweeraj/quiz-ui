import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../beans/beans.component';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'JonDoe';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  handleLogin() {
    const user = new User(-1, this.username, this.password, '');
    const validUser = this.authenticationService.validateUser(user).subscribe(
      (responseUser) => {
        sessionStorage.setItem('username', responseUser.name);
        sessionStorage.setItem('userId', responseUser.id.toString());
        sessionStorage.setItem('role', responseUser.role);

        this.router.navigate(['welcome', responseUser.name]);
      },
      (error) => {
        sessionStorage.clear();
        this.invalidLogin = true;
      }
    );
  }
}
