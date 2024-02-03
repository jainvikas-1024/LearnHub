"use client"
import Image from "next/image";
import CardList from "./components/cardList/CardList";
import styles from "./homepage.module.css";
import Search from "./components/search/search";
import Filter from "./components/filter/Filter";
import Bgimage from "./components/Bgimage";
export default function Home() {
  return (
    <main className={styles.container}>
      <Search />
      <Bgimage>
    <div className={styles.headerimg}>
    <pre className={styles.preformated}>
    {`
Empower Your Learning Journey
With The Magic Of Visuals! 
Dive Into Your Lessons With
The Power Of Images 
And Videos Combined, 
Creating A Truly Immersive 
And Effective Way To Learn.
    `}
    </pre>
    </div>
    </Bgimage>
      
      <div className={styles.content}>
      
        <Filter />
        <CardList />
      </div>
    </main>
  );
}
