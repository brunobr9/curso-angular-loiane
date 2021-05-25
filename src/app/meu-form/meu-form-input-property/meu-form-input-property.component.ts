import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form-input-property',
  templateUrl: './meu-form-input-property.component.html',
  styleUrls: ['./meu-form-input-property.component.css'],
})
export class MeuFormInputPropertyComponent implements OnInit {
  @Input() pessoa: any;

  showPessoa: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  enviar() {
    this.showPessoa = true;
  }

  limpar() {
    this.pessoa.nome = '';
    this.pessoa.idade = null;
    this.pessoa.endereco.cidade = '';

    this.showPessoa = false;
  }

}
