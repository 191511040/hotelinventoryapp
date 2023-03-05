import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {
    path: "",
    component: RoomsComponent,
    // canActivate: [LoginGuard],
    // canLoad:[LoginGuard],
    children: [
      {
        path: "rooms/add",
        component:RoomsAddComponent
      },
      {
      path: ":id",
      component:RoomsBookingComponent
    },]
  }
  // {
  //   path: "",
  //   redirectTo: "/rooms",

  //   pathMatch:'full'
  // },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
