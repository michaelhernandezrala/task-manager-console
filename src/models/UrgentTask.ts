import { ITask, TaskType } from './Task';

class UrgentTask implements ITask {
  title: string;
  priority: TaskType;
  completed: boolean;

  constructor(title: string) {
    this.title = title;
    this.priority = 'urgent';
    this.completed = false;
  }
}

export default UrgentTask;
