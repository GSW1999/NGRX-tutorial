import { AuthService } from './../services/auth.service';
import {  map, mergeMap } from 'rxjs/operators';
import { loginStart, loginSuccess } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
  login$
  constructor(private actions$: Actions, private authService: AuthService) {
    this.login$ = createEffect(() => {
      return this.actions$.pipe(ofType(loginStart), mergeMap((action) => {
        return this.authService.login(action.username, action.password).pipe(map((data)=> {
          const user =this.authService.formatUser(data)
          return loginSuccess({user});
        }))
      }))
    })
  }
}