import { Component } from '@angular/core';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = "Header";

  constructor(private roomsservice:RoomsService) {

  }
}
