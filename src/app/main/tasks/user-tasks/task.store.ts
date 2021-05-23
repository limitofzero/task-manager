import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Task } from '../task.interface';

export interface State extends EntityState<Task, number> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'tasks'
})
export class TaskStore extends EntityStore<State> {
  constructor() {
    super();
  }
}
