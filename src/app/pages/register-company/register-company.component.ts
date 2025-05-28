import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegistrationDataService } from '../../services/registration-data.service';
import { CompanyModalComponent } from '../../components/company-modal/company-modal.component';

@Component({
  selector: 'app-register-company',
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.scss',
  standalone: true
})
export class RegisterCompanyComponent {
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private registrationDataService = inject(RegistrationDataService);

  userName: string = '';

  constructor() {
    const formData = this.registrationDataService.getFormData();
    this.userName = formData?.name || '';
  }

  openCompanyModal() {
    const dialogRef = this.dialog.open(CompanyModalComponent, {
      width: '80vw',
      height: '80vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Company data:', result);
        // TODO: Handle the company data (save to service/backend)
      }
    });
  }
}
