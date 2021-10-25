import React from "react";
import { useEffect } from "react";
import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { connect } from "react-redux";

function Movies(props) {
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
        <div className={styles.movie_cards}>
          <Movie />
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  moviL: state.moviesLoaded,
});

export default connect(mapStateToProps, null)(Movies);
