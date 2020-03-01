import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent {

  private menu: any = document.querySelector('.menu')

  toggleMenu(){
    this.menu = document.querySelector('.menu')
    this.menu.classList.toggle('menu--visible');
  }

}
