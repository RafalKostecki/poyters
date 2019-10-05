import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.styl']
})
export class SignupComponent implements OnInit {

  private categoryName: string = "Sign up";

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.changeCategory(this.categoryName)
  }

}
