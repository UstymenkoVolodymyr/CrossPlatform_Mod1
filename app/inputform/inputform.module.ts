import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { InputformComponent } from './inputform.component';
@NgModule({
  declarations: [InputformComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [InputformComponent]
})
export class InputformModule {}
