import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;

  setUser(user: any) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  getUserRole() {
    return this.user.role;
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }
}
