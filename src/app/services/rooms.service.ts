import { APP_SERVICE_CONFIG, APP_CONFIG } from './../Appconfig/appconfig.service';
import { RoomList } from './../rooms/rooms';
import { Inject, Injectable } from '@angular/core';
import { Appconfig } from '../Appconfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {


  getRooms$ = this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(
    shareReplay(1)
  )
  roomsList: RoomList[] = [

    {
      roomnumber: 1,
      roomType: 'Deluxe',
      amenities: 'AC,TV,Freewifi',
      price: 1000,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fhotel&psig=AOvVaw0tXdjIeFFpBjgKIFbXsh_e&ust=1676970519704000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDEspLgo_0CFQAAAAAdAAAAABAE',
      checkInTime: new Date('11 nov 2021'),
      checkOutTime: new Date('12 nov 2021'),
      rating: 4.345
    },
    {
      roomnumber: 2,
      roomType: 'suite Room',
      amenities: 'AC,TV,Freewifi',
      price: 2000,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fhotel&psig=AOvVaw0tXdjIeFFpBjgKIFbXsh_e&ust=1676970519704000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDEspLgo_0CFQAAAAAdAAAAABAE',
      checkInTime: new Date('12 nov 2021'),
      checkOutTime: new Date('13 nov 2021'),
      rating: 3.565
    },


  ]
  constructor(@Inject(APP_SERVICE_CONFIG) private config: Appconfig, private http: HttpClient) {
    //console.log(this.config.apiEndpoint)
    console.log("service intiliazed")
  }

  getRooms() {

    return this.roomsList;

  }

  getphotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', { reportProgress: true })
    return this.http.request(request)
  }
  getfoods() {
    const Headers = new HttpHeaders({
      'token':'123@45trgvtg'
    })
    return this.http.get('http://localhost:5000/api/foods', {
      headers:Headers
    })
  }
}
