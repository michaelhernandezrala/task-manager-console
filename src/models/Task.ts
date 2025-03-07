type TaskType = 'urgent' | 'normal' | 'low';
interface ITask {
  title: string;
  priority: TaskType;
  completed: boolean;
}

export { ITask, TaskType };
