import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 0;
  @Output() mudouValor = new EventEmitter();

  render: boolean = true;

  constructor() {
    this.log("constructor");
  }

  /* Indicado quando há mudanças no input property */
  ngOnChanges() {
    this.log("ngOnChanges");
    this.valorInicial = this.valorInicial * 100
    this.mudouValor.emit({ msg: `ngOnChanges: Mudou input property ${this.valorInicial}` });
  }

  // Component é inicializado
  ngOnInit(): void {
    this.log("ngOnInit");
  }

  // a cada ciclo de verificação de mudanças
  ngDoCheck(): void {
    this.log("ngDoCheck");
  }

  //depois de inserir conteúdo externo na view
  ngAfterContentInit(): void {
    this.log("ngAfterContentInit");
  }

  //a cada verificação de conteúdo inserido
  ngAfterContentChecked(): void {
    this.log("ngAfterContentChecked");
  }

  // a cada verifificação de conteúdo / conteúdo filho
  ngAfterViewChecked(): void {
    this.log("ngAfterViewChecked");
  }

  //antes da diretiva/componente ser destruído
  ngOnDestroy(): void {
    this.log("ngOnDestroy");
    this.mudouValor.emit({ msg: `ngOnDestroy` });
  }

  private log(hook: string) {
    console.log(hook);
  }

  // mudarValor() {
  //   this.render = true;
  //   this.valorInicial++;
  // }

  // destruirCiclo() {
  //   this.render = false;
  // }

}
