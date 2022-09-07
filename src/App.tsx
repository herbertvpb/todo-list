import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  isFinished: boolean;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateNewTask(taskDescription: string) {
    const taskToAdd = {
      id: uuidv4(),
      isFinished: false,
      description: taskDescription
    }

    setTasks(state => [...state, taskToAdd]);
  }

  function handleUpdateTasks(updatedTasks: Task[]) {
    setTasks(updatedTasks);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskForm handleCreateNewTask={handleCreateNewTask} />
        <TaskList tasks={tasks} handleUpdateTasks={handleUpdateTasks}/>
      </div>
    </div>
  );
}

export default App;
