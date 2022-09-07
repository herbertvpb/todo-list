import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
}

export function Checkbox({ checked, onToggle }: CheckboxProps) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={checked} onChange={onToggle} />
      <span className={styles.checkmark}></span>
    </label>
  );
}
