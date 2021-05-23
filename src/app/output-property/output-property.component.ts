import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

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

  constructor() {}

  ngOnInit(): void {}
}
