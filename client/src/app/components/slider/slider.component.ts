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
      mediaPath: 'https://www.wykop.pl/cdn/c3201142/comment_1608277727me3r599LODkzUdghahpkay,w400.jpg', 
      type: 'IMAGE', // IMAGE | VIDEO
      alt: "Alternative text 1"
    },
    {
      mediaPath: 'https://www.wykop.pl/cdn/c3201142/comment_1608286999Y8l0G6G4yRYg2rIU98a4qb,w400.jpg', 
      type: 'IMAGE', // IMAGE | VIDEO
      alt: "Alternative text 2"
    },
    {
      mediaPath: 'https://www.wykop.pl/cdn/c3201142/comment_1608282503PTngFbLYS46Hqh0tdLF0FY,w400.jpg', 
      type: 'IMAGE', // IMAGE | VIDEO
      alt: "Alternative text 3"
    },
    {
      mediaPath: 'https://www.wykop.pl/cdn/c3201142/comment_1608253076fn5oeC2MCd9yOAZmjljgp7,w400.jpg', 
      type: 'IMAGE', // IMAGE | VIDEO
      alt: "Alternative text 4"
    }
  ]

  public currentSlide = 0;

  ngOnInit(): void {
  }

  prev() {
    if (this.currentSlide === 0) return;

    this.currentSlide -= 1;

    console.log('prev', this.currentSlide)
  }

  next() {
    if (this.currentSlide === this.slides.length - 1) return;

    this.currentSlide += 1;

    console.log('next', this.currentSlide)
  }

  get tapeStyles () {
    const tapeElement: any = document.getElementById('sliderTape');

    const tapeWidth = parseInt(getComputedStyle(tapeElement).width);

    console.log(tapeWidth)
    return {
      left: `${(this.currentSlide * tapeWidth) * (-1)}px`
    }
  }

}
