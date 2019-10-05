import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.styl']
})
export class SigninComponent implements OnInit {

  private categoryName: string = "Sign in";

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.changeCategory(this.categoryName)
  }
}
