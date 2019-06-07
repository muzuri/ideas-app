import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthDTO } from '../models/user';
import { AuthType } from '@app/models/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.api_server;

  constructor(private httpclient: HttpClient) { }

  get token() {
    return localStorage.get('idea-token');
  }
  set token(val: string) {
    if (val) {
      localStorage.setItem('idea-token', val);

    } else {

    }
  }
  private auth(authtype: AuthType, data: any ) {
    return this.httpclient.post(`${this.apiUrl}/${authtype}`, data);

  }

  login() {

  }

  public register(data: AuthDTO) {
    return this.httpclient.post(`${this.apiUrl}/register`, data);
  }
  public async whoami(username: string) {
    return await this.httpclient.get(`${this.apiUrl}/auth/whomai/${username}`);


  }

}
  // @Post('api/register')

