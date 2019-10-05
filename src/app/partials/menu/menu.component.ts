import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {

  private menu: any = document.querySelector('.menu')
  private menuNav: any = document.querySelector('#menuNav')
  constructor() { }

  ngOnInit() {
    this.menuNav = document.querySelector('#menuNav')
    this.menuNav.addEventListener('click', () => this.clicked())
  }

  clicked(){
    this.menu = document.querySelector('.menu')
    this.menu.classList.toggle('menu--visible');
  }

}
