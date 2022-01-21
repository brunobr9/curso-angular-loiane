import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivasComponent } from './diretivas.component';
import { FormsModule } from '@angular/forms';
import { DiretivaNgContentComponent } from './diretiva-ng-content/diretiva-ng-content.component';
@NgModule({
  declarations: [
    DiretivasComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgstyleComponent,
    DiretivaNgclassComponent,
    DiretivaNgContentComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [DiretivasComponent],
})
export class DiretivasModule {}
