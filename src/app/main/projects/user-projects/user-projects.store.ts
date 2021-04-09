import {Injectable} from '@angular/core';
import {Project} from '../project';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';

export interface State extends EntityState<Project, string> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'user-projects',
  cache: {
    ttl: 30000
  }
})
export class UserProjectsStore extends EntityStore<State> {
  constructor() {
    super({});
  }
}
