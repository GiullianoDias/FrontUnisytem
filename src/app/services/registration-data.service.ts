import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {
  private formData = new BehaviorSubject<RegistrationFormData | null>(null);

  constructor() {
    // Try to load data from sessionStorage on service initialization
    const savedData = sessionStorage.getItem('registrationData');
    if (savedData) {
      this.formData.next(JSON.parse(savedData));
    }
  }

  // Save registration data
  setFormData(data: RegistrationFormData): void {
    this.formData.next(data);
    // Also save to sessionStorage for persistence across page refreshes
    sessionStorage.setItem('registrationData', JSON.stringify(data));
  }

  // Get registration data as Observable
  getFormDataObservable(): Observable<RegistrationFormData | null> {
    return this.formData.asObservable();
  }

  // Get current registration data value
  getFormData(): RegistrationFormData | null {
    return this.formData.value;
  }

  // Clear registration data
  clearFormData(): void {
    this.formData.next(null);
    sessionStorage.removeItem('registrationData');
  }
}
