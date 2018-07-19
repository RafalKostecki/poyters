import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl']
})
export class FooterComponent implements OnInit {

  private currentYear: number = new Date().getFullYear()

  constructor() { }

  ngOnInit() {

  }

}
