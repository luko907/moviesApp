import React from "react";
import { useEffect } from "react";
import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";

function Movies() {
  useEffect(() => {
    document.body.style["-webkit-backdrop-filter"] = "blur(10px)";
    document.body.style["backdrop-filter"] = "blur(10px)";

    return () => {
      document.body.style.removeProperty("backdrop-filter");
      document.body.style.removeProperty("-webkit-backdrop-filter");
    };
  }, []);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.div_suggestion}>
          <span>Suggestion</span>
        </div>
        <div className={styles.div_hot_top}>
          <ul className={styles.ul_hot_top}>
            <li>
              <button>Hot</button>
            </li>
            <li>
              <button>Top views</button>
            </li>
            <li>
              <button>Top rating</button>
            </li>
          </ul>
        </div>
        <Movie />
      </div>
    </React.Fragment>
  );
}
export default Movies;
