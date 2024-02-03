import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
const Card = ({ post }) => {
  console.log(post);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={post.img}
            alt="post image"
            height={300}
            width={320}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>{post.skillname}</span>
            <span className={styles.category}>- {post.levelskill}</span>
          </div>
          <h2>{post.name}</h2>
          <p className={styles.desc}>{post.support}</p>
          <Link href={`post/${post._id}`} className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
