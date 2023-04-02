import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TabMenuModule } from 'primeng/tabmenu';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, TabMenuModule],

  exports: [HeaderComponent],
})
export class HeaderModule {}
