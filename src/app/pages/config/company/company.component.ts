import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CompanyService, Company } from '../../../services/company.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CompanyModalComponent } from '../../../components/company-modal/company-modal.component';
@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ],
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyData: Company | null = null;
  private dialog = inject(MatDialog);
  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyData = this.companyService.getCurrentCompanyData();
  }

  onEditCompany() {
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
