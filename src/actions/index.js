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
        resp.data.results && resp.data.results.length < 1
          ? alert("Please, type again")
          : dispatch({
              type: "GET_ACTUAL",
              payload: resp.data,
            });
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
