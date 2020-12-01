import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.styl']
})
export class UserProfileComponent implements OnInit {
  constructor() { }

  @Input() username: string;
  @Input() mail: string;
  @Input() created: number;

  public createdDate;

  ngOnInit(): void {
    this.createdDate = new Date(this.created).toUTCString();
  }

}
