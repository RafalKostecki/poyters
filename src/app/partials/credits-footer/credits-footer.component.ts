import { Component } from '@angular/core';

@Component({
  selector: 'app-credits-footer',
  templateUrl: './credits-footer.component.html',
  styleUrls: ['./credits-footer.component.styl']
})
export class FooterComponent {

  public currentYear: number = new Date().getFullYear()
  
}
