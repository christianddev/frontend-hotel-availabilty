import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { SelectModule } from './components/select/select.module';
import { ButtonSubmitModule } from './components/button-submit/button-submit.module';
import { HeaderModule } from './components/header/header.module';
import { InputDateModule } from './components/input-date/input-date.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonSubmitModule,
    HeaderModule,
    InputDateModule,
    SelectModule,
  ],
  exports: [ButtonSubmitModule, HeaderModule, InputDateModule, SelectModule],
})
export class SharedModule {}
