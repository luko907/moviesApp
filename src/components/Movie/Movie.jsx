import React from "react";
import styles from "./Movie.module.css";
import { connect } from "react-redux";
import playLogo from "../../img/play-icon.svg";
import { Link } from "react-router-dom";

function Movie(props) {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <React.Fragment>
      {props.moviesLoaded.map((item) => (
        <div className={styles.movie} key={item.id}>
          <Link
            className={styles.link}
            to={`/movies/${item.id}`}
            style={{
              color: "inherit",
              textDecoration: "inherit",
              width: "125%",
            }}
          >
            <div className={styles.movie_img}>
              <img
                className={styles.movie_posterimg}
                src={baseUrl + item.poster_path}
                alt=""
              />
              <div className={styles.div_play_icon}>
                <img className={styles.play_icon} src={playLogo} alt="" />
              </div>
            </div>
            <div className={styles.description_container}>
              <div className={styles.description}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.year}>
                  {item.release_date.length > 4
                    ? item.release_date.slice(0, -6)
                    : item.release_date}
                </span>
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
