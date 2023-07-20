import styles from "./card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles["card-content"]}>
        <h1 className={styles["card-title"]}>DiploAI</h1>
        <p className={styles["card-description"]}>
          DiploAI is a tool that helps companies and governments deal with
          increasing climate complexity and regulatory change, by using GenAI to
          identify their optimal strategy to achieve a given goal.
        </p>
        <div className={styles["card-item-list"]}>
          <div className={styles["card-item"]}>
            <span className={styles["card-item-section"]}>
              <h3>A </h3>
              <h3>List item</h3>
            </span>
            <span className={styles["card-item-section"]}>
              <p>100+ </p>
              <input type="checkbox"></input>
            </span>
          </div>
          <div className={styles["card-item"]}>
            <span className={styles["card-item-section"]}>
              <h3>A </h3>
              <h3>List item</h3>
            </span>
            <span className={styles["card-item-section"]}>
              <p>100+ </p>
              <input type="checkbox"></input>
            </span>
          </div>
          <div className={styles["card-item"]}>
            <span className={styles["card-item-section"]}>
              <h3>A </h3>
              <h3>List item</h3>
            </span>
            <span className={styles["card-item-section"]}>
              <p>100+ </p>
              <input type="checkbox"></input>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
