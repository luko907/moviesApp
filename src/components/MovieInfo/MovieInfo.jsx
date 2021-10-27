import React, { useEffect } from "react";
import styles from "./MovieInfo.module.css";
import { connect } from "react-redux";

function MovieInfo(props) {
  /*   useEffect(() => {
   document.querySelector(".NavBar_header__2ZPPt").style.background =
      "#3f3f3f"; 
    document.body.style.width = "auto";
    document.body.style.background = "black";
   document.body.style.background =
      "url('https://image.tmdb.org/t/p/w500/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg') no-repeat center center /cover fixed";  
    return () => {
      document.body.style.background = `url(${background}) no-repeat center center fixed`;
    };
  }, []); */
  return (
    <React.Fragment>
      <div className={styles.movieInfo_fullscreen}>
        <img
          src="https://image.tmdb.org/t/p/w500/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg"
          alt=""
        />
        <div className={styles.movieInfo_container}>
          <div className={styles.movieInfo_img}>
            {/*   <img
              src="https://image.tmdb.org/t/p/w500/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg"
              alt=""
            /> */}
          </div>
          <div className={styles.description_container}>
            <div className={styles.description}>
              <span className={styles.title}>Vaquero loco</span>
              <span className={styles.year}>2000</span>
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
