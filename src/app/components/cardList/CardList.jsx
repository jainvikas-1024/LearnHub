"use client";
import React, { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import Image from "next/image";
import Card from "../card/Card";
const CardList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/post", {
          method: "GET",
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let rjson = await response.json();
        console.log(rjson);
        setPosts(rjson.products);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts ? (
          posts.map((post) => (
            // Add the return statement here
            <Card key={post._id} post={post} />
          ))
        ) : (
          <Card />
        )}
      </div>
    </div>
  );
};

export default CardList;
