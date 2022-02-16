import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  // DI
  constructor(private el:ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.border')
  borderStyle:string = "";

  @HostListener('mouseover')
  mouseOver(): void {
    const elem = this.el.nativeElement.querySelector(".image");
    this.renderer.setStyle(elem, 'display', 'block');
    this.borderStyle = '3px solid red';
  }


  @HostListener('mouseout')
  mouseOut(): void {
    const elem = this.el.nativeElement.querySelector(".image");
    this.renderer.setStyle(elem, 'display', 'none');
    this.borderStyle = 'none';
  }
}
