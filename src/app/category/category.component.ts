import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.styl']
})
export class CategoryComponent implements OnInit {

  public currentCategory: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.category.subscribe(cat => this.currentCategory = cat)
  }

}
