import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDateComponent } from './input-date.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [InputDateComponent],
  imports: [CommonModule, ReactiveFormsModule, CalendarModule],
  exports: [InputDateComponent],
})
export class InputDateModule {}
