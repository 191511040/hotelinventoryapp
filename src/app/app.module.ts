import { InitService } from './init.service';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './Appconfig/appconfig.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RequestInterceptor } from './request.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Globalhandler } from './services/errorhandler';
//import { RoomsModule } from './rooms.module';
function initfactory(initservice: InitService) {
  return ()=> initservice.init()
}
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
  ],
  imports: [
    BrowserModule,
    //RoomsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatSnackBarModule

  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue:APP_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initfactory,
      deps: [InitService],
      multi:true
    },
    {
      provide: ErrorHandler,
      useClass:Globalhandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
