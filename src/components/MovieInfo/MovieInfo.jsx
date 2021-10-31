import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { StyleRoot } from "radium";
import styles from "./MovieInfo.module.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import data from "../../data/popular";
import "../../App.css";

function MovieInfo(props) {
  const [movieDetails, setMovieDetails] = useState([]);
  const [flag, setFlag] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const movieInfofullscreen = {
    display: "flex",
    justifyContent: "center",
    background: `linear-gradient(180deg, rgba(6,13,23,0) 40%, rgba(6,13,23,1) 48%),linear-gradient(90deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),linear-gradient(270deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),url(${flag}) no-repeat center center / cover fixed`,
    minHeight: "94vh",

    "@media (max-width: 1730px)": {
      background: `linear-gradient(180deg, rgba(6,13,23,0) 20%, rgba(6,13,23,1) 32em),linear-gradient(90deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),linear-gradient(270deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),url(${flag}) no-repeat center center / cover fixed`,
      minHeight: "84vh",
    },
    "@media (max-width: 550px)": {
      background: `linear-gradient(180deg, rgba(6,13,23,0) 30%, rgba(6,13,23,1) 20em),linear-gradient(90deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),linear-gradient(270deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),url(${flag}) no-repeat center center / cover fixed`,
      minHeight: "87vh",
    },
  };
  ///////////////////////

  useEffect(() => {
    const url = `process.env.REACT_APP_API_TMDB_BASE_URL/${params.id}?api_key=process.env.REACT_APP_API_TMDB_API_KEY&language=en-US`;
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        setMovieDetails(resp.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    const findImg = () => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === movieDetails.id) {
          setFlag(data[i].backDrop);

          break;
        } else {
          setFlag(baseUrl + movieDetails.poster_path);
        }
      }
    };
    fetchData();
    movieDetails.length !== 0 && findImg();
    setTimeout(function () {
      setIsLoading(false);
    }, Math.random() * (600 - 400) + 400);
  }, [
    params.id,
    movieDetails.length,
    movieDetails.id,
    movieDetails.poster_path,
  ]);

  return (
    <React.Fragment>
      {flag === null && isLoading ? (
        <div className="loader"></div>
      ) : (
        <StyleRoot>
          <div style={movieInfofullscreen}>
            <div className={styles.movieInfo_container}>
              <div className={styles.movieInfo_img_div}>
                <img
                  src={baseUrl + movieDetails.poster_path}
                  className={styles.movieInfo_img}
                  alt=""
                />
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
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  moviesLoaded: state.moviesLoaded,
});

export default connect(mapStateToProps, null)(MovieInfo);
