import styles from "./Button.module.css";

export const Button = ({ color, title, newState }) => {
  return (
    <Button className={`${styles.button} ${styles[color]}`} onClick={newState}>
      {title}
    </Button>
  );
};