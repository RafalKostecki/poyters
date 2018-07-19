import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.styl']
})
export class PortfolioComponent implements OnInit {

  private categoryName: string = "Portfolio";

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.changeCategory(this.categoryName)
  }

}
