import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { TuiLinkModule } from '@taiga-ui/core';



@NgModule({
  declarations: [NavComponent],
  exports: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    TuiLinkModule,
  ],
})
export class NavModule { }
