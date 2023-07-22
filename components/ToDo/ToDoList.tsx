import styles from "./ToDoList.module.css";
import ToDoItem from "./ToDoItem";
import { ToDoListProps } from "@/types/todo";

export default function ToDoList(props: ToDoListProps) {
  return (
    <div className={styles["task-list"]}>
      {props.ToDoItems.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          title={toDo.title}
          id={toDo.id}
          userId={toDo.userId}
          completed={toDo.completed}
        />
      ))}
    </div>
  );
}
