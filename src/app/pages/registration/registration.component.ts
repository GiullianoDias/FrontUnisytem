import { Component, inject,effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registration',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  standalone: true,
})
export class RegistrationComponent {
  private fb = inject(FormBuilder);
  messages: string[] = [
    `Meu Rh360 é incrível! Ele é a solução perfeita para gerenciamento de pessoas e processos de contratação.
     Ele facilita a busca de novos talentos e ajuda a manter a equipe organizada e bem gerenciada.
     Além disso, o suporte é excepcional e sempre disposto a ajudar.`,
    'Acompanhe seus resultados com facilidade.',
    'Cadastre o seu RH e tenha acesso exclusivo a uma gama de ferramentas.',
    'Sua jornada para um novo emprego começa aqui!'
  ];
  activeIndex = signal(0);

  private intervalId: any;
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });
  constructor() {
    this.startCarousel();
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  onSubmit() {
    if (this.form.valid) {
      const { name, email, password, confirmPassword } = this.form.value;
      if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
      }

      console.log('Registro enviado:', { name, email, password });
    }
  }

  private startCarousel() {
    this.intervalId = setInterval(() => {
      this.activeIndex.update(index => (index + 1) % this.messages.length);
    }, 4000);
  }

}
