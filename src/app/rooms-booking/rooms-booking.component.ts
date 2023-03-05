import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {

  id: number = 0;
  id$!:Observable<Number>
  constructor(private router:ActivatedRoute) {

  }
  ngOnInit(): void {
    // this.id= this.router.snapshot.params['id']
  //   this.router.params.subscribe((params) => {
  //     console.log(params)
  //     this.id = params['id']
  //  })
    this.id$=this.router.params.pipe(map(params=>params['id']))
  }

}
