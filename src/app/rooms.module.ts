import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FilterPipe } from './rooms/filter.pipe';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoomsModule { }
