import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';



@Component({
  selector: 'app-kostek-urodziny',
  templateUrl: './kostek-urodziny.component.html',
  styleUrls: ['./kostek-urodziny.component.styl']
})
export class KostekUrodzinyComponent implements OnInit {
  constructor(private data: UiService) { }

  private categoryName: string = 'Kostek \"Urodziny\"';

  ngOnInit() {
    this.data.changeCategory(this.categoryName)
  }

}
