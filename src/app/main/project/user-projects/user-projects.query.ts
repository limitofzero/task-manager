import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { State, UserProjectsStore } from './user-projects.store';

@Injectable({
  providedIn: 'root',
})
export class UserProjectsQuery extends QueryEntity<State> {
  constructor(protected readonly store: UserProjectsStore) {
    super(store);
  }
}
