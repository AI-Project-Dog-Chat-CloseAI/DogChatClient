import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  checkUser() :  boolean {
    if(localStorage.getItem('user')) {
      if(!this.checkExpired()) {
        this.removeUser();
      }
      return true;
    }
    return false;
  }

  getUser() : any {
    return JSON.parse(localStorage.getItem('user')!);
  }

  setUser(email : string) {
    const user = {email, expired: new Date().setDate(new Date().getDay() + 30)};
    localStorage.setItem('user', JSON.stringify(user));
  }

  private checkExpired() : boolean {
    const user = this.getUser();
    return new Date() < user.expired;
  }

  removeUser() {
    localStorage.removeItem('user');
  }
}
