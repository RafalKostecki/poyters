import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.styl']
})
export class ProfilPanelComponent implements OnInit {

  constructor() { }

  private profileListIsOpen: boolean = false;

  ngOnInit() {
  }

  toggleProfileList() {
    this.profileListIsOpen = !this.profileListIsOpen;
  }

}
