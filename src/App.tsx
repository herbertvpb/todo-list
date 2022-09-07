import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
