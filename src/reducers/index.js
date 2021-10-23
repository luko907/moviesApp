const initialState = {
  visibilityFilter: "SHOW_ALL",
  todos: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER": {
      return Object.assign({}, state, {
        visibilityFilter: action.filter,
      });
    }
    case "ADD_TODO": {
      return Object.assign({}, state, {
        todos: state.todos.concat({
          id: action.id,
          text: action.text,
          completed: false,
        }),
      });
    }

    default:
      return state;
  }
}
export default appReducer;
