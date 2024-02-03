import Image from "next/image";
// import CardList from "./components/cardList/CardList";
import styles from "./homepage.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>{/* <CardList /> */}</div>
    </main>
  );
}
