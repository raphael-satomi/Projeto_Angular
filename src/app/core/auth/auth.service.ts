import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

const API_URL = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(userName: string, password: string)
  {
    return this.http
      .post(
        API_URL + '/user/login',
        { userName, password},
        { observe: 'response' }
      )
      .pipe( tap(res => {
        const authToken: any = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9lIFNhbSJ9.RpYD7qsSX8UvhHeBarSe67yJo-OXU2UNtIvmme0u2vo";
        this.userService.setToken(authToken);
      }))
  }
}
