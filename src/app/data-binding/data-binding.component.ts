import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  strMouse: string = 'Passe o mouse';
  url: string = 'http://google.com';
  urlImg: string = 'https://placekitten.com/150/150';
  valorAtual: any;
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  textoMouse: string = this.strMouse;
  nome: string = 'teste';

  nomeCurso: string = 'Angular';
  valor: number = 0;
  msg: string = '';
  showMsg: boolean = false;
  error: boolean = false;

  private resetTextMouse() {
    this.textoMouse = this.strMouse;
  }

  getValor() {
    return 10;
  }

  getTrue() {
    return true;
  }

  buttonClick() {
    alert('Teste');
  }

  // onKeyUp(event: any) {
  //   this.valorAtual = event.target.value;
  // }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  mouseOver() {
    this.isMouseOver = true;
  }

  mouseOut() {
    this.isMouseOver = false;
    // this.resetTextMouse();
  }

  mouseClick() {
    if (this.textoMouse == this.strMouse) {
      this.textoMouse = 'Click!';
    } else {
      this.resetTextMouse();
    }
  }

  onMudouValor(event: any) {
    console.log(event.timestamp);
  }

  mostarMensagem(event: any) {
    this.msg = event.msg;
    this.showMsg = event.showMsg;
    this.error = event.error;
  }

  constructor() { }

  ngOnInit(): void { }
}
