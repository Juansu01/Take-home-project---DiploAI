import styles from "./TaskItem.module.css";
import { ToDoItem } from "@/types/todo";

export default function ToDoItem(props: ToDoItem) {
  return (
    <div className={`${styles["task-item"]} pt-4`}>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div>
        <h2>{props.id}</h2>
      </div>
      <div>
        <h2>{props.completed ? "Completed" : "Incomplete"}</h2>
      </div>
    </div>
  );
}
