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
          <li>Hot</li>
          <li>Top views</li>
          <li>Top rating</li>
        </ul>
      </div>
    </React.Fragment>
  );
}
export default Home;
