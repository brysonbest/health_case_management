import styles from "./page.module.css";
import ClientList from "@/components/ClientTable";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <ClientList />
        </div>
      </div>
    </main>
  );
}
