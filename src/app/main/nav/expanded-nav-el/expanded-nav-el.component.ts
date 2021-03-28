import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-expanded-nav-el',
  templateUrl: './expanded-nav-el.component.html',
  styleUrls: ['./expanded-nav-el.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpandedNavElComponent {
  public readonly expanded = new BehaviorSubject(false);

  public toggle(): void {
    this.expanded.next(!this.expanded.value);
  }
}
