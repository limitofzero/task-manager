import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';
import { Observable } from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import {User} from './user';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  constructor(protected store: SessionStore) {
    super(store);
  }

  public isLoaded(): Observable<boolean> {
    return this.select().pipe(
      map(data => !!data.token)
    );
  }

  public getUser(): Observable<User> {
    return this.select().pipe(
      map(state => state.token),
      map(token => token ? jwtDecode<User>(token) : null),
      shareReplay({
        refCount: true,
        bufferSize: 1
      }),
    );
  }
}
