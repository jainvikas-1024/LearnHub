import React from "react";
import styles from "./filter.module.css";
const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.filterSection}>
          <div className={styles.filterCategory}>
            <label className={styles.maintitle}> <h3>Apply Filters</h3></label>
            <label className={styles.filterCategoryTitle}>Learning Preference:</label>
            <div>
              <input type="radio" id="none" name="preference" checked />{" "}
              <label for="none">None</label>
            </div>
            <div>
              <input type="radio" id="visual" name="preference" />{" "}
              <label for="visual">Visual Learning</label>
            </div>
            <div>
              <input type="radio" id="kinesthetic" name="preference" />{" "}
              <label for="kinesthetic">Kinesthetic Learning</label>
            </div>
            <div>
              <input type="radio" id="multimodal" name="preference" />{" "}
              <label for="multimodal">Mutimodal Approach</label>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className={styles.filterCategory}>
            <label>Journey Duration:</label>
            <div>
              <input type="checkbox" id="6months" name="duration" />{" "}
              <label for="6months">6 months</label>
            </div>
            <div>
              <input type="checkbox" id="1year" name="duration" />{" "}
              <label for="1year">1 year</label>
            </div>
            <div>
              <input type="checkbox" id="2year" name="duration" />{" "}
              <label for="2year">2+ years</label>
            </div>
            <br></br>
            
            
            <label>Skill Level:</label>
            <div>
              <input type="checkbox" id="beginner" name="level" />{" "}
              <label for="beginner">Beginner</label>
            </div>
            <div>
              <input type="checkbox" id="intermediate" name="level" />{" "}
              <label for="intermediate">Intermediate</label>
            </div>
            <div>
              <input type="checkbox" id="advanced" name="level" />{" "}
              <label for="advanced">Advanced</label>
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
