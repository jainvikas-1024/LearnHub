import React from "react";
import styles from "./filter.module.css";
const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.filterSection}>
          <div className={styles.filterCategory}>
            <label className={styles.filterCategoryTitle}>Category:</label>
            <div>
              <input type="checkbox" id="category1" />{" "}
              <label for="category1">Electronics</label>
            </div>
            <div>
              <input type="checkbox" id="category1" />{" "}
              <label for="category1">Clothing</label>
            </div>
            <div>
              <input type="checkbox" id="category1" />{" "}
              <label for="category1">Shoes </label>
            </div>
          </div>

          <div className={styles.filterCategory}>
            <label>Price Range:</label>
            <div>
              <input type="checkbox" id="price1" />{" "}
              <label for="price1">$0 - $50</label>
            </div>
            <div>
              <input type="checkbox" id="price1" />{" "}
              <label for="price1">$50 - $100</label>
            </div>
            <div>
              <input type="checkbox" id="price1" />{" "}
              <label for="price1">$100 - $500</label>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.product}>
            Product 1 - Category: Electronics, Price: $75
          </div>
          <div className={styles.product}>
            Product 2 - Category: Clothing, Price: $30
          </div>
          <div className={styles.product}>
            Product 3 - Category: Home & Kitchen, Price: $150
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
