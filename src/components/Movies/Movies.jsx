import React, { useState, useEffect } from "react";
import { getMovies } from "../../actions";
import { connect } from "react-redux";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styles from "./Movies.module.css";
import "../../App.css";
import Movie from "../Movie/Movie";

function Movies(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState("Genres");
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, Math.random() * 250);
  }, []);
  function popularHandler() {
    props.getMovies();
    setSelected("Genres");
  }
  const handleChange = (event) => {
    setSelected(event.target.value);
    props.getMovies();
  };
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
            <FontAwesomeIcon className={styles.filter} icon={faFilter} />
            <span>Filters</span>
          </div>
          <div className={styles.div_top}>
            <ul className={styles.ul_top}>
              <li>
                <NavLink className={styles.popular_link} to="/">
                  <button onClick={() => popularHandler()}>Popular</button>
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.popular_link} to="/">
                  <select value={selected} onChange={handleChange}>
                    <option value="Genres" disabled>
                      Genres
                    </option>
                    <option value="Action">Action</option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                  </select>
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
