import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivasComponent } from './diretivas.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';



@NgModule({
  declarations: [DiretivasComponent, DiretivaNgifComponent, DiretivaNgswitchComponent, DiretivaNgforComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DiretivasComponent
  ]
})
export class DiretivasModule { }
