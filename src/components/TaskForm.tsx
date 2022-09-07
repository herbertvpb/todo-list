import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./TaskForm.module.css";

interface TaskFormProps {
  handleCreateNewTask: (description: string) => void;
}

export function TaskForm({ handleCreateNewTask }: TaskFormProps) {
  const [description, setDescription] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    handleCreateNewTask(description);
  }

  function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  return (
    <form onSubmit={onSubmit} className={styles.taskForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleDescriptionChange}
      />
      <button>
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
