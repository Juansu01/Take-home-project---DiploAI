import styles from "./CardContent.module.css";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardItemList from "./CardItemList";
import CardItem from "./CardItem";
import CardActionSection from "./CardActionSection";

export default function CardContent() {
  return (
    <div className={styles["card-content"]}>
      <CardTitle />
      <CardDescription />
      <CardItemList>
        <CardItem />
        <CardItem />
        <CardItem />
      </CardItemList>
      <CardActionSection />
    </div>
  );
}
