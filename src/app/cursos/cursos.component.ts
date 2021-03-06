import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  //injeção de dependencias via construtor
  constructor(private cursoService: CursosService) {
    this.nomePortal = 'http://google.com';
    this.cursos = cursoService.getCursos();
  }

  ngOnInit(): void {
  }

}
