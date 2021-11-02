import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StyleRoot } from "radium";
import styles from "./MovieInfo.module.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import data from "../../data/popular";
import popcorn from "../../img/popcorn.png";
import imdb from "../../img/imdb.png";
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
    "@media (max-width: 1000px)": {
      background: `linear-gradient(180deg, rgba(6,13,23,0) 30%, rgba(6,13,23,1) 20em),linear-gradient(90deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),linear-gradient(270deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),url(${flag}) no-repeat center center / cover fixed`,
      minHeight: "80vh",
    },
    "@media (max-width: 550px)": {
      background: `linear-gradient(180deg, rgba(6,13,23,0) 30%, rgba(6,13,23,1) 20em),linear-gradient(90deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),linear-gradient(270deg, rgba(6,13,23,0) 93%, rgba(6,13,23,0.6320903361344538) 98%),url(${info.Poster}) no-repeat center center / cover fixed`,
    },
  };

  useEffect(() => {
    const url1 = `https://api.themoviedb.org/3/movie/${params.id}?api_key=715369ad83702bbb01d37884acb031ed&language=en-US`;
    const url2 = `https://www.omdbapi.com/?apikey=2b9c4287&i=${movieDetails.imdb_id}`;
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
    const navBarStyles = setInterval(function () {
      if (window.matchMedia("(max-width: 700px)").matches && info.Title) {
        document.body.querySelector("header").style.flexDirection = "column";
      } else if (
        !window.matchMedia("(max-width: 700px)").matches &&
        info.Title
      ) {
        document.body.querySelector("header").style.flexDirection = "row";
      }
    }, 100);

    setTimeout(function () {
      setIsLoading(false);
    }, Math.random() * (600 - 400) + 400);
    return () => {
      document.body.querySelector("header").style.flexDirection = "column";
      clearInterval(navBarStyles);
    };
  }, [
    params.id,
    movieDetails.length,
    movieDetails.id,
    movieDetails.poster_path,
    movieDetails.imdb_id,
    info.Title,
  ]);

  return (
    <React.Fragment>
      {isLoading && flag === null && info.Runtime === undefined ? (
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
                {info.Rated && (
                  <div className={styles.rates_container}>
                    {info.Rated !== "N/A" && (
                      <div className={styles.ageRated}>
                        <span>{info.Rated}</span>
                      </div>
                    )}
                    {info.Metascore !== "N/A" && (
                      <div className={styles.rating}>
                        <Link to="#" title="Audience Rating">
                          <img src={popcorn} alt="" />
                        </Link>
                        <span>{info.Metascore}%</span>
                      </div>
                    )}
                    {info.Ratings && info.Ratings.length !== 0 && (
                      <div className={styles.IMDbRate}>
                        <Link to="#" title="IMDb Rating">
                          <img src={imdb} alt="" />
                        </Link>
                        <span>
                          {info.Ratings &&
                            info.Ratings.length !== 0 &&
                            info.Ratings[0].Value.slice(0, -3)}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                <div className={styles.year_time_genre_container}>
                  <div className={styles.info_year_info_runtime_container}>
                    <div className={styles.info_year}>
                      <span> {info.Year !== "N/A" && info.Year}</span>
                    </div>
                    <div className={styles.info_runtime}>
                      <span>{info.Runtime !== "N/A" && info.Runtime}</span>
                    </div>
                  </div>
                  <div className={styles.movieDetails_genres}>
                    <span>
                      {movieDetails.genres &&
                        movieDetails.genres.length > 0 &&
                        movieDetails.genres.map((gen) => gen.name).join(", ")}
                    </span>
                  </div>
                </div>
                <div className={styles.lineSep}></div>
                <div className={styles.plot}>
                  <p>{movieDetails.overview}</p>
                </div>
                {info.Rated && (
                  <div className={styles.director_actors_studios_container}>
                    <div className={styles.director_actors_studios_title}>
                      <span className={styles.director}>
                        {info.Director !== "N/A" && "Director"}
                      </span>
                      <span className={styles.actors}>
                        {info.Actors !== "N/A" && "Actors"}
                      </span>
                      <span className={styles.studios}>
                        {movieDetails.production_companies.length !== 0 &&
                          movieDetails.production_companies[0].name.length !==
                            0 &&
                          "Studios"}
                      </span>
                    </div>
                    <div className={styles.director_actors_studios_names}>
                      <span className={styles.director_name}>
                        {info.Director !== "N/A" && info.Director}
                      </span>
                      <span className={styles.actors_names}>
                        {info.Actors !== "N/A" && info.Actors}
                      </span>
                      <div className={styles.studios_name_img_container}>
                        <div className={styles.studios_name_span}>
                          <span className={styles.studios_name}>
                            {movieDetails.production_companies.length !== 0 &&
                              movieDetails.production_companies[0].name
                                .length !== 0 &&
                              movieDetails.production_companies[0].name}
                          </span>
                        </div>
                      </div>
                    </div>
                    {movieDetails.production_companies.length !== 0 &&
                      movieDetails.production_companies[0].logo_path !== 0 && (
                        <div className={styles.studios_img}>
                          <img
                            src={
                              baseUrl +
                              movieDetails.production_companies[0].logo_path
                            }
                            alt=""
                          />
                        </div>
                      )}
                  </div>
                )}
                {/* ///SEGUIR ACA */}
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
