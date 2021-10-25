const initialState = {
  moviesLoaded: [],
  /*   actualMovies: [], */
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES": {
      return {
        ...state,
        moviesLoaded: action.payload
          .map((item) => item.Search)
          .flat(1)
          .filter(
            (v, i, a) =>
              a.findIndex((t) => t.imdbID === v.imdbID) === i &&
              v.Poster !== "N/A" &&
              v.Year > 2015
          ),
      };
    }
    case "GET_ACTUAL": {
      return {
        ...state,
        moviesLoaded: action.payload.Search.filter(
          (v, i, a) =>
            a.findIndex((t) => t.imdbID === v.imdbID) === i &&
            v.Poster !== "N/A"
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
