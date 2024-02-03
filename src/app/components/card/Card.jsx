import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
const Card = ({ post }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/th.jpg"
            alt="post image"
            height={300}
            width={320}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>6.12.23 -</span>
            <span className={styles.category}>CULTURE</span>
          </div>
          <h2>{post.name}</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, provident? Ut nisi tenetur magni nostrum eos.
            Quibusdam neque consequatur, eveniet, voluptas quasi hic molestiae
            saepe, reprehenderit obcaecati cumque sunt voluptatibus accusamus
            provident.
          </p>
          <Link href={`post/${post._id}`} className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
