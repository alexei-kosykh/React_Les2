import { useState } from "react";
import { Button } from "../Buttons/Button";
import styles from "./Counter.module.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <p className={styles.count}>{count}</p>
      <Button color="green" title="+" onclick={() => setCount(count + 1)} />
      <Button color="yellow" title="R" onclick={() => setCount(0)} />
      <Button color="red" title="-" onclick={() => setCount(count - 1)} />
    </div>
  );
};