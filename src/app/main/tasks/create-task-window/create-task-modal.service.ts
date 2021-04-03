import {Injectable, Injector} from '@angular/core';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {CreateTaskWindowComponent} from './create-task-window.component';

@Injectable({
  providedIn: 'root'
})
export class CreateTaskModalService {
  private readonly dialog = this.dialogService.open<any>(
    new PolymorpheusComponent(
      CreateTaskWindowComponent,
      this.injector
    ),
    { dismissible: true, label: 'Test?'}
  );

  constructor(
    private readonly dialogService: TuiDialogService,
    private readonly injector: Injector,
  ) { }

  public open(): void {
    this.dialog.subscribe();
  }
}
