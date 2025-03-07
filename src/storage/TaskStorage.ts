import Task from '../models/Task';

class TaskStorage {
  private static instance: TaskStorage;
  private tasks: Task[];

  private constructor() {
    this.tasks = [];
  }

  public static getInstance(): TaskStorage {
    if (!TaskStorage.instance) {
      TaskStorage.instance = new TaskStorage();
    }

    return TaskStorage.instance;
  }

  public addTask(task: Task): void {
    this.tasks.push(task);
  }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public getTaskById(id: number): Task | null {
    return this.tasks.find((task) => task.id === id) ?? null;
  }

  public removeTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  public clearTasks(): void {
    this.tasks = [];
  }
}

export default TaskStorage;
