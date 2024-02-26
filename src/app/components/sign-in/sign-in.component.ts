import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {
  errorMessage: string = '';
  email: string = '';
  password: string = '';

  constructor(private router : Router, private accService : AccountService, private service : RequestService) {}
  
  ngOnInit(): void {
    this.service.getDataRequest('login').subscribe((data) =>{
      if(data.status) {
        this.accService.removeUser();
        this.accService.setUser(this.email);
        this.router.navigate(['']);
      }else this.errorMessage = data.message;
    })
  }

  onSignIn() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(this.email)) {
      this.service.signInRequest(this.email,this.password);
    }else {
      this.errorMessage = 'Email is not valid';
    }
  }
}
