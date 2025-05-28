import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Company {
  companyType: string;
  companyName: string;
  cnpj: string;
  cep: string;
  address: string;
  neighborhood: string;
  state: string;
  city: string;
  information: string;
  cellPhone: string;
  administratorName: string;
  cpf: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyData = new BehaviorSubject<Company | null>(null);

  constructor() {
    // Try to load data from sessionStorage on service initialization
    const savedData = sessionStorage.getItem('companyData');
    if (savedData) {
      this.companyData.next(JSON.parse(savedData));
    }
  }

  // Save company data
  saveCompanyData(data: Company): void {
    this.companyData.next(data);
    // Also save to sessionStorage for persistence across page refreshes
    sessionStorage.setItem('companyData', JSON.stringify(data));
  }

  // Get company data as Observable
  getCompanyData(): Observable<Company | null> {
    return this.companyData.asObservable();
  }

  // Get current company data value
  getCurrentCompanyData(): Company | null {
    return this.companyData.value;
  }

  // Clear company data
  clearCompanyData(): void {
    this.companyData.next(null);
    sessionStorage.removeItem('companyData');
  }
}
