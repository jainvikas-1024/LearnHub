"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./responsiveNav.module.css";
const ResponsiveNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={styles.burger}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={() => setOpen(!open)}>
            Home
          </Link>
          <Link href="/addpost" onClick={() => setOpen(!open)}>
            Posts
          </Link>
          <Link href="/contact" onClick={() => setOpen(!open)}>
            Contact Me
          </Link>
          {/* <button className={styles.btn}>
            <LoginLink>Sign in</LoginLink>
          </button>
          <button className={styles.btn}>
            <RegisterLink>Sign up</RegisterLink>
          </button> */}
        </div>
      )}
    </>
  );
};

export default ResponsiveNav;
