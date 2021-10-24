var arr = ["nemo", "lego"];

/* export function getMovies(title) {
  return function (dispatch) {
    return fetch(
      `http://www.omdbapi.com/?apikey=2b9c4287&s=${title}&type=movie`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
} */
export function getMovies() {
  return function (dispatch) {
    for (let i = 0; i < arr.length; i++) {
      fetch(`http://www.omdbapi.com/?apikey=2b9c4287&s=${arr[i]}&type=movie`)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    }
  };
}
