import { RoomsComponent } from './rooms/rooms.component';
import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef, Optional, Inject } from '@angular/core';
import { LoggerService } from './logger.service';
import { localstorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit ,OnInit{


  title = 'hotelinventoryapp';
  loginType = 'admin';
  @ViewChild('user', { read: ViewContainerRef }) vcrl!: ViewContainerRef;
  @ViewChild('name', { static:true }) name!: ElementRef;

  constructor(@Optional() private logger:LoggerService,@Inject(localstorageToken)private localstorage:Storage,private initservice:InitService,private router:Router) {
   console.log(initservice.config)
  }
  ngAfterViewInit(): void {
    const componentref = this.vcrl.createComponent(RoomsComponent)
    componentref.instance.numberofRooms = 50;

  }
  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log(event)
    // })
    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((event) => {
      console.log("Navigation started")
    })
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      console.log("Navigation completed")
    })
    this.logger?.log("appcomponents log")
    this.name.nativeElement.innerText = "HiltonHotels";
    this.localstorage.setItem('name', 'Hilton Hotel');

  }
}
