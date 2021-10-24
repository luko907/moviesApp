const initialState = {
  moviesLoaded: [],
  actualMovies: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES": {
      return {
        ...state,
        moviesLoaded: state.moviesLoaded
          .concat(action.payload.Search)
          .filter((item) => item.Poster !== "N/A"),
      };
    }
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
        moviesLoaded: action.payload.Search.filter(
          (item) => item.Poster !== "N/A"
        ),
      };
    }
    default:
      return state;
  }
}
export default appReducer; */
