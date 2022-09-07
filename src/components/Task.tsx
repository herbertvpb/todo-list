import { Trash } from "phosphor-react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";
import styles from "./Task.module.css";

export function Task() {
  const [checked, setChecked] = useState(false);

  function handleToggleCheckbox() {
    setChecked((state) => !state);
  }

  const text =
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.";

  return (
    <div className={styles.task}>
      <Checkbox checked={checked} onToggle={handleToggleCheckbox} />
      {checked ? <s>{text}</s> : <p>{text}</p>}
      <button>
        <Trash />
      </button>
    </div>
  );
}
