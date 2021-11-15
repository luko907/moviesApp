import React, { useState, useEffect } from "react";
import { getMovies, getReset } from "../../actions";
import { connect } from "react-redux";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styles from "./Movies.module.css";
import "../../App.css";
import Movie from "../Movie/Movie";
import Drop from "../Drop/drop";
import DropYear from "../Dyear/dryear";

function Movies(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (props.moviL.length < 1) {
      props.getMovies();
    }
    setTimeout(function () {
      setIsLoading(false);
    }, Math.random() * 240);
  }, [props]);
  function topRatingHandler() {
    props.getReset();
    props.getMovies();
  }
  return (
    <React.Fragment>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className={styles.container}>
          <div className={styles.div_suggestion}>
            <FontAwesomeIcon className={styles.filter} icon={faFilter} />
            <span>Filters</span>
          </div>
          <div className={styles.div_top}>
            <ul className={styles.ul_top}>
              <li>
                <NavLink className={styles.topRating_link} to="/">
                  <button onClick={() => topRatingHandler()}>Top Rating</button>
                </NavLink>
              </li>
              <li>
                <Drop />
              </li>
              <li>
                <DropYear />
              </li>
            </ul>
          </div>
          <div className={styles.moviesCount_div}>
            <span>
              {props.moviActual.length > 0
                ? props.moviActual.length
                : props.moviL.length}{" "}
              titles
            </span>
          </div>
          <div className={styles.movie_cards}>
            <Movie />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  moviL: state.moviesLoaded,
  moviActual: state.moviesActual,
});

function mapDispatchToProps(dispatch) {
  return {
    getMovies: () => dispatch(getMovies()),
    getReset: () => dispatch(getReset()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
