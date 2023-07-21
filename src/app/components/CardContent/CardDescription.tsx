import styles from "./CardDescription.module.css";

export default function CardDescription() {
  return (
    <p className={styles["card-description"]}>
      DiploAI is a tool that helps companies and governments deal with
      increasing climate complexity and regulatory change, by using GenAI to
      identify their optimal strategy to achieve a given goal.
    </p>
  );
}
