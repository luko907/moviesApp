import React, { useEffect, useState } from "react";
import { StyleRoot } from "radium";
import styles from "./MovieInfo.module.css";
import { connect } from "react-redux";
import backgroundd from "../../img/back.png";
import { useParams } from "react-router-dom";

function MovieInfo(props) {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  /* console.log(params); */

  const movieInfofullscreen = {
    display: "flex",
    justifyContent: "center",
    background: `linear-gradient(180deg, rgba(6, 13, 23, 0) 61%, rgba(6, 13, 23, 1) 100%), linear-gradient(90deg, rgba(6, 13, 23, 0) 74%, rgba(6, 13, 23, 1) 99%),linear-gradient(270deg, rgba(6, 13, 23, 0) 74%, rgba(6, 13, 23, 1) 99%), url(${movieDetails.Poster}) no-repeat center center / cover fixed`,
    height: "39vw",
    "@media (max-width: 1200px)": {
      background: ` url(${movieDetails.Poster}) no-repeat center center / cover fixed`,
    },
    "@media (max-width: 700px)": {
      height: "48vw",
    },
    "@media (max-width: 500px)": {
      height: "78vw",
    },
  };

  useEffect(() => {
    document.body.style.background = "#060d17";
    fetch(`process.env.REACT_APP_IMBD_MOVIEDETAILS=${params.id}`)
      .then((response) => response.json())
      .then((response) => {
        setMovieDetails(response);
      });
    return () => {
      document.body.style.background = `url(${backgroundd}) no-repeat center center /cover fixed`;
    };
  }, [params.id]);
  return (
    <React.Fragment>
      <StyleRoot>
        <div style={movieInfofullscreen}>
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
      </StyleRoot>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  moviesLoaded: state.moviesLoaded,
});

export default connect(mapStateToProps, null)(MovieInfo);
