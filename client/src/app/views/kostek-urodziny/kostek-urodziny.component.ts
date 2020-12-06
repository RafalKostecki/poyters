import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { IProductInfoData } from '../../interfaces/productInfoData.interface';


@Component({
  selector: 'app-kostek-urodziny',
  templateUrl: './kostek-urodziny.component.html',
  styleUrls: ['./kostek-urodziny.component.styl']
})
export class KostekUrodzinyComponent implements OnInit {
  constructor(private data: UiService) { }

  private categoryName: string = 'Kostek \"Urodziny\"';

  public intro = {
    name: 'Kostek \"Urodziny\"',
    type: 'rpg game',
    desc: 'We have the birthday and BUM! The huge cristal, a weird rooms, hemoglobine and Przemek! I don`t know how but Kostek`s party has become some kind of apogee! Possible it`s caused by the cheap wine or very strong tea. Nevermind. You have to find your collegues. Don`t worry, always correct and nice smelling Narrator will help ya.',
    iconPath: './app/assets/media/kosBirthday.png'
  }

  public info: IProductInfoData[] = [
    {
      title: 'Type',
      content: 'RPG game'
    },
    {
      title: 'Languages',
      content: 'PL'
    },
    {
      title: 'Single-player',
      content: 'Yes'
    },
    {
      title: 'Online Co-op',
      content: 'No'
    },
    {
      title: 'Controller support',
      content: 'No'
    },
    {
      title: 'Released',
      content: '01.07.2015'
    },
    {
      title: 'Last update',
      content: '12.09.2015'
    },
  ]

  ngOnInit() {
    this.data.changeCategory(this.categoryName)
  }

}
