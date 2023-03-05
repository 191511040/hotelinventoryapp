import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [



  {
    path: 'rooms',
    loadChildren: ()=>import('./rooms.module').then(m=>m.RoomsModule)
  },
  { path: 'booking/:roomid', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  {
    path: "",
    component:LoginComponent
  },



  { path: 'comments', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  {
    path: "**",
    component:NotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
