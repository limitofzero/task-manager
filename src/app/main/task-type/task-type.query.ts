import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { State, TaskTypeStore } from './task-type.store';

@Injectable({
  providedIn: 'root',
})
export class TaskTypeQuery extends QueryEntity<State> {
  constructor(protected readonly store: TaskTypeStore) {
    super(store);
  }
}
