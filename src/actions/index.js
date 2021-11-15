import axios from "axios";
export function getMovies() {
  const url = process.env.REACT_APP_GETPOPULAR;
  return function (dispatch) {
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        dispatch({ type: "GET_MOVIES", payload: resp.data });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  };
}

export function getActual(title) {
  const url = `${process.env.REACT_APP_GETACTUAL}${title}`;
  return function (dispatch) {
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const respFinal = resp.data.results.filter(
          (v, i, a) =>
            a.findIndex((t) => t.id === v.id) === i &&
            v.poster_path !== null &&
            v.backdrop_path !== null &&
            v.overview !== null &&
            v.title !== null &&
            v.release_date !== null &&
            v.vote_count > 20
        );
        respFinal && respFinal.length > 0
          ? dispatch({
              type: "GET_ACTUAL",
              payload: respFinal,
            })
          : alert("Please, type another title");
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  };
}

export function getGenre(id) {
  const response = [];
  for (let i = 1; i <= 40; i++) {
    response.push(
      fetch(
        `${process.env.REACT_APP_GETGENRE}${id}&include_video=false&page=${i}&with_watch_monetization_types=flatrate`
      ).then((value) => value.json())
    );
  }
  return function (dispatch) {
    Promise.all(response)
      .then((value) => {
        dispatch({ type: "GET_GENRE", payload: value });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getReset() {
  return function (dispatch) {
    dispatch({ type: "RESET" });
  };
}

export function yearFilter(year) {
  return function (dispatch) {
    dispatch({ type: "YEAR_FILTER", payload: year });
  };
}
