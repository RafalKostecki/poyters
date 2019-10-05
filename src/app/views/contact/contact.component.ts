import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})
export class ContactComponent implements OnInit {

  private categoryName: string = "Contact";

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.changeCategory(this.categoryName)
  }

}
