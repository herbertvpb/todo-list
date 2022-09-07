import { ClipboardText } from "phosphor-react";
import { Task } from "./Task";
import { Task as ITask } from "../App";
import styles from "./TaskList.module.css";
import { useMemo } from "react";

interface TaskListProps {
  tasks: ITask[];
  handleUpdateTasks: (updatedTasks: ITask[]) => void;
}

export function TaskList({ tasks, handleUpdateTasks }: TaskListProps) {
  const isTaskArrayEmpty = tasks.length === 0;

  const finishedTasks = useMemo(() => {
    return tasks.filter((task) => task.isFinished);
  }, [tasks]);

  function handleToggleTask(taskId: string) {
    const newTasks = tasks.map((task) => {
      return task.id === taskId
        ? { ...task, isFinished: !task.isFinished }
        : task;
    });
    handleUpdateTasks(newTasks);
  }

  function handleDeleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    handleUpdateTasks(newTasks);
  }

  return (
    <div className={styles.taskList}>
      <header>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.finishedTasks}>
          <strong>Concluídas</strong>
          <span>
            {finishedTasks.length} de {tasks.length}
          </span>
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
            {tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                isFinished={task.isFinished}
                onCheck={handleToggleTask}
                onDelete={handleDeleteTask}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
