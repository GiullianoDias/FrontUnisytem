import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BiometricService {
  private baseUrl = '${environment.apiUrl}/biometric';
  constructor(private http: HttpClient) { }
  collectBiometric(data: any) {
    return this.http.post(`${this.baseUrl}/validate`, data);
  }
}
