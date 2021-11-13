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
  for (let i = 1; i <= Math.floor(Math.random() * (40 - 20)) + 20; i++) {
    response.push(
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=715369ad83702bbb01d37884acb031ed&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${id}&include_video=false&page=${i}&with_watch_monetization_types=flatrate`
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
