import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CompanyService, Company } from '../../services/company.service';

@Component({
  selector: 'app-company-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.scss']
})
export class CompanyModalComponent {
  companyForm: FormGroup;
  companyTypes = ['Matriz', 'Filial'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CompanyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private companyService: CompanyService
  ) {
    this.companyForm = this.fb.group({
      companyType: ['', Validators.required],
      companyName: ['', Validators.required],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      address: ['', Validators.required],
      neighborhood: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      information: [''],
      cellPhone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]],
      administratorName: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });

    // Load existing data if available
    const existingData = this.companyService.getCurrentCompanyData();
    if (existingData) {
      this.companyForm.patchValue(existingData);
    }
  }

  onSubmit() {
    if (this.companyForm.valid) {
      const companyData: Company = this.companyForm.value;
      this.companyService.saveCompanyData(companyData);
      this.dialogRef.close(companyData);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
