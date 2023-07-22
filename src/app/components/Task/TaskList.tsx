import styles from "./TaskList.module.css";
import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <div className={`${styles["task-list"]}`}>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
}
