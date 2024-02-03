import Image from "next/image";
import CardList from "./components/cardList/CardList";
import styles from "./homepage.module.css";
import Search from "./components/search/search";
import Filter from "./components/filter/Filter";
export default function Home() {
  return (
    <main className={styles.container}>
      <Search />
      <div className={styles.content}>
        <Filter />
        <CardList />
      </div>
    </main>
  );
}
