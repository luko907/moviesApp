const initialState = {
  moviesLoaded: [],
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

    default:
      return state;
  }
}
export default appReducer;
