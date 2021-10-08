import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiretivasService {
  constructor() {}

  addJogo(nome: string) {
    var jogo: any = {
      nome: '',
      favorito: false,
      ativo: true,
    };

    jogo.nome = nome;

    return jogo;
  }

  findAllJogos() {
    return [
      this.addJogo('Battlefield 1'),
      this.addJogo('The Witcher 3'),
      this.addJogo('Forza Horizon 4'),
    ];
  }
}
