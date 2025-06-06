import { createAction, props } from "@ngrx/store"
import { User } from "../../models/user.model";

export const LOGIN_START='[Auth Module] Login Start'
export const LOGIN_SUCCESS='[Auth Module] Login Success'
export const LOGIN_FAIL='[Auth Module] Login Fail'

export const loginStart=createAction(LOGIN_START,props<{username:string,password:string}>());
export const loginSuccess=createAction(LOGIN_SUCCESS,props<{user:User}>());
export const loginFail=createAction(LOGIN_FAIL);