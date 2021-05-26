import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {
  abaAtiva: string = "ngif";
  cursos: string[] = ["Java, C++"];
  response: string = '';

  onResponse(event: any): void {
    this.response = event;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
