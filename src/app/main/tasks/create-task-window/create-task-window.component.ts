import {Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserProjectsFacadeService} from '../../projects/user-projects/user-projects-facade.service';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {TuiDialogContext} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {Project} from '../../projects/project';
import {TaskType} from '../../task-types/task-type';
import {TaskTypeFacadeService} from '../../task-types/task-type-facade.service';

@Component({
  selector: 'app-create-task-window',
  templateUrl: './create-task-window.component.html',
  styleUrls: ['./create-task-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskWindowComponent {
  private readonly userId: string;

  public readonly form: FormGroup;
  public readonly projects: Observable<Project[]>;
  public readonly taskTypes: Observable<TaskType[]>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly userProjectsService: UserProjectsFacadeService,
    private readonly taskTypesService: TaskTypeFacadeService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<{ userId: string }>
  ) {
    this.userId = (this.context.data as { userId: string }).userId;
    this.projects = this.userProjectsService.getProjects(this.userId);
    this.taskTypes = this.taskTypesService.getTaskTypes();
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      projectId: [null, [Validators.required]],
      typeId: [null, [Validators.required]],
      title: ['', [Validators.required]],
      description: [''],
      performerId: [null],
      creatorId: [this.userId, [Validators.required]],
      statusId: [1, [Validators.required]],
    });
  }
}
