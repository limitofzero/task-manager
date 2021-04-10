import {Injectable, Injector} from '@angular/core';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {CreateTaskWindowComponent} from './create-task-window.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTaskModalService {
  constructor(
    private readonly dialogService: TuiDialogService,
    private readonly injector: Injector,
  ) { }

  public open(userId: string): void {
    this.createDialog(userId).subscribe();
  }

  private createDialog(userId: string): Observable<any> {
    return this.dialogService.open(
      new PolymorpheusComponent(
        CreateTaskWindowComponent,
        this.injector
      ),
      {
        data: { userId },
        dismissible: true,
        label: 'Create task'
      },
    );
  }
}
