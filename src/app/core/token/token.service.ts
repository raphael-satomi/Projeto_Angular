import { Injectable } from "@angular/core";

const KEY = 'authToken';
@Injectable({ providedIn: 'root' })
export class TokenService
{
  hasToken()
  {
    return !!this.getToken();
  }

  setToken(token: string)
  {
    window.sessionStorage.setItem(KEY, token);
  }

  getToken()
  {
    return window.sessionStorage.getItem(KEY);
  }

  removeToken()
  {
    window.sessionStorage.removeItem(KEY);
  }
}
