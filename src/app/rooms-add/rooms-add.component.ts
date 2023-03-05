import { RoomList } from './../rooms/rooms';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent {

  rooms: RoomList = {

    roomnumber:0,
    roomType: '',
    amenities:'',
    price:0,
    photos: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
    rating:0
  }
  NewRooms:RoomList[]=[]
  constructor() {

  }

  Addroom(roomsform:NgForm) {
    this.NewRooms.push(this.rooms);
    roomsform.reset( )
  }
}
