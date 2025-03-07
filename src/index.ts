import TaskStorage from './storage/TaskStorage';

console.log('🛠️ Task Manager CLI Iniciado...');

const storage1 = TaskStorage.getInstance();
storage1.addTask({ id: 1, title: 'Aprender Singleton', completed: false });

const storage2 = TaskStorage.getInstance();
console.log(storage2.getTasks());

storage2.removeTask(1);
console.log(storage2.getTasks());
