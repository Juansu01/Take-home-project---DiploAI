import styles from "./page.module.css";
import Card from "./card";

export default function CardRoute() {
  return (
    <main className={styles.main}>
      <Card />
    </main>
  );
}
