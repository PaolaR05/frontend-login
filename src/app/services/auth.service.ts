import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

}

export class AuthService {

  private baseUrl = 'http://localhost:5100/api/auth';

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post<{ token: string; role: string }>(`${this.baseUrl}/login`, credentials);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  
