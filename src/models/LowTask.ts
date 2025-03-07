import { ITask, TaskType } from './Task';

class LowTask implements ITask {
  title: string;
  priority: TaskType;
  completed: boolean;

  constructor(title: string) {
    this.title = title;
    this.priority = 'low';
    this.completed = false;
  }
}

export default LowTask;
