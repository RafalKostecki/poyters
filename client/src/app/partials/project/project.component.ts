import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl'],
  animations: [
    trigger('fadeIn', [

      state('visible', style({
        opacity: '1',
      })),

      transition('hidden => visible', animate('3500ms'))
    ])
  ]
})

export class ProjectComponent implements OnInit {

  @Input() type: string;
  @Input() image: string;
  @Input() link: string;
  @Input() title: string;
  @Input() content: string;

  public state: string = 'hidden';

  constructor() { }

  ngOnInit() {
    this.state = 'visible';
  }

}
