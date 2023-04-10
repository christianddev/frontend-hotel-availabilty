import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ButtonSubmitModule,
  HeaderModule,
  InputDateModule,
  SelectModule,
  PanelModule,
} from './modules';

@NgModule({
  declarations: [],
  imports: [
    ButtonSubmitModule,
    CommonModule,
    HeaderModule,
    InputDateModule,
    ReactiveFormsModule,
    SelectModule,
  ],
  exports: [
    ButtonSubmitModule,
    HeaderModule,
    InputDateModule,
    SelectModule,
    PanelModule,
  ],
})
export class SharedModule {}
