import styles from "./CardItemList.module.css";
import PropsChildren from "@/types/propsChildren";

export default function CardItemList(props: PropsChildren) {
  return <div className={styles["card-item-list"]}>{props.children}</div>;
}
