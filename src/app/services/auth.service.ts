import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthDTO, User } from '../models/user';
import { AuthType } from '@app/models/auth';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.api_server + '/api';

  constructor(private http: HttpClient) { }

  private auth(authtype: AuthType, data: any ): Observable<any> {
    return this.http.post(`${this.apiUrl}/${authtype}`, data);

  }

  login(data: AuthDTO): Observable<User> {
    return this.auth('login', data);

  }

  register(data: AuthDTO): Observable<User> {
    return this.auth('register', data);
  }

  get token(): string {
    return localStorage.get('idea-token');
  }
  set token(val: string) {
    if (val) {
      localStorage.setItem('idea-token', val);

    } else {
 localStorage.clear();
    }
  }
whoami(){
 return this.http.get(`${this.apiUrl}/whoami`, {headers: {authorization: `Bearer ${this.token}`}});
}

}
  // @Post('api/register')

