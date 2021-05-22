import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuFormComponent } from './meu-form.component';
import { FormsModule } from '@angular/forms';
import { MeuFormInputPropertyComponent } from './meu-form-input-property/meu-form-input-property.component';

@NgModule({
  declarations: [MeuFormComponent, MeuFormInputPropertyComponent],
  imports: [CommonModule, FormsModule],
  exports: [MeuFormComponent],
})
export class MeuFormModule {}
