import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { RegistrationDataService } from '../../services/registration-data.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatExpansionModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  private companyService = inject(CompanyService);
  private registrationDataService = inject(RegistrationDataService);

  userName: string | null = null;
  hasCompany = computed(() => !!this.companyService.getCurrentCompanyData());

  // Menu states
  companyMenuExpanded = true;
  systemMenuExpanded = false;
  jobsMenuExpanded = false;
  usersMenuExpanded = false;

  ngOnInit() {
    // Subscribe to registration data changes
    this.registrationDataService.getFormDataObservable().subscribe(data => {
      this.userName = data?.name || null;
    });
  }
}
