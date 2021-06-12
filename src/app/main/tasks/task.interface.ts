import { TaskType } from '../../../../../task-manager-back/src/app/services/task-types/task-type';
import { Project } from '../../../../../task-manager-back/src/app/services/projects/project';
import { TaskStatus } from '../../../../../task-manager-back/src/app/services/task-status/task-status';
import { User } from '../../../../../task-manager-back/src/app/services/user/user.interface';

export interface Task {
  id: string;
  title: string;
  description: string;
  type: TaskType;
  project: Project;
  status: TaskStatus;
  creator: User;
  performer?: User;
}
