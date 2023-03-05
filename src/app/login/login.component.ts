import { LoginService } from './../login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private loginservice: LoginService,private router:Router) {

  }
  Login() {
    if(this.loginservice.login(this.username, this.password)){
      this.router.navigate(['rooms'])
    }
  }
}
