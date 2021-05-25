import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  /**
   * Se {static: false} sua "query" ficara disponível ao passar por ngAfterViewInit,
   * ou seja, após os componentes da View serem inicializadas,  
   * enquanto {static: true}, ao passar por ngOnInit,
   * ou seja, após o construtor e junto com os Inputs Properties.
   */
  @ViewChild('campoInput', { static: false }) campoValorInput!: ElementRef; // Usar HTMLElement para verficiar o tipo certo no console

  incrementar() {
    this.valor++;
    this.mudouValor.emit({
      novoValor: this.valor,
      timestamp: Date.now(),
    });
  }
  decrementar() {
    this.valor--;
    this.mudouValor.emit({
      novoValor: this.valor,
      timestamp: Date.now(),
    });
  }

  incrementarDOM() {
    this.campoValorInput.nativeElement.value++;
    if (this.campoValorInput.nativeElement.value >= 0) {
      this.campoValorInput.nativeElement.style = 'color: ';
    }
    this.mudouValor.emit({
      timestamp: Date.now(),
    });
  }
  decrementarDOM() {
    this.campoValorInput.nativeElement.value--;
    if (this.campoValorInput.nativeElement.value < 0) {
      this.campoValorInput.nativeElement.style = 'color: red; font-weight: bold; width: 182px';
    }
    this.mudouValor.emit({
      timestamp: Date.now(),
    });
  }


  constructor() { }

  ngOnInit(): void { }
}
