import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css'],
})
export class MeuFormComponent implements OnInit {
  nome: string = 'teste-meu-form';
  qtd: number = 0;

  pessoa: any = {
    nome: '',
    idade: null,
    endereco: {
      Uf: '',
      cidade: '',
    },
  };

  contar(event: KeyboardEvent) {
    this.qtd = (<HTMLInputElement>event.target).value.length;
  }

  total() {
    alert(`Digitou ${this.qtd} caracteres`);
  }

  constructor() { }

  ngOnInit(): void { }
}
