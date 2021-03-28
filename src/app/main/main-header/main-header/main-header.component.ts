import { Component, OnInit } from '@angular/core';
import {ProjectsApiService} from '../../projects/projects-api.service';
import {UserProjectsQuery} from '../../projects/user-projects.query';
import {UserProjectsStore} from '../../projects/user-projects.store';
import {Observable} from 'rxjs';
import {Project} from '../../projects/project';
import {SessionQuery} from '../../../session/session.query';
import {map, switchMap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {FormControl} from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  public projectControl = new FormControl('');
  public readonly projects: Observable<Project[]> = this.projectsQuery.selectAll();

  constructor(
    private readonly projectsApi: ProjectsApiService,
    private readonly projectsQuery: UserProjectsQuery,
    private readonly projectsStore: UserProjectsStore,
    private readonly sessionQuery: SessionQuery,
  ) { }

  ngOnInit(): void {
    // todo get user id from input
    this.sessionQuery.getUser().pipe(
      map(({ id }) => id),
      switchMap(id => this.projectsApi.getUserProjects(id)),
      untilDestroyed(this),
    ).subscribe({
      next: value => {
        this.projectsStore.add(value);
      },
    });
  }

}
