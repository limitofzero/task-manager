import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TasksApiService} from '../tasks-api.service';
import {UserProjectsQuery} from '../../projects/user-projects.query';

@Component({
  selector: 'app-create-task-window',
  templateUrl: './create-task-window.component.html',
  styleUrls: ['./create-task-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskWindowComponent implements OnInit {
  public readonly form: FormGroup;
  public readonly projects = this.projectsQuery.selectAll();

  constructor(
    private readonly fb: FormBuilder,
    private readonly taskApi: TasksApiService,
    private readonly projectsQuery: UserProjectsQuery,
  ) {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      projectId: this.fb.control([null, [Validators.required]]),
      typeId: this.fb.control([null, [Validators.required]]),
      title: this.fb.control(['', [Validators.required]]),
      description: this.fb.control(['']),
      performerId: this.fb.control([null]),
      creatorId: this.fb.control([null, [Validators.required]]),
      statusId: this.fb.control([1, [Validators.required]]),
    });
  }

  ngOnInit(): void {
  }

}
