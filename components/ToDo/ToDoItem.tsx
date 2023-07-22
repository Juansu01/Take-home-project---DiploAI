import styles from "./ToDoItem.module.css";
import { ToDoItem } from "@/types/todo";

export default function ToDoItem(props: ToDoItem) {
  const completedColor = props.completed ? "text-success" : "text-warning";

  return (
    <div className={`${styles["task-item"]} pt-4 bg-dark`}>
      <div className="text-primary">
        <h1>{props.title}</h1>
      </div>
      <div>
        <h2 className="text-info">{props.id}</h2>
      </div>
      <div>
        <h2 className={completedColor}>
          {props.completed ? "Completed" : "Incomplete"}
        </h2>
      </div>
    </div>
  );
}
