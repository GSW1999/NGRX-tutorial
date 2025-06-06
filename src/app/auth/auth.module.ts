import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';

const routes:Routes=[
{path:'',children:
  [
    // {path:'',redirectTo:'login'},
    {path:'login',component:LoginComponent},
  ]
}
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule.forChild(routes),StoreModule.forFeature('auth',authReducer),EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
