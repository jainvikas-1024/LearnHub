"use client";
import React, { useState } from "react";
import styles from "./search.module.css";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdown, setDropdown] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDropDownEdit = async (e) => {
    let inputValue = e.target.value;
    setSearchQuery(e.target.value);
    // console.log(query);
    // setLoading(true);
    setDropdown([]);
    try {
      const response = await fetch("/api/search?query=" + inputValue);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
      console.log(res);
      if (res && res.products) {
        setLoading(false);
        setDropdown(res.products);
      } else {
        console.error("Invalid response format:", res);
      }
    } catch (error) {
      console.error("Error fetching dropdown data:", error.message);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <h1>Search Posts</h1>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for a post"
          value={searchQuery || ""}
          className={styles.input}
          onBlur={() => {
            setDropdown([]);
          }}
          onChange={onDropDownEdit}
        />
        <button className={styles.btn}>Search</button>
      </div>
      <div className={styles.dropcontainer}>
        {dropdown.map((item) => (
          <div className={styles.container} key={item.slug}>
            <span className={styles.info}>{item.slug}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
