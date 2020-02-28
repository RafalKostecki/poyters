import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.styl']
})
export class ProfilPanelComponent {

  private profileListIsOpen = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  toggleProfileList() {
    this.profileListIsOpen = !this.profileListIsOpen;
  }

  logout() {
    console.log('here')
    fetch(`http://localhost:3000/auth/logout`,
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:4200",
          "Access-Control-Allow-Credentials": "true"
        },
        credentials: 'include'
      })
    .then(res => {
      if (res.status === 200) {
        this.userService.setUserId(null);
        this.router.navigate(['']);
      }
    })
    
  }

}
