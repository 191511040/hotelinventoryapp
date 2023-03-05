import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  color: string = 'red';
  constructor(private element: ElementRef) {
    console.log(this.element)
  }
  ngOnInit(): void {

  }

  @HostListener('mouseenter') OnMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.color;
}
}
