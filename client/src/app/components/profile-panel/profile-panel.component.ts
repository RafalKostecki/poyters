import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { corsHeaders } from '../../scripts/auth/connectOptions';
import apiConfig from '../../assets/configs/apiConfig.json';


@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.styl']
})
export class ProfilPanelComponent {

  public profileListIsOpen = false;
  public avatarAltText: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.userData.subscribe(data => {
      if (!data?.avatar) {
        this.avatarAltText = data?.username[0].toUpperCase();
      }
    })
  }

  toggleProfileList() {
    this.profileListIsOpen = !this.profileListIsOpen;
  }

  logout() {
    fetch(`${apiConfig.poytersApiUrl}/auth/logout`,
      {
        method: 'GET',
        headers: corsHeaders,
        credentials: 'include'
      })
    .then(res => {
      if (res.status === 200) {
        this.userService.setUserData(null);
        this.router.navigate(['']);
      }
    })
    
  }

}
