import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.styl']
})

export class PortfolioProjectComponent {

  @Input() type: string;
  @Input() image: string;
  @Input() link: string;
  @Input() title: string;
  @Input() content: string;
  @Input() technologies: Array<string>;
  @Input() date: string;
  @Input() githubLink: string;

  constructor() { }

}
