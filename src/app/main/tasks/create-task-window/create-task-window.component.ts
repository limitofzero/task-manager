import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProjectsFacadeService } from '../../projects/user-projects/user-projects-facade.service';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../projects/project';
import { TaskType } from '../../task-types/task-type';
import { TaskTypeFacadeService } from '../../task-types/task-type-facade.service';
import { User } from '../../../session/user';
import { shareReplay, startWith, switchMap } from 'rxjs/operators';
import { UsersApiService } from '../../users/users-api.service';
import { TuiContextWithImplicit, tuiPure, TuiStringHandler } from '@taiga-ui/cdk';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CreateTask } from '../create-task';

@UntilDestroy()
@Component({
  selector: 'app-create-task-window',
  templateUrl: './create-task-window.component.html',
  styleUrls: ['./create-task-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTaskWindowComponent implements OnInit {
  private readonly userId: string;

  public readonly form: FormGroup;
  public readonly projects: Observable<Project[]>;
  public readonly taskTypes: Observable<TaskType[]>;
  public readonly users: Observable<User[]>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly userProjectsService: UserProjectsFacadeService,
    private readonly taskTypesService: TaskTypeFacadeService,
    private readonly usersApi: UsersApiService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<CreateTask>,
  ) {
    this.userId = (this.context.data as { userId: string }).userId;
    this.projects = this.userProjectsService.getProjects(this.userId);
    this.taskTypes = this.taskTypesService.getTaskTypes();
    this.form = this.createForm();
    this.users = this.selectUsers();
  }

  public ngOnInit(): void {
    const projectControl = this.form.get('projectId');
    this.form
      .get('projectId')
      .valueChanges.pipe(startWith(projectControl.value), untilDestroyed(this))
      .subscribe({
        next: (value) => {
          this.performerControl.setValue(null);

          if (value) {
            this.performerControl.enable();
          } else {
            this.performerControl.disable();
          }
        },
      });
  }

  public get performerControl(): FormControl {
    return this.form.get('performerId') as FormControl;
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.context.completeWith(this.form.value);
  }

  public cancel(): void {
    this.context.completeWith(null);
  }

  public assignMe(): void {
    this.form.get('performerId').setValue(this.userId);
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

  private selectUsers(): Observable<User[]> {
    const projectIdControl = this.form.get('projectId');

    return projectIdControl.valueChanges.pipe(
      startWith(projectIdControl.value),
      switchMap((projectId: string) => {
        return projectId ? this.usersApi.getUsersByProjectId(projectId) : of([]);
      }),
      shareReplay({
        refCount: true,
        bufferSize: 1,
      }),
    );
  }

  @tuiPure
  stringify(items: ReadonlyArray<Record<string, any>>, idProp: string, labelProp: string): TuiStringHandler<TuiContextWithImplicit<number | string>> {
    if (!items) {
      return null;
    }

    const map = new Map(items.map((item) => [item[idProp], item[labelProp]]));

    return ({ $implicit }: TuiContextWithImplicit<number>) => {
      return map.get($implicit) || '';
    };
  }
}
