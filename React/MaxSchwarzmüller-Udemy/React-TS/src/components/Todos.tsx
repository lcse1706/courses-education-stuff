import React from "react";
import Todo from "../models/todo";
import ListItem from "./ListItem";

import styles from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; removeItem: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <ListItem
          key={item.id}
          text={item.text}
          removeItem={props.removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
