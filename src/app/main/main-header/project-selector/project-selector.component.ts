import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {Project} from '../../projects/project';
import {ProjectsApiService} from '../../projects/projects-api.service';
import {UserProjectsQuery} from '../../projects/user-projects.query';
import {UserProjectsStore} from '../../projects/user-projects.store';
import {filter, switchMap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-project-selector',
  templateUrl: './project-selector.component.html',
  styleUrls: ['./project-selector.component.scss']
})
export class ProjectSelectorComponent implements OnInit {
  public projectControl = new FormControl('');
  public readonly projects: Observable<Project[]> = this.projectsQuery.selectAll();

  private userIdStream = new BehaviorSubject<string>(null);

  @Input('userId') set userId(value: string) {
    this.userIdStream.next(value);
  }

  constructor(
    private readonly projectsApi: ProjectsApiService,
    private readonly projectsQuery: UserProjectsQuery,
    private readonly projectsStore: UserProjectsStore,
  ) { }

  ngOnInit(): void {
    this.userIdStream.pipe(
      filter(id => !!id),
      switchMap(id => this.projectsApi.getUserProjects(id)),
      untilDestroyed(this),
    ).subscribe({
      next: value => {
        this.projectsStore.add(value);
      },
    });
  }

}
