import styles from "./TaskItem.module.css";

export default function TaskItem() {
  return (
    <div className={`${styles["task-item"]} pt-4`}>
      <div>
        <h1>Task Title</h1>
      </div>
      <div>
        <h2>ID</h2>
      </div>
      <div>
        <h2>Completed: true</h2>
      </div>
    </div>
  );
}
