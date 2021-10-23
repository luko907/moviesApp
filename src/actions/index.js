export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=2b9c4287&i=" + id)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
      });
  };
}
