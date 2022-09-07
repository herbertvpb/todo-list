import { ClipboardText } from "phosphor-react";
import { Task } from './Task';
import styles from "./TaskList.module.css";

export function TaskList() {
  const isTaskArrayEmpty = false;

  return (
    <div className={styles.taskList}>
      <header>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>5</span>
        </div>
        <div className={styles.finishedTasks}>
          <strong>Concluídas</strong>
          <span>2 de 5</span>
        </div>
      </header>

      <main>
        {isTaskArrayEmpty ? (
          <div className={styles.emptyList}>
            <ClipboardText size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          <div className={styles.filledList}>
            <Task />
            <Task />
            <Task />
            <Task />
          </div>
        )}
      </main>
    </div>
  );
}
