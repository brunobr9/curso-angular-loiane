import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  @Input() contador: number = 0;
  @Input() cursos: string[] = [];
  @Output() response: any = new EventEmitter();

  mostrarCursos: boolean = false;
  max: number = 5;

  private emit() {
    if (this.contador == this.max) {
      this.response.emit("ngIF Test");
    }
  }

  add() {
    this.contador++;
    this.emit();
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
