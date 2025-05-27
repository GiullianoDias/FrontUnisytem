import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
@Input() label!: string;
@Input() type: string = 'text';
@Input() control: FormControl = new FormControl();
@Input() placeholder: string = '';
}
