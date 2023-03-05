import { CustomvalidatorDirective } from './validators/customvalidator.directive';
import { BookingService } from './booking.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { mergeMap, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingform!: FormGroup;
  get guests() {
    return this.bookingform.get('guests') as FormArray;
  }
  constructor(private fb: FormBuilder, private bookingservice: BookingService,private route:ActivatedRoute) { }
  picker2:any
  ngOnInit(): void {
    const roomId=this.route.snapshot.paramMap.get('roomid');
    this.bookingform = this.fb.group({
      roomId: new FormControl({ value: roomId, disabled: true }, {validators: [Validators.required]}),
      guestEmail: ['test@gmail.com',{validators:[Validators.required,Validators.email]},],
      checkinDate:[''] ,
      checkoutDate: [''],
      bookingstatus: [''],
      bookingAmount: [''],
      mobilenumber: [''],
      guestname: [''],
      tnc:new FormControl(false,{validators:[Validators.required]}),
      address: this.fb.group({
        guestAddress: [''],
        guestcity: [''],
        guestState: [''],
        guestCountry: [''],
        guestzipcode: [''],

      }),
      guests: this.fb.array([
        this.fb.group({
          guestname: [''],
          age: new FormControl(''),}),]),

    } );



    this.bookingform.valueChanges.pipe(
      mergeMap((data)=>this.bookingservice.bookroom(data))
    ).subscribe((data)=>console.log(data))

    // this.bookingform.valueChanges.pipe(
    //   switchMap((data)=>this.bookingservice.bookroom(data))
    // ).subscribe((data)=>console.log(data))

  }

  addbooking() {
    console.log(this.bookingform.value);
    this.bookingservice.bookroom(this.bookingform.getRawValue()).subscribe((data) => {
     console.log(data)
    })
    //this.bookingform.reset()// this is used to get the values which are in disabled state
    console.log(this.bookingform.getRawValue());
  }
//   getbooking() {
//     this.guests.setValue({

// })
  // }
  addguest() {
    this.guests.push(
     this.addguestcontrol()
    );

  }

  addguestcontrol() {
   return this.fb.group({
      guestname: ['',{validators: [Validators.required,CustomvalidatorDirective.validateName,CustomvalidatorDirective.validatespecialCharcter('*')]}],
      age: new FormControl(''),
    })
  }
  addpassport() {
    this.bookingform.addControl('passport', new FormControl(''));
  }
  deletepassport() {
    if (this.bookingform.get('passport'))
      this.bookingform.removeControl('passport');
  }
  removeguest(i: number) {
    this.guests.removeAt(i);
  }
}

