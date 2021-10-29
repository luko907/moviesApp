const initialState = {
  moviesLoaded: [],
  /*   actualMovies: [], */
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES": {
      return {
        ...state,
        moviesLoaded: action.payload.results.filter(
          (v, i, a) =>
            a.findIndex((t) => t.id === v.id) === i &&
            v.poster_path !== null &&
            v.backdrop_path !== null
        ),
      };
    }
    /*     case "GET_MOVIES": {
      return {
        ...state,
        moviesLoaded: action.payload
          .map((item) => item.results)
          .flat(1)
          .filter(
            (v, i, a) =>
              a.findIndex((t) => t.imdbID === v.imdbID) === i &&
              v.Poster !== "N/A" &&
              v.Year > 2015
          ),
      };
    } */
    case "GET_ACTUAL": {
      return {
        ...state,
        moviesLoaded: action.payload.results.filter(
          (v, i, a) =>
            a.findIndex((t) => t.id === v.id) === i &&
            v.poster_path !== null &&
            v.backdrop_path !== null
        ),
      };
    }
    /*  case "REMOVE_LOADED": {
      return {
        ...state,
        moviesLoaded: [],
      };
    } */
    default:
      return state;
  }
}
export default appReducer;

/* function appReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES": {
      return {
        ...state,
        moviesLoaded: action.payload
          .map((item) => item.Search)
          .flat(1)
          .filter(
            (item) =>
              item.Poster !== "N/A" &&
              item.imdbID !== state.moviesLoaded.imdbID &&
              item.Year > 2015
          ),
      };
    }
    case "GET_ACTUAL": {
      return {
        ...state,
        actualMovies: action.payload.Search.filter(
          (item) => item.Poster !== "N/A"
        ),
      };
    }
    default:
      return state;
  }
}
export default appReducer; */

/*  function appReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES": {
      return {
        ...state,
        moviesLoaded: action.payload.Search.filter(
          (item) => item.Poster !== "N/A"
        ),
      };
    }
    default:
      return state;
  }
}
export default appReducer;  */
