import { Injectable } from '@angular/core';
import { ProjectsApiService } from '../projects-api.service';
import { Observable } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { ProjectInterface } from '../project.interface';
import { UserProjectsQuery } from './user-projects.query';
import { UserProjectsStore } from './user-projects.store';

@Injectable({
  providedIn: 'root',
})
export class UserProjectsFacadeService {
  constructor(
    private readonly api: ProjectsApiService,
    private readonly query: UserProjectsQuery,
    private readonly state: UserProjectsStore,
  ) {}

  public isLoading(): Observable<boolean> {
    return this.query.selectLoading();
  }

  public getProjects(userId: string): Observable<ProjectInterface[]> {
    const request = this.api.getProjectsByUserId(userId).pipe(
      tap(() => this.state.setLoading(true)),
      tap((projects) => this.state.set(projects)),
      finalize(() => this.state.setLoading(false)),
    );

    return this.query
      .selectHasCache()
      .pipe(switchMap((hasCache) => (hasCache ? this.query.selectAll() : request)));
  }
}
