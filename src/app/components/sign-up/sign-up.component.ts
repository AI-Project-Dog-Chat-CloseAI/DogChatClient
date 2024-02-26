import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  errorMessage: string = '';
  email : string = '';
  password : string = '';
  confirmPassword : string = '';

  constructor(private router : Router, private service : RequestService) {}

  ngOnInit(): void {
      this.service.getDataRequest('register').subscribe((data) => {
        if(data.status) this.router.navigate(['/login']);
        else this.errorMessage = data.message; 
      })
  }

  onSignUp() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(this.email)) {
      this.errorMessage = 'Email is not valid';
    }else if(this.password != this.confirmPassword) {
      this.errorMessage = 'Confirm Password is not valid';
    }else if(this.confirmPassword.length < 8) {
      this.errorMessage = 'Password must be greater than or equal to 8 characters';
    }else this.service.signUpRequest(this.email, this.password);
  }
}
