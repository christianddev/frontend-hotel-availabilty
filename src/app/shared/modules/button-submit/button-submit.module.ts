import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSubmitComponent } from './button-submit.component';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [ButtonSubmitComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ButtonSubmitComponent],
})
export class ButtonSubmitModule {}
