import { ErrorHandler } from "@angular/core";

export class Globalhandler implements ErrorHandler{
 handleError(error: any): void {
   console.log(error)
  }
}
