"use client";
import React from "react";
import { useState } from "react";
import styles from "./addpost.module.css";
const page = () => {
  const [postForm, setPostForm] = useState({});

  const handleChange = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
  };

  const addPost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postForm),
      });
      if (response.ok) {
        console.log("Post added successfully!");
        setPostForm({});
      } else {
        console.log("Failed to add post:", response.statusText);
      }
    } catch (error) {
      console.log("Error adding post:", error.message);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.input}>
        <label htmlFor="name" className={styles.labelName}>
          Post Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={postForm?.name || ""}
          onChange={handleChange}
          className={styles.inputName}
          required
        />

        <label ht="desc">Post Description:</label>
        <textarea
          id="desc"
          name="desc"
          rows="4"
          value={postForm?.desc || ""}
          onChange={handleChange}
          className={styles.inputName}
          required
        />
        <button onClick={addPost} className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
