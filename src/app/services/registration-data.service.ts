import { Injectable } from '@angular/core';

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
  private formData: RegistrationFormData | null = null;

  setFormData(data: RegistrationFormData): void {
    this.formData = data;
  }

  getFormData(): RegistrationFormData | null {
    return this.formData;
  }

  clearFormData(): void {
    this.formData = null;
  }}
