import { Injectable, resolveForwardRef } from '@angular/core';
import { User } from '../beans/beans.component';
import { UserDataService } from './data/user/user-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private userDataService: UserDataService) {}

  validateUser(requestUser: User) {
    return this.userDataService.validateAndGetUser(requestUser);
  }

  isUserLoggedIn() {
    if (
      null !== sessionStorage.getItem('username') &&
      null != sessionStorage.getItem('userId')
    ) {
      return true;
    }
    return false;
  }

  isAdmin() {
    if ('admin' === sessionStorage.getItem('role')) {
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.clear();
  }
}
