import { Trash } from "phosphor-react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";
import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  description: string;
  isFinished: boolean;
  onCheck: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Task({ id: taskId, description, isFinished, onCheck, onDelete }: TaskProps) {
  function handleToggleCheckbox() {
    onCheck(taskId)
  }

  function handleDeleteTask() {
    onDelete(taskId)
  }

  return (
    <div className={styles.task}>
      <Checkbox checked={isFinished} onToggle={handleToggleCheckbox} />
      {isFinished ? <s>{description}</s> : <p>{description}</p>}
      <button onClick={handleDeleteTask}>
        <Trash weight="bold" />
      </button>
    </div>
  );
}
