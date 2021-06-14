import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutProjectComponent } from './about-project.component';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiHostedDropdownModule,
  TuiSvgModule,
} from '@taiga-ui/core';

@NgModule({
  declarations: [AboutProjectComponent],
  exports: [AboutProjectComponent],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiSvgModule,
  ],
})
export class AboutProjectDropdownModule {}
