import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {HeaderModule} from '../ui/header/header.module';
import {TuiButtonModule} from '@taiga-ui/core';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HeaderModule,
    TuiButtonModule,
  ],
  exports: [MainComponent]
})
export class MainModule {
}
