const initialState = {
  moviesLoaded: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES": {
      return { ...state, moviesLoaded: action.payload };
    }

    default:
      return state;
  }
}
export default appReducer;
