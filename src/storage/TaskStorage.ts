import { ITask } from '../models/Task';

class TaskStorage {
  private static instance: TaskStorage;
  private tasks: ({ id: number } & ITask)[];
  private id: number;

  private constructor() {
    this.tasks = [];
    this.id = 1;
  }

  public static getInstance(): TaskStorage {
    if (!TaskStorage.instance) {
      TaskStorage.instance = new TaskStorage();
    }

    return TaskStorage.instance;
  }

  public addTask(task: ITask): void {
    this.tasks.push({ id: this.id++, ...task });
  }

  public getTasks(): ({ id: number } & ITask)[] {
    return this.tasks;
  }

  public getTaskById(id: number): ITask | null {
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
