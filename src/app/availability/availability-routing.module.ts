import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByHotelPage } from './pages/by-hotel/component/by-hotel.page';

const routes: Routes = [
  { path: 'by-hotel', component: ByHotelPage },
  {
    path: '**',
    redirectTo: 'by-hotel',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailabilityRoutingModule {}
