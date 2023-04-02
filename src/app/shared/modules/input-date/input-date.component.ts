import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-shared-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.less'],
})
export class InputDateComponent {
  @Input()
  label: string = 'Date';

  @Input()
  control!: AbstractControl;

  constructor() {}

  get formControl(): FormControl {
    return this.control as FormControl;
  }
}
