import { FormControl } from '@angular/forms';
import { RoomsService } from './../services/rooms.service';
import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { catchError, map, Observable, of, retry, Subject, Subscription } from 'rxjs';
import { HttpEventType, HttpHeaderResponse } from '@angular/common/http';
import { ConfigService } from '../config.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {

  hotelName = "Hiltonhotels"
  numberofRooms = 10;
  hiderooms = true;
  selectedRooms!: RoomList;
  rooms: Room = {
    totalRooms: 15,
    availableRooms: 10,
    bookedRooms: 3

  }
  title = "Rooms";
  myObservable$!: Observable<any>;
  foods$!: Observable<any>;
  error$: Subject<string>=new Subject<string>();
  geterr$ = this.error$.asObservable()
  pricefilter=new FormControl(0)
  roomsList: RoomList[] = [];
  stream = new Observable(obsever => {
    obsever.next('user1');
    obsever.next('user1');
    obsever.next('user1');
    obsever.complete()
    obsever.error('error')
  })
  @ViewChild(HeaderComponent) headercomponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenconponent!: QueryList<HeaderComponent>
  totalbytes!: number;
  constructor(@SkipSelf() private roomsservice: RoomsService,private config:ConfigService) {

  }


  ngAfterViewInit(): void {
    this.stream.subscribe((data) => {
      console.log(data)
    })
    console.log(this.headercomponent)
    console.log(this.headerChildrenconponent)
    this.headercomponent.title = "This is rooms view"
    this.headerChildrenconponent.last.title = "last Title"
  }
  ngDoCheck(): void {
    console.log("onchanges is called")
  }
  ngOnInit(): void {
    //    this.roomsservice.getphotos().subscribe((event) => {
    //   switch (event.type) {
    //     case HttpEventType.Sent: {
    //       console.log('request has been sent')
    //       break;
    //     }
    //     case HttpEventType.ResponseHeader: {
    //       console.log('Request sucess')
    //       break;
    //     }
    //     case HttpEventType.DownloadProgress: {
    //       console.log(event.loaded)
    //       this.totalbytes = event.loaded
    //       break;
    //     }
    //     case HttpEventType.Response: {
    //       console.log(event.body)
    //       break
    //     }

    //     default:
    //       break;
    //   }
    // })
    this.roomsList = this.roomsservice.getRooms()
    this.myObservable$ = this.roomsservice.getfoods().pipe(
      retry(2),
      catchError((err) => {
        console.log(err.message)
        this.error$.next(err.message)
        return of([])
      })
    );

  }
  toggle() {
    this.hiderooms = !this.hiderooms;
    this.title = "Rooms"
  }
  selectRoom(room: RoomList) {
    this.selectedRooms = room
  }

  addRoom() {
    const room: RoomList = {
      roomnumber: 1,
      roomType: 'suite Room',
      amenities: 'AC,TV,Freewifi',
      price: 2000,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fhotel&psig=AOvVaw0tXdjIeFFpBjgKIFbXsh_e&ust=1676970519704000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDEspLgo_0CFQAAAAAdAAAAABAE',
      checkInTime: new Date('12 nov 2021'),
      checkOutTime: new Date('13 nov 2021'),
      rating: 3.565
    }
    //this.roomsList.push(room)
    this.roomsList = [...this.roomsList, room]


  }
  ngOnDestroy() {
    //   if (this.myObservable$) {
    //     this.myObservable$.unsubscribe()
    //   }

    // }
  }
}
