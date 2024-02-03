import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ResponsiveNav from "../responsiveNav/ResponsiveNav";

const Navbar = async () => {
  // const { getUser } = getKindeServerSession();
  // const user = await getUser();
  // // console.log(user);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LearnHub</div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/addpost" className={styles.link}>
          Posts
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact Us
        </Link>
        <button className={styles.btn}>Sign in</button>
        <button className={styles.btn}>Sign up</button>
      </div>
      <ResponsiveNav />
    </div>
  );
};

export default Navbar;
