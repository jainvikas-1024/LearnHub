"use client";
import React, { useState } from "react";
import styles from "./search.module.css";
import Image from "next/image";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdown, setDropdown] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDropDownEdit = async (e) => {
    let inputValue = e.target.value;
    setSearchQuery(e.target.value);
    setLoading(true);
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
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for a skill"
          value={searchQuery || ""}
          className={styles.input}
          onBlur={() => {
            setDropdown([]);
          }}
          onChange={onDropDownEdit}
        />
        <button className={styles.btn}>Search</button>
      </div>
      {loading && (
        <div className={styles.loadingContainer}>
          <Image src="/loading.gif" alt="" height={50} width={50} />
        </div>
      )}
      <div className={styles.dropcontainer}>
        {dropdown.map((item) => (
          <div className={styles.container} key={item._id}>
            <span className={styles.info}>{item.skillname}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
