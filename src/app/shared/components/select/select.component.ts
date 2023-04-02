import { Component, Input, OnInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { SelectItem } from './interfaces/select.interfaces';

@Component({
  selector: 'app-shared-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
})
export class SelectComponent implements OnInit {
  @Input()
  items!: SelectItem[];

  filteredItems: SelectItem[] = [];

  @Input()
  control!: AbstractControl;

  @Input()
  field: string = 'key';

  @Input()
  textLabel: string = 'select';

  constructor() {}

  ngOnInit() {
    this.control.setValue(this.items[0]);
  }

  get formControl(): FormControl {
    return this.control as FormControl;
  }

  search({ query }: { query: string }) {
    let filtered: SelectItem[] = [];

    for (let i = 0; i < this.items.length; i++) {
      let filteredItem: SelectItem = this.items[i];
      if (
        filteredItem[this.field]?.toLowerCase()?.indexOf(query.toLowerCase()) ==
        0
      ) {
        filtered.push(filteredItem);
      }
    }

    this.filteredItems = filtered;
  }
}
