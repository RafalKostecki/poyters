import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.styl']
})

@Injectable()
export class PortfolioComponent implements OnInit {

  public portfolioProjects: Object;
  private categoryName: string = "Portfolio";

  constructor(private http: HttpClient, private data: DataService) {
    this.getJSON().subscribe(data => {
        this.portfolioProjects = data;
        console.log(this.portfolioProjects[0].technology)
    });
  }

  ngOnInit() {
    this.data.changeCategory(this.categoryName)
  }

  public getJSON(): Observable<any> {
    return this.http.get("../assets/json/portfolio.json")
  }
}
