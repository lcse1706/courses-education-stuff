import { useRef } from "react";
import styles from "./NewTodo.module.css";

const Newtodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }
    props.onAddTodo(enteredText);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label className={styles.label} htmlFor="text">
        Todo text
      </label>
      <input
        className={styles.input}
        type="text"
        id="text"
        ref={todoTextInput}
      ></input>
      <button className={styles.button}>Add Todo</button>
    </form>
  );
};

export default Newtodo;
