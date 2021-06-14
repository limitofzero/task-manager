import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../../project/project.interface';
import { filter, switchMap } from 'rxjs/operators';
import { UserProjectsFacadeService } from '../../project/user-projects/user-projects-facade.service';

@Component({
  selector: 'app-project-selector',
  templateUrl: './project-selector.component.html',
  styleUrls: ['./project-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSelectorComponent implements OnInit {
  public readonly projectControl = new FormControl('');
  public projects: Observable<Project[]>;

  private readonly userIdStream = new BehaviorSubject<string>(null);

  @Input() set userId(value: string) {
    this.userIdStream.next(value);
  }

  constructor(private readonly userProjects: UserProjectsFacadeService) {}

  ngOnInit(): void {
    this.projects = this.userIdStream.pipe(
      filter((id) => !!id),
      switchMap((id) => this.userProjects.getProjects(id)),
    );
  }
}
