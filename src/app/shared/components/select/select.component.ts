import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-shared-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
})
export class SelectComponent {
  @Input()
  label: string = 'Select';

  @Input()
  selectionMessage: string = 'Select';

  @Input()
  suggestions: string[] = ['hotel-a', 'hotel-b', 'hotel-c'];

  @Input()
  control!: AbstractControl;

  constructor() {}

  get formControl(): FormControl {
    return this.control as FormControl;
  }

  search(event: string) {
    console.log('event', event);
  }
}
