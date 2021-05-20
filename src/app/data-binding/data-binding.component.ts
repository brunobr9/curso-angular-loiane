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

  constructor() {}

  ngOnInit(): void {}
}
