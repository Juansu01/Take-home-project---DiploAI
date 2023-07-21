import { Fragment } from "react";

import styles from "./page.module.css";
import Navigation from "./components/Layout/Navigation";
import FormContainer from "./components/UI/FormContainer";

export default function Home() {
  return (
    <Fragment>
      <Navigation />
      <main className={styles.main}>
        <FormContainer />
      </main>
    </Fragment>
  );
}
