const initialState = {
  moviesLoaded: [],
  moviesActual: [],
  moviesYearFilter: [],
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
            v.backdrop_path !== null &&
            v.overview !== null &&
            v.title !== null &&
            v.release_date !== null
        ),
      };
    }
    case "GET_ACTUAL": {
      return {
        ...state,
        moviesActual: action.payload,
      };
    }
    case "GET_GENRE": {
      return {
        ...state,
        moviesLoaded: action.payload
          .map((item) => item.results)
          .flat(1)
          .filter(
            (v, i, a) =>
              a.findIndex((t) => t.id === v.id) === i &&
              v.poster_path !== null &&
              v.backdrop_path !== null &&
              v.overview !== null &&
              v.title !== null &&
              v.release_date !== null &&
              v.vote_count > 50
          )
          .sort((a, b) => 0.5 - Math.random()),
      };
    }
    case "YEAR_FILTER": {
      return {
        ...state,
        moviesYearFilter: action.payload,
      };
    }
    case "RESET": {
      return {
        ...state,
        moviesActual: [],
        moviesYearFilter: [],
      };
    }
    default:
      return state;
  }
}
export default appReducer;
