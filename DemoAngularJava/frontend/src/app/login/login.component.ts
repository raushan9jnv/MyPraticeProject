import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';

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

  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username==="raushan9jnv" && this.password==="raushan"){
      this.invalidLogin=false
      this.router.navigate(['home'])
      console.log('login success')
    }
    else{
      this.invalidLogin=true
    }
  }

}
