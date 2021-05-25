import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  cursos: string[] = ["Java, C++"];
  response: string = '';

  onResponse(event: any): void {
    this.response = event;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
