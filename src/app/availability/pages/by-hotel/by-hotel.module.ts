import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ByHotelPage } from './component/by-hotel.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ByHotelPage],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class ByHotelModule {}
