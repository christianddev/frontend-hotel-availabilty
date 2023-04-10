import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'availability',
    loadChildren: () =>
      import('./availability/availability.module').then(
        m => m.AvailabilityModule
      ),
  },
  {
    path: '**',
    redirectTo: 'availability',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
