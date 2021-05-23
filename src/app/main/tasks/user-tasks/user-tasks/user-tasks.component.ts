import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../task.interface';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, switchMap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {TaskFacadeService} from '../task-facade.service';

@UntilDestroy()
@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.scss'],
})
export class UserTasksComponent implements OnInit {
  private readonly performerId = new BehaviorSubject(null);

  public readonly tasks: Observable<Task[]> = this.taskService.selectAll();
  public readonly isLoading: Observable<boolean> = this.taskService.isLoading();

  @Input('userId') set userId(value: string) {
    this.performerId.next(value);
  }

  constructor(
    private readonly taskService: TaskFacadeService
  ) {}

  ngOnInit(): void {
    this.performerId.pipe(
      filter(user => !!user),
      switchMap(userId => this.taskService.load({ performerId: userId })),
      untilDestroyed(this),
    ).subscribe();
  }
}
