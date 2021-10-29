import React from "react";
import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { getMovies } from "../../actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Movies(props) {
  return (
    <React.Fragment>
      {(props.moviL && props.moviL.length < 1) || props.moviL === undefined
        ? props.getMovies()
        : null}
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
