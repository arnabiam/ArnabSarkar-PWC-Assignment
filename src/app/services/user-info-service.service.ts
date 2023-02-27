import { Injectable } from '@angular/core';
import { Http2Server } from 'http2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userInfoDto } from '../interfaces/UserDtoInterface';

@Injectable({
  providedIn: 'root'
})
export class UserInfoServiceService {

  constructor(private http: HttpClient) { }

  fetchCurrentUserInfo(){
    return this.http.get<userInfoDto[]>("https://jsonplaceholder.typicode.com/users");
  }
}
