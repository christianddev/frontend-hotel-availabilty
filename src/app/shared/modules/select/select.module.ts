import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
@NgModule({
  declarations: [SelectComponent],
  imports: [CommonModule, ReactiveFormsModule, AutoCompleteModule],
  exports: [SelectComponent],
})
export class SelectModule {}
