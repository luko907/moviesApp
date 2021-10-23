import React from "react";
import { useEffect } from "react";
import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { getMovies } from "../../actions/index.js";

function Movies() {
  useEffect(() => {
    document.body.style["-webkit-backdrop-filter"] = "blur(10px)";
    document.body.style["backdrop-filter"] = "blur(10px)";
    getMovies();

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
              {/*     <a href="#">Hot</a> */}
            </li>
            <li>
              <button>Top views</button>
              {/* <a href="#">Top views</a> */}
            </li>
            <li>
              <button>Top rating</button>
              {/*  <a href="#">Top rating</a> */}
            </li>
          </ul>
        </div>
        <Movie />
      </div>
    </React.Fragment>
  );
}
export default Movies;
