import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})

@Injectable()
export class HomeComponent implements OnInit {

  public projects: Object;
  private categoryName: string = "Home";

  constructor(private http: HttpClient, private data: DataService) {
    this.getJSON().subscribe(
      data => this.projects = data
    );
  }

  ngOnInit() {
    this.data.changeCategory(this.categoryName)
  }

  public getJSON(): Observable<any> {
    return this.http.get("../assets/json/projects.json")
  }
}
