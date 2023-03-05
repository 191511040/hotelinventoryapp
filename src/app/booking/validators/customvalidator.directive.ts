import { Directive } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[hinvCustomvalidator]'
})
export class CustomvalidatorDirective {

  static validateName(control: AbstractControl) {
    const value = control.value as string;
    if (value.includes('test')) {
      return {
        invalidname:true
      }
    }
    return null
  }
  static validatespecialCharcter(char:string) {
    return (control: AbstractControl) => {
      const value = control.value as string;
      if(value.includes('*')) {
      return {
        invalidname: true
      }
    }

    return null
  }
  }
  static validatedate(control: FormGroup) {
    const checkIndate:any = new Date(control.get('checkinDate')?.value)
    const checkOutdate:any = new Date(control.get('checkoutDate')?.value)
    const diffTime =checkOutdate-checkIndate
    const diffdays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    console.log(diffdays)
    console.log(diffTime)
    if (diffdays <= 0) {
      control.get('checkoutDate')?.setErrors({
        invaliddate:true
      })


    }
    return null
  }
  constructor() { }

}
