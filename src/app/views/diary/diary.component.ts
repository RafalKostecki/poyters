import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.styl']
})
export class DiaryComponent implements OnInit {

  private categoryName: string = "Diary";

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.changeCategory(this.categoryName)
  }

}
