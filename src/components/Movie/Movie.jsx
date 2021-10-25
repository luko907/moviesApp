import React from "react";
import styles from "./Movie.module.css";
import { connect } from "react-redux";

function Movie(props) {
  return (
    <React.Fragment>
      {props.moviesActual.lengh > 0
        ? console.log(true)
        : props.moviesLoaded.map((item) => (
            <div className={styles.movie} key={item.imdbID}>
              <div className={styles.movie_img}>
                <img src={item.Poster} alt="" />
              </div>
              <div className={styles.description_container}>
                <div className={styles.description}>
                  <span className={styles.title}>{item.Title}</span>
                  <span className={styles.year}>({item.Year})</span>
                </div>
              </div>
            </div>
          ))}

      {}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  moviesLoaded: state.moviesLoaded,
  moviesActual: state.actualMovies,
});

export default connect(mapStateToProps, null)(Movie);

/* import React from "react";
import styles from "./Movie.module.css";
import { connect } from "react-redux";

function Movie(props) {
  return (
    <React.Fragment>
      {props.moviesActual ? console.log(true) : console.log(false)}

      {props.moviesLoaded.map((item) => (
        <div className={styles.movie} key={item.imdbID}>
          <div className={styles.movie_img}>
            <img src={item.Poster} alt="" />
          </div>
          <div className={styles.description_container}>
            <div className={styles.description}>
              <span className={styles.title}>{item.Title}</span>
              <span className={styles.year}>({item.Year})</span>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  moviesLoaded: state.moviesLoaded,
  moviesActual: state.actualMovies,
});

export default connect(mapStateToProps, null)(Movie);
 */
