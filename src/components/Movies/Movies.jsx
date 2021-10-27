import React, { useEffect } from "react";
import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { getMovies } from "../../actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import background from "../../img/back.png";

function Movies(props) {
  useEffect(() => {
    /*    document.querySelector(".NavBar_header__2ZPPt").style.background =
      "#3f3f3f"; */

    document.body.style.background = "rgb(6 13 23)";
    /* document.body.style.background =
      "url('https://image.tmdb.org/t/p/w500/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg') no-repeat center center /cover fixed";  */
    return () => {
      document.body.style.background = `url(${background}) no-repeat center center /cover fixed`;
    };
  }, []);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.div_suggestion}>
          <span>Sort By</span>
        </div>
        <div className={styles.div_hot_top}>
          <ul className={styles.ul_hot_top}>
            <li>
              <NavLink className={styles.popular_link} to="/movies">
                <button onClick={() => props.getMovies()}>Popular</button>
              </NavLink>
            </li>
            {/*    <li>
              <button>Favorites</button>
            </li> */}
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
