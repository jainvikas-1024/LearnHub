import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          {/* <Image src="/developer.png" alt="logo" height={50} width={50} /> */}
          <h1 className={styles.logoText}>LearnHub</h1>
        </div>
        <p className={styles.desc}>
          Copyright &#169; All rights reserved | LearnHub.com
        </p>
        <div className={styles.icons}>
          <Link
            href="https://www.instagram.com/parikshitgehlaut/"
            target="_blank"
            title="Instagram"
          >
            {" "}
            <Image src="/instagram.webp" alt="" height={25} width={25} />
          </Link>
          <Link
            href="https://medium.com/@parikshitgehlaut"
            target="_blank"
            title="Medium"
          >
            {" "}
            <Image src="/medium.webp" alt="" height={25} width={25} />
          </Link>
          <Link
            href="https://twitter.com/I_AM_PARIKSHIT"
            target="_blank"
            title="Twitter"
          >
            {" "}
            <Image src="/Twitter.webp" alt="" height={25} width={25} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/parikshitgehlaut/"
            target="_blank"
            title="LinkedIn"
          >
            {" "}
            <Image src="/linkedin.webp" alt="" height={25} width={25} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/project">Posts</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link
            href="https://www.instagram.com/parikshitgehlaut/"
            target="_blank"
          >
            Instagram
          </Link>
          <Link href="https://medium.com/@parikshitgehlaut" target="_blank">
            Medium
          </Link>
          <Link
            href="https://www.linkedin.com/in/parikshitgehlaut/"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link href="https://twitter.com/I_AM_PARIKSHIT" target="_blank">
            Twitter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
