import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-projeto';
  msg: string = '';
  destruir: boolean = false;
  valor: number = 100;


  mudarValor(): void {
    this.valor++;
    this.destruir = false;
    console.log(this.msg);
  }

  destruirCiclo(): void {
    this.destruir = true;
  }

  mudou(event: any): void {
    this.msg = event.msg;
  }

}
