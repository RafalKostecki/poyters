import { Component, OnInit, Input } from '@angular/core';
import { IProductTagData } from '../../../interfaces/productTagData.interface';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.styl']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  @Input() info: IProductTagData[];

  ngOnInit(): void {
  }

}
