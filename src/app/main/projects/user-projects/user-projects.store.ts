import { Injectable } from '@angular/core';
import { ProjectInterface } from '../project.interface';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface State extends EntityState<ProjectInterface, string> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'user-projects',
  cache: {
    ttl: 30000,
  },
})
export class UserProjectsStore extends EntityStore<State> {
  constructor() {
    super({});
  }
}
