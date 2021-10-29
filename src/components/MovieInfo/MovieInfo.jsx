import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleRoot } from "radium";
import styles from "./MovieInfo.module.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function MovieInfo(props) {
  /*   const baseUrl = "https://image.tmdb.org/t/p/w500/"; */
  const [movieDetails, setMovieDetails] = useState([]);
  const params = useParams();
  const sample =
    "https://m.media-amazon.com/images/M/MV5BOTg4MGFlZGQtNjgzOS00YzU5LWEzNTEtYzJhMmQyZmI0MzFjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg";

  const movieInfofullscreen = {
    display: "flex",
    justifyContent: "center",
    background: `linear-gradient(180deg, rgba(6,13,23,0) 20%, rgba(6,13,23,1) 24%),linear-gradient(90deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),linear-gradient(270deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),url(${sample}) no-repeat center center / cover fixed`,
    "@media (max-width: 1730px)": {
      background: `linear-gradient(180deg, rgba(6,13,23,0) 20%, rgba(6,13,23,1) 32em),linear-gradient(90deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),linear-gradient(270deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),url(${sample}) no-repeat center center / cover fixed`,
    },
  };

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=715369ad83702bbb01d37884acb031ed&language=en-US`;
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        setMovieDetails(resp.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <React.Fragment>
      <StyleRoot>
        <div style={movieInfofullscreen}>
          <div className={styles.movieInfo_div}> </div>
          <div className={styles.movieInfo_container}>
            <div className={styles.movieInfo_img}></div>
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
