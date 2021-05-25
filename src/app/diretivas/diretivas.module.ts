import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivasComponent } from './diretivas.component';



@NgModule({
  declarations: [DiretivasComponent, DiretivaNgifComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DiretivasComponent
  ]
})
export class DiretivasModule { }
