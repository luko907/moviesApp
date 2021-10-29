import axios from "axios";

export function getMovies() {
  const url = `process.env.REACT_APP_GETPOPULAR`;
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
  const url = `process.env.REACT_APP_GETACTUAL${title}`;
  return function (dispatch) {
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        dispatch({ type: "GET_ACTUAL", payload: resp.data });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  };
}
