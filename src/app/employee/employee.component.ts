import { RoomsService } from './../services/rooms.service';
import { Component, Self } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  title = "employee"

  // @self tells that this service should be available in this prticular component
  // @Self()
  constructor( private roomservice: RoomsService) {

  }
}
