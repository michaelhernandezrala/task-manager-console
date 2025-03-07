import LowTask from '../models/LowTask';
import NormalTask from '../models/NormalTask';
import { ITask, TaskType } from '../models/Task';
import UrgentTask from '../models/UrgentTask';

class TaskFactory {
  public static createTask(title: string, type: TaskType): ITask {
    switch (type) {
      case 'low':
        return new LowTask(title);
      case 'normal':
        return new NormalTask(title);
      case 'urgent':
        return new UrgentTask(title);
      default:
        throw new Error('Tipo de tarea no válido');
    }
  }
}

export default TaskFactory;
