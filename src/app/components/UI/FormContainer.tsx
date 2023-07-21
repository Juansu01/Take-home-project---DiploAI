import PropsChildren from "@/types/propsChildren";
import styles from "./FormContainer.module.css";

export default function FormContainer(props: PropsChildren) {
  return (
    <div className={styles["form-container"]}>
      <h1 className="text-white">Fill this form</h1>
    </div>
  );
}
