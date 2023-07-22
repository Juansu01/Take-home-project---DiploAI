import styles from "./CardItem.module.css";

export default function CardItem() {
  return (
    <div className={styles["card-item"]}>
      <span className={styles["card-item-section"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <path
            d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
            fill="#EADDFF"
          />
          <text fill="#21005D" x="35%" y="60%" fontFamily="Roboto">
            A
          </text>
        </svg>
        <h3>List item</h3>
      </span>
      <span className={styles["card-item-section"]}>
        <p>100+</p>
        <input type="checkbox"></input>
      </span>
    </div>
  );
}
