"use client";
import React, { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import Image from "next/image";
import Card from "../card/Card";
const CardList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
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
        setLoading(false);
        setPosts(rjson.products);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchPosts();
    setLoading(true);
  }, []);
  console.log(posts);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      {loading && (
        <div className={styles.imgContainer}>
          <Image src="/loading.gif" alt="" height={100} width={100} />
        </div>
      )}
      <div className={styles.posts}>
        {posts ? (
          posts.map((post) => (
            // Add the return statement here
            <Card key={post._id} post={post} />
          ))
        ) : (
          <span>Sorry, No Posts found</span>
        )}
      </div>
    </div>
  );
};

export default CardList;
