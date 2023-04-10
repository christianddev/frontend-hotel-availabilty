import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less'],
})
export class PanelComponent {
  @Input()
  header: string = '';
  constructor() {}
}
