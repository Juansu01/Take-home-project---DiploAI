import styles from "./CardActionSection.module.css";

export default function CardActionSection() {
  return (
    <div className={styles["card-action-section"]}>
      <span className={styles["card-action"]}>Action 2</span>
      <span className={styles["card-action"]}>Action 1</span>
    </div>
  );
}
