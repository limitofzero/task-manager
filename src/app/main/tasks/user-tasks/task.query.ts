import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {State, TaskStore} from './task.store';

@Injectable({
  providedIn: 'root'
})
export class TaskQuery extends QueryEntity<State> {
  constructor(protected store: TaskStore) {
    super(store);
  }
}
