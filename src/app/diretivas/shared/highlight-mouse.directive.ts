import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseOut() {
    // this._render.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'blue';

  //caso seja necessário um processamento na varivavel:
  // private backgroundColor: string = '';
  // @HostBinding('style.backgroundColor') get setColor() {
  //   return this.backgroundColor;
  // }

  constructor(private _elementRef: ElementRef, private _render: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
