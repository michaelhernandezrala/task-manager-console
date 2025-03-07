import TaskFactory from './patterns/TaskFactory';
import TaskStorage from './storage/TaskStorage';

console.log('🛠️ Task Manager CLI Iniciado...');

const storage = TaskStorage.getInstance();

const task1 = TaskFactory.createTask('Resolver un bug', 'urgent');
storage.addTask(task1);

const task2 = TaskFactory.createTask('Escribir documentación', 'normal');
storage.addTask(task2);

console.log(storage.getTasks());
