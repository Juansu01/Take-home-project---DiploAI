import { Fragment } from "react";

import styles from "@/styles/Card.module.css";
import Card from "@/components/UI/Card";
import CardContent from "@/components/CardContent/CardContent";
import Navigation from "@/components/Layout/Navigation";

export default function CardPage() {
  return (
    <Fragment>
      <Navigation />
      <main className={styles.main}>
        <Card>
          <CardContent />
        </Card>
      </main>
    </Fragment>
  );
}
