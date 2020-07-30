import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})
export class ContactComponent implements OnInit {

  constructor(private data: UiService) { }

  ngOnInit() {
    this.data.changeCategory('Contact');
  }

}
