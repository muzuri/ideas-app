import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = environment.api_server + 'api';

  constructor(private httpclient: HttpClient) { }
  private request(){}
}
