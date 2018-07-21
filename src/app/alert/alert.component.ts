import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.styl']
})
export class AlertComponent {

  @Input() message: string;

  constructor() { }

}
