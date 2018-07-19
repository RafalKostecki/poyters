import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})

export class ProjectComponent implements OnInit {

  @Input() type: string;
  @Input() image: string;
  @Input() title: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
