import React, { useState, useEffect } from "react";
import { getMovies } from "../../actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Movies.module.css";
import "../../App.css";
import Movie from "../Movie/Movie";

function Movies(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, Math.random() * 250);
  }, []);

  return (
    <React.Fragment>
      {(props.moviL && props.moviL.length < 1) || props.moviL === undefined
        ? props.getMovies()
        : null}
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className={styles.container}>
          <div className={styles.div_suggestion}>
            <span>Sort By</span>
          </div>
          <div className={styles.div_hot_top}>
            <ul className={styles.ul_hot_top}>
              <li>
                <NavLink className={styles.popular_link} to="/">
                  <button onClick={() => props.getMovies()}>Popular</button>
                </NavLink>
              </li>
            </ul>
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
});

function mapDispatchToProps(dispatch) {
  return {
    getMovies: () => dispatch(getMovies()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
