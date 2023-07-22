import styles from "./card.module.css";
import PropsChildren from "@/types/propsChildren";

export default function Card(props: PropsChildren) {
  return <div className={styles.card}>{props.children}</div>;
}
