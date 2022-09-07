import { PlusCircle } from "phosphor-react";
import styles from "./TaskForm.module.css";

export function TaskForm() {
  return (
    <form
      onSubmit={() => console.log("Criando task")}
      className={styles.taskForm}
    >
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
