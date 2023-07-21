import styles from "./CardContent.module.css";
import CardItemList from "./CardItemList";
import CardItem from "./CardItem";
import CardActionSection from "./CardActionSection";

export default function CardContent() {
  return (
    <div className={styles["card-content"]}>
      <h1 className={styles["card-title"]}>DiploAI</h1>
      <p className={styles["card-description"]}>
        DiploAI is a tool that helps companies and governments deal with
        increasing climate complexity and regulatory change, by using GenAI to
        identify their optimal strategy to achieve a given goal.
      </p>
      <CardItemList>
        <CardItem />
        <CardItem />
        <CardItem />
      </CardItemList>
      <CardActionSection />
    </div>
  );
}
