import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TaskType } from './task-type';

export interface State extends EntityState<TaskType, number> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'task-types',
  cache: {
    ttl: 30000,
  },
})
export class TaskTypeStore extends EntityStore<State> {
  constructor() {
    super();
  }
}
