import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskBtnComponent } from './create-task-btn.component';
import {TuiButtonModule} from '@taiga-ui/core';



@NgModule({
  declarations: [CreateTaskBtnComponent],
  imports: [
    CommonModule,
    TuiButtonModule
  ],
  exports: [
    CreateTaskBtnComponent,
  ]
})
export class CreateTaskBtnModule { }
