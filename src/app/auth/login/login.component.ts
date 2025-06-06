import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
 loginForm!:FormGroup;
 constructor(private store:Store<AppState>){}

 ngOnInit(){
  this.loginForm=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
 }

loginSubmit(){
  let username = this.loginForm.value.username;
  let password = this.loginForm.value.password;
  this.store.dispatch(loginStart({username,password}))
}

}
