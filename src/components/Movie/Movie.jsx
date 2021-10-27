import React from "react";
import styles from "./Movie.module.css";
import { connect } from "react-redux";
import playLogo from "../../img/play-icon.svg";
import { Link } from "react-router-dom";

function Movie(props) {
  return (
    <React.Fragment>
      {props.moviesLoaded.map((item) => (
        <div className={styles.movie} key={item.imdbID}>
          <Link
            to="/movies/movie"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              display: "table",
            }}
          >
            <div className={styles.movie_img}>
              <img
                className={styles.movie_posterimg}
                src={item.Poster}
                alt=""
              />
              <div className={styles.div_play_icon}>
                <img className={styles.play_icon} src={playLogo} alt="" />
              </div>
            </div>
            <div className={styles.description_container}>
              <div className={styles.description}>
                <span className={styles.title}>{item.Title}</span>
                <span className={styles.year}>({item.Year})</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  moviesLoaded: state.moviesLoaded,
});

export default connect(mapStateToProps, null)(Movie);
