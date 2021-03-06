import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivasModule } from './diretivas/diretivas.module';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
@NgModule({
  declarations: [ /*  listar componentes, diretivaas e pipes*/
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    OperadorElvisComponent,
  ],
  imports: [ /* outros modulos */
    FormsModule,
    BrowserModule,
    CursosModule,
    MeuFormModule,
    DiretivasModule
  ],
  providers: [], /* serviços disponíveis (auth, login etc) */
  bootstrap: [AppComponent] /* apenas no módulo raiz, indica o componente a ser instanciado */
})
export class AppModule { }
