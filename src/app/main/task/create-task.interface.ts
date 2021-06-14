export interface CreateTask {
  title: string;
  description: string;
  creatorId: string;
  projectId: string;
  performerId: string;
  statusId: number;
  typeId: number;
}
