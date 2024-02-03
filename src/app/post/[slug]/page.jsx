import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./singlePage.module.css";

const fetchPost = async (id) => {
  try {
    const response = await fetch("/api/singlePost", {
      method: "GET",
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let rjson = await response.json();
    setPosts(rjson.products);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

const page = async (params) => {
  console.log(params);
  const getData = await fetchPost(params);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            perspiciatis vitae ipsa!
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/th.jpg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>9/12/2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/th.jpg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis doloremque obcaecati maiores, commodi nobis animi
              perspiciatis vero quod facilis laborum saepe possimus
              consequuntur.
            </p>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              commodi pariatur similique veniam error totam aliquam, optio eaque
              reiciendis itaque nesciunt, aperiam eum ducimus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              commodi pariatur similique veniam error totam aliquam, optio eaque
              reiciendis itaque nesciunt, aperiam eum ducimus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
