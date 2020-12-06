import { Component, OnInit, Input } from '@angular/core';
import { IProductInfoData } from '../../../interfaces/productInfoData.interface';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.styl']
})
export class ProductInfoComponent implements OnInit {

  constructor() { }

  @Input() info: IProductInfoData[];

  ngOnInit(): void {
  }

}
