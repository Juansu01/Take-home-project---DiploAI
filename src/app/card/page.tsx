import styles from "./page.module.css";
import Card from "../components/UI/Card";
import CardContent from "../components/CardContent/CardContent";

export default function CardPage() {
  return (
    <main className={styles.main}>
      <Card>
        <CardContent />
      </Card>
    </main>
  );
}
