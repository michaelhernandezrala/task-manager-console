import { ITask, TaskType } from './Task';

class NormalTask implements ITask {
  title: string;
  priority: TaskType;
  completed: boolean;

  constructor(title: string) {
    this.title = title;
    this.priority = 'normal';
    this.completed = false;
  }
}

export default NormalTask;
