import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { TuiButtonModule, TuiExpandModule, TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';
import { ExpandedNavElComponent } from './expanded-nav-el/expanded-nav-el.component';

@NgModule({
  declarations: [NavComponent, ExpandedNavElComponent],
  exports: [NavComponent],
  imports: [CommonModule, TuiLinkModule, TuiExpandModule, TuiButtonModule, TuiSvgModule],
})
export class NavModule {}
