import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAzul]',
})

export class FundoAzulDirective {

  constructor(private _elementRef: ElementRef, private _render: Renderer2) {
    this._render.setStyle(
      _elementRef.nativeElement,
      'background-color',
      'blue'
    );
    // this._render.nativeElement.style.backgroundColor = 'blue'; -> deixa código vuneravel a atques XXS
  }
}
