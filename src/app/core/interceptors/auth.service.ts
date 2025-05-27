import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = '${environment.apiUrl}/auth';
  constructor(private http: HttpClient) { }
  loginWithProvider(provider: string) {
    return window.location.href = `${this.baseUrl}/${provider}`;
  }

  logout() {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  getUser() {
    return this.http.get(`${this.baseUrl}/me`);
  }
}
