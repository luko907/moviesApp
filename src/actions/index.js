export function getMovies(title) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=2b9c4287&s=${title}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}
