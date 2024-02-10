import styles from "./page.module.css";
import ClientList from "@/components/ClientTable";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <ClientList />
      </div>
    </main>
  );
}
