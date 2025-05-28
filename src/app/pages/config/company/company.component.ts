import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CompanyService, Company } from '../../../services/company.service';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyData: Company | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyData = this.companyService.getCurrentCompanyData();
  }

  onEditCompany() {
    // Implementar lógica de edição
  }

  onManageBranches() {
    // Implementar lógica de gestão de filiais
  }

  onSalaryRanges() {
    // Implementar lógica de faixas salariais
  }

  onJobLevel() {
    // Implementar lógica de job level
  }
}
