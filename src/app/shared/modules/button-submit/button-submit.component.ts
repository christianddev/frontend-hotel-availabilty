import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.less'],
})
export class ButtonSubmitComponent {
  @Input()
  text: string = 'Search';

  @Input()
  disabled: boolean = true;

  @Input()
  loading: boolean = true;

  constructor() {}
}
