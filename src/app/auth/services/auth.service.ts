import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponseData } from '../../models/auth.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  login(username: string, password: string) {
    return this.httpClient.post<LoginResponseData>('https://dummyjson.com/auth/login', { username, password, expiresInMins: 30 });
  }

   formatUser(data:LoginResponseData){
        const user=new User(data.id,data.email,data.accessToken);
        return user;
    }
}
