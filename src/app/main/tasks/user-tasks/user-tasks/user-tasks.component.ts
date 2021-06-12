import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Task} from '../../task.interface';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {filter, map, startWith, switchMap, switchMapTo} from 'rxjs/operators';
import {UntilDestroy} from '@ngneat/until-destroy';
import {TaskFacadeService} from '../task-facade.service';
import {TaskTableComponent} from '../../task-table/task-table/task-table.component';

interface TableSettings {
  page: number;
  size: number;
}

@UntilDestroy()
@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.scss'],
})
export class UserTasksComponent implements OnInit {
  private readonly performerId = new BehaviorSubject(null);

  public tableSettings: Observable<TableSettings>;
  public tasks: Observable<Task[]>;
  public readonly isLoading: Observable<boolean> = this.taskService.isLoading();

  @ViewChild(TaskTableComponent, {static: true}) taskTable: TaskTableComponent;

  @Input() set userId(value: string) {
    this.performerId.next(value);
  }

  constructor(
    private readonly taskService: TaskFacadeService
  ) {
  }

  public ngOnInit(): void {
    this.tableSettings = this.getTableSettings();

    this.tasks = combineLatest([this.performerId, this.tableSettings]).pipe(
      filter(([userId, _]) => !!userId),
      switchMap(([userId, tableSettings]) => {
        return this.taskService.load({performerId: userId});
      }),
      switchMapTo(this.taskService.selectAll()),
      startWith([]),
    );
  }

  private getTableSettings(): Observable<TableSettings> {
    return combineLatest([
      this.taskTable.pageChanged.asObservable(),
      this.taskTable.pageSizeChanged.asObservable(),
    ]).pipe(
      startWith([
        0, 10,
      ] as [number, number]),
      map(([page, size]) => ({
        page,
        size,
      })),
    );
  }
}
