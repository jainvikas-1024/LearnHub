import React from "react";
import styles from "./filter.module.css";
const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.filterSection}>
          <div className={styles.filterCategory}>
            <label className={styles.filterCategoryTitle}>Learning Preference:</label>
            <div>
              <input type="checkbox" id="category1" />{" "}
              <label for="category1">Visual Learning</label>
            </div>
            <div>
              <input type="checkbox" id="category1" />{" "}
              <label for="category1">Kinesthetic Learning</label>
            </div>
            <div>
              <input type="checkbox" id="category1" />{" "}
              <label for="category1">Mutimodal Approach</label>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className={styles.filterCategory}>
            <label>Journey Duration:</label>
            <div>
              <input type="checkbox" id="price1" />{" "}
              <label for="price1">6 months</label>
            </div>
            <div>
              <input type="checkbox" id="price1" />{" "}
              <label for="price1">1 year</label>
            </div>
            <div>
              <input type="checkbox" id="price1" />{" "}
              <label for="price1">2+ years</label>
            </div>
            <br></br>
            
            
            <label>Skill Level:</label>
            <div>
              <input type="checkbox" id="price1" />{" "}
              <label for="price1">Beginner</label>
            </div>
            <div>
              <input type="checkbox" id="price1" />{" "}
              <label for="price1">Intermediate</label>
            </div>
            <div>
              <input type="checkbox" id="price1" />{" "}
              <label for="price1">Pro</label>
            </div>
          </div>
        </div>

        {/* <div>
          <div className={styles.product}>
            Product 1 - Category: Electronics, Price: $75
          </div>
          <div className={styles.product}>
            Product 2 - Category: Clothing, Price: $30
          </div>
          <div className={styles.product}>
            Product 3 - Category: Home & Kitchen, Price: $150
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Filter;
