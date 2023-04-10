import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [{ label: 'Availability', icon: 'pi pi-fw pi-calendar' }];
  }
}
