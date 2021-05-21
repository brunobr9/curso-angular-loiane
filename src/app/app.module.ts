import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { MeuFormModule } from './meu-form/meu-form.module';


@NgModule({
  declarations: [ /*  listar componentes, diretivaas e pipes*/
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    DataBindingComponent
  ],
  imports: [ /* outros modulos */
    FormsModule,
    BrowserModule,
    CursosModule,
    MeuFormModule
  ],
  providers: [], /* serviços disponíveis (auth, login etc) */
  bootstrap: [AppComponent] /* apenas no módulo raiz, indica o componente a ser instanciado */
})
export class AppModule { }
