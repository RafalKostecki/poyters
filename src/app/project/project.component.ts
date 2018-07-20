import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})

export class ProjectComponent {

  @Input() type: string;
  @Input() image: string;
  @Input() link: string;
  @Input() title: string;
  @Input() content: string;

  constructor() { }

}
