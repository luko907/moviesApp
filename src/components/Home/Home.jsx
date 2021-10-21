import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <React.Fragment>
      <div className={styles.div_suggestion}>
        <span>Suggestion</span>
      </div>
      <div className={styles.div_hot_top}>
        <ul className={styles.ul_hot_top}>
          <li>
            <a href="#">Hot</a>
          </li>
          <li>
            <a href="#">Top views</a>
          </li>
          <li>
            <a href="#">Top rating</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
export default Home;
