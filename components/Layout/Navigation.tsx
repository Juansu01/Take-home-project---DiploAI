import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <div className={`${styles.logo} text-sm`}>Take Home Project</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/card">See Card</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
