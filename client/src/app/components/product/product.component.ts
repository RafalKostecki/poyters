import { Component, OnInit } from '@angular/core';
import productData from '../../assets/data/products/kostekUrodziny.json';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.styl']
})
export class ProductComponent implements OnInit {

  constructor() { }

  public product = productData;

  ngOnInit(): void {
  }

}
