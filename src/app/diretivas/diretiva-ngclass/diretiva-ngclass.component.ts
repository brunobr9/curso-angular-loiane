import { Component, OnInit } from '@angular/core';
import { DiretivasService } from '../diretivas.service';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css'],
})
export class DiretivaNgclassComponent implements OnInit {
  favorito: boolean = false;
  jogos: any;

  constructor(private service: DiretivasService) {
    this.jogos = service.findAllJogos();
  }

  ngOnInit(): void {}

  addFavorito(jogo: any) {
    jogo.favorito = !jogo.favorito;
    if (!jogo.ativo) {
      jogo.favorito = false;
    }
  }

  ativarInativar(jogo: any) {
    jogo.ativo = !jogo.ativo;
    if (!jogo.ativo) {
      jogo.favorito = false;
    }
  }
}
