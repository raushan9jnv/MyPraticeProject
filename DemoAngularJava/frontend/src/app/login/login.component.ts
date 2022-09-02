import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Console } from 'console';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // title='Login'
  username='raushan9jnv'
  password=''
  errorMessage='Invalid credential'
  invalidLogin= false

  constructor(private router:Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin=false
      this.router.navigate(['home',this.username])
      console.log('login success')
    }
    else{
      this.invalidLogin=true
    }
  }

}
