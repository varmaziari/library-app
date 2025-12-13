import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  router=inject(Router)
  loginform:LoginForm={
    username:'',
    password:'',
    remember:false
  };
  message:string='';
  check(){
    if (this.loginform.username=='admin' && this.loginform.password=='admin') {
      this.router.navigateByUrl('/private')
    } 
    else {
      this.message='نام کاربری یا رمز عبور صحیح نمیباشد';
    }
  }
}
export interface LoginForm{
  username:string;
  password:string;
  remember:boolean;
}
