import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.styl']
})
export class SliderComponent implements OnInit {

  constructor() { }

  public slides = [
    {
      mediaPath: 'path to img', 
      type: 'IMAGE', // IMAGE | VIDEO
      alt: "Alternative text 1"
    },
    {
      mediaPath: 'path to img', 
      type: 'IMAGE', // IMAGE | VIDEO
      alt: "Alternative text 2"
    },
    {
      mediaPath: 'path to img', 
      type: 'IMAGE', // IMAGE | VIDEO
      alt: "Alternative text 3"
    },
    {
      mediaPath: 'path to img', 
      type: 'IMAGE', // IMAGE | VIDEO
      alt: "Alternative text 4"
    }
  ]

  ngOnInit(): void {
  }

}
