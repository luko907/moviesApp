import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleRoot } from "radium";
import styles from "./MovieInfo.module.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import data from "../../data/popular";
import "../../App.css";

function MovieInfo(props) {
  const [movieDetails, setMovieDetails] = useState([]);
  const [info, setInfo] = useState([]);
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
    const url1 = `process.env.REACT_APP_API_TMDB_BASE_URL/${params.id}?api_key=process.env.REACT_APP_API_TMDB_API_KEY&language=en-US`;
    const url2 = `process.env.REACT_APP_IMBD_MOVIEDETAILS=${movieDetails.imdb_id}`;
    const fetchData = async () => {
      try {
        const resp1 = await axios.get(url1);
        const resp2 = await axios.get(url2);
        setMovieDetails(resp1.data);
        setInfo(resp2.data);
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
    movieDetails.imdb_id,
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
                <div className={styles.title}>
                  <span>{movieDetails.title}</span>
                </div>
                <div className={styles.rates_container}>
                  <div className={styles.ageRated}>
                    <span>{info.Rated}</span>
                  </div>
                  <div className={styles.imbDRate}>
                    <span>IMDb {info.Ratings && info.Ratings[0].Value}</span>
                  </div>
                  <div className={styles.rating}>
                    <span>{info.Ratings && info.Ratings[1].Value}</span>
                  </div>
                </div>
                <div className={styles.year_time_genre_container}>
                  <span>{info.Year}</span>
                  <span>{info.Runtime}</span>
                  <span>
                    {movieDetails.genres &&
                      movieDetails.genres.map((gen) => gen.name).join(" ")}
                  </span>
                </div>
                <div className={styles.plot}>
                  <p>{movieDetails.overview}</p>
                </div>
                <div className={styles.director_studios_container}>
                  <div className={styles.director_container}>
                    <span className={styles.director}>Director</span>
                    <span className={styles.director_name}>
                      Denis Villeneuve
                    </span>
                  </div>
                  <div className={styles.studios_container}>
                    <span className={styles.studios}>Studios</span>
                    <span className={styles.studios_name}>
                      Legendary Pictures
                    </span>
                  </div>
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
