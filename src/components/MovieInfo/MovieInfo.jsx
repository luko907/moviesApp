import React, { useEffect } from "react";
import styles from "./MovieInfo.module.css";
import { connect } from "react-redux";
import backgroundd from "../../img/back.png";

function MovieInfo(props) {
  useEffect(() => {
    document.querySelector(".NavBar_header__2ZPPt").style.marginBottom = "0";
    document.body.style.background = "#060d17";
    return () => {
      document.body.style.background = `url(${backgroundd}) no-repeat center center /cover fixed`;
      document.querySelector(".NavBar_header__2ZPPt").style.marginBottom =
        "5rem";
    };
  }, []);
  return (
    <React.Fragment>
      <div className={styles.movieInfo_fullscreen}>
        {/*    <img
          src="https://image.tmdb.org/t/p/w500/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg"
          alt=""
        /> */}
        <div className={styles.movieInfo_container}>
          <div className={styles.movieInfo_img}>
            {/*   <img
              src="https://image.tmdb.org/t/p/w500/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg"
              alt=""
            /> */}
          </div>
          <div className={styles.description_container}>
            <div className={styles.description}>
              <span className={styles.title}></span>
              <span className={styles.year}></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  moviesLoaded: state.moviesLoaded,
});

export default connect(mapStateToProps, null)(MovieInfo);
