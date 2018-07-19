import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})

@Injectable()
export class HomeComponent implements OnInit {

  projects$: Object;
  private xd: any = "xd"

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        this.projects$ = data;
        console.log(this.projects$)
    });
  }

  ngOnInit() {

  }

  public getJSON(): Observable<any> {
    return this.http.get("../assets/json/projects.json")
  }
}
