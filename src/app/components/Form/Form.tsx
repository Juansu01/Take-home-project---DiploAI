import styles from "./Form.module.css";

export default function Form() {
  return (
    <form>
      <div className={styles["form-controls"]}>
        <div className={styles["form-control"]}>
          <label className="h1">Amount of todos to fetch</label>
          <input
            type="number"
            placeholder="Todo amount"
            min="1"
            max="100"
          ></input>
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button type="submit">Fetch</button>
      </div>
    </form>
  );
}
