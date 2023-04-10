import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailabilityRoutingModule } from './availability-routing.module';
import { ByHotelModule } from './pages/by-hotel/by-hotel.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ByHotelModule, AvailabilityRoutingModule],
})
export class AvailabilityModule {}
