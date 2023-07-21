import PropsChildren from "@/types/propsChildren";
import styles from "./FormContainer.module.css";

export default function FormContainer(props: PropsChildren) {
  return <div className={styles["form-container"]}>{props.children}</div>;
}
