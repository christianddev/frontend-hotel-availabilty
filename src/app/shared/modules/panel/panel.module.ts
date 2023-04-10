import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule as PanelModuleNG } from 'primeng/panel';

import { PanelComponent } from './panel.component';

@NgModule({
  declarations: [PanelComponent],
  imports: [CommonModule, PanelModuleNG],
  exports: [PanelComponent],
})
export class PanelModule {}
