import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../interfaces/requests/users/LoginRequest';
import {RegisterRequest} from "../interfaces/requests/RegisterRequest";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  registerUser(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerRequest);
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<LoginRequest>(`${this.baseUrl}/login`, loginRequest);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, null);
  }
}
