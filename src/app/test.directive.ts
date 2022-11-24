import { Directive,ElementRef,HostListener   } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('gray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  constructor(private el: ElementRef) {
   }

}
