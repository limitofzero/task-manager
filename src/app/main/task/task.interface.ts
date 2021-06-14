import { Project } from '../project/project.interface';
import { User } from '../../session/user.interface';
import { TaskStatus } from '../task-status/task-status.interface';

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
