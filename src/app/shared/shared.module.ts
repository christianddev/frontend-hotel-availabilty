import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ButtonSubmitModule,
  HeaderModule,
  InputDateModule,
  SelectModule,
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
  exports: [ButtonSubmitModule, HeaderModule, InputDateModule, SelectModule],
})
export class SharedModule {}
