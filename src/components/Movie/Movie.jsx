import React from "react";
import styles from "./Movie.module.css";

function Movie() {
  return (
    <React.Fragment>
      <div className={styles.movie}>
        <div className={styles.movie_img}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BNGEzMjdiZGEtYzU3ZC00OGFmLWI3NTgtZTcyNTFjYTliNDg5XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
            alt=""
          />
        </div>
        <div className={styles.description_container}>
          <div className={styles.description}>
            <span className={styles.title}>Nemo</span>
            <span className={styles.year}>(2003)</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Movie;
