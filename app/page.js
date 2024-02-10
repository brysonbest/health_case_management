import styles from "./page.module.css";
import ClientList from "@/components/ClientList";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <ClientList />
      </div>
    </main>
  );
}
