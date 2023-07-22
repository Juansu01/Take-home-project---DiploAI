import PropsChildren from "@/types/propsChildren";
import styles from "./FormContainer.module.css";

export default function FormContainer(props: PropsChildren) {
  return (
    <div
      className={`${styles["form-container"]} d-flex justify-content-center pt-5 flex-row`}
    >
      {props.children}
    </div>
  );
}
