const initialState = {
  moviesLoaded: [],
  moviesActual: [],
  movieDetails: [],
  info: [],
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
            v.release_date !== "" &&
            v.release_date !== undefined
        ),
      };
    }
    case "GET_ACTUAL": {
      return {
        ...state,
        moviesActual: action.payload.results.filter(
          (v, i, a) =>
            a.findIndex((t) => t.id === v.id) === i &&
            v.poster_path !== null &&
            v.backdrop_path !== null &&
            v.overview !== null &&
            v.title !== null &&
            v.release_date !== "" &&
            v.release_date !== undefined
        ),
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
              v.release_date !== "" &&
              v.release_date !== undefined
          ),
      };
    }
    case "GET_MOVIESDETAIL": {
      console.log(action.payload);
      return {
        ...state,
        movieDetails: action.payload,
      };
    }
    case "GET_INFO": {
      return {
        ...state,
        info: action.payload,
      };
    }
    case "RESET": {
      return {
        ...state,
        moviesActual: [],
      };
    }
    default:
      return state;
  }
}
export default appReducer;
