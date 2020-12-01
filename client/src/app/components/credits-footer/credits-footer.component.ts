import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-credits-footer',
  templateUrl: './credits-footer.component.html',
  styleUrls: ['./credits-footer.component.styl']
})
export class FooterComponent implements OnInit {

  public currentYear: number = new Date().getFullYear();
  public currentCategory: string;

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.uiService.category.subscribe(cat => this.currentCategory = cat)
  }
  
}
