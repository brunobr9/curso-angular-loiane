import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'], //,
  //inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {
  @Input('nome') nomeCurso: string = '';
  @Output() mudouCurso = new EventEmitter();

  cursos: string[] = [];

  mudar(nomeCurso: string) {
    this.nomeCurso = nomeCurso;
    this.mudouCurso.emit({ msg: `Nome do curso foi alterado para ${nomeCurso} com sucesso.`, showMsg: true });

    console.log(nomeCurso)
  }

  add(nomeCurso: string) {
    if (nomeCurso == '') {
      this.mudouCurso.emit({ msg: "Nome não pdoe ser nulo.", error: true, showMsg: false });
      return;
    }
    this.cursos.push(nomeCurso);
    this.mudouCurso.emit({ msg: `Curso ${nomeCurso} adicionado com sucesso.`, error: false, showMsg: true });
    this.nomeCurso = ''
  }

  sort() {
    if (this.cursos.length == 0) {
      this.mudouCurso.emit({ msg: "Lista vazia!", error: true });
    } else {
      this.mudouCurso.emit({ msg: `Cursos ordenados com sucesso.`, error: false, showMsg: true });
      this.cursos.sort();
    }
  }

  limpar() {
    if (this.cursos.length == 0) {
      this.mudouCurso.emit({ msg: "Lista já está vazia!", error: true });
      return;
    }
    this.mudouCurso.emit({ msg: `Lista de cursos reiniciada com sucesso.`, error: false, showMsg: true });
    this.cursos = [];
  }

  constructor() { }

  ngOnInit(): void { }
}
