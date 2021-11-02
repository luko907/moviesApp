import axios from "axios";

export function getMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=715369ad83702bbb01d37884acb031ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
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
  const url = `https://api.themoviedb.org/3/search/movie?api_key=715369ad83702bbb01d37884acb031ed&query=${title}`;
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
