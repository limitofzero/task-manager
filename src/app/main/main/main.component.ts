import { Component } from '@angular/core';
import {SessionQuery} from '../../session/session.query';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public readonly userId: Observable<string>;

  constructor(
    private readonly session: SessionQuery,
  ) {
    this.userId = this.session.getUser().pipe(
      map(({ id }) => id),
    );
  }
}
