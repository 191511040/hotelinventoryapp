import { RoomsService } from './../services/rooms.service';
import { AfterContentInit, Component, ContentChild, Host, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  //providers:[RoomsService]
})
export class ContainerComponent implements AfterContentInit {
  constructor( @Host() private roomsservice:RoomsService) {

  }
  @ContentChild(EmployeeComponent) employee!:EmployeeComponent
  ngAfterContentInit(): void {
    console.log(this.employee)
    this.employee.title="Ram"
  }

}
