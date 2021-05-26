import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  disciplinas: string[] = ["Cálculo", "Algebra Linear", "Química"];
  msg: string = '';

  getMsg(i: number): void {
    this.msg = `Clicou em ${this.disciplinas[i]}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
