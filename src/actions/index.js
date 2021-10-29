import axios from "axios";
/* dispatch({ type: "GET_MOVIES", payload: value }); */

export function getMovies() {
  const url = `process.env.REACT_APP_GETPOPULAR`;
  return function (dispatch) {
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        dispatch({ type: "GET_MOVIES", payload: resp.data });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  };
}

export function getActual(title) {
  const url = `process.env.REACT_APP_GETACTUAL${title}`;
  return function (dispatch) {
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        dispatch({ type: "GET_ACTUAL", payload: resp.data });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  };
}

/* export function getActual(title) {
  return function (dispatch) {
    return fetch(
      `https://www.omdbapi.com/?apikey=2b9c4287&s=${title}&type=movie`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_ACTUAL", payload: json });
      })
      .catch((err) => {
        alert("Please, type again");
      });
  };
} */
/* export function getMovies() {
  return function (dispatch) {
    Promise.all([
      fetch(
        "https://www.omdbapi.com/?apikey=2b9c4287&s=toy+story&type=movie"
      ).then((value) => value.json()),
      fetch("https://www.omdbapi.com/?apikey=2b9c4287&s=lego&type=movie").then(
        (value) => value.json()
      ),
      fetch(
        "https://www.omdbapi.com/?apikey=2b9c4287&s=cry+macho&type=movie"
      ).then((value) => value.json()),
      fetch("https://www.omdbapi.com/?apikey=2b9c4287&s=cars&type=movie").then(
        (value) => value.json()
      ),
      fetch(
        "https://www.omdbapi.com/?apikey=2b9c4287&s=spider+man&type=movie"
      ).then((value) => value.json()),
      fetch(
        "https://www.omdbapi.com/?apikey=2b9c4287&s=lion+king&type=movie"
      ).then((value) => value.json()),
      fetch("https://www.omdbapi.com/?apikey=2b9c4287&s=vivo&type=movie").then(
        (value) => value.json()
      ),
      fetch(
        "https://www.omdbapi.com/?apikey=2b9c4287&s=spirit&type=movie"
      ).then((value) => value.json()),
    ])
      .then((value) => {
        dispatch({ type: "GET_MOVIES", payload: value });
      })
      .catch((err) => {
        console.log(err);
      });
  };
} */

/* const arr = [];
namess.forEach((mov, i) =>
arr.push(
  fetch(
    `https://www.omdbapi.com/?apikey=2b9c4287&s=${namess[i]}&type=movie`
    ).then((value) => value.json())
    )
    );
    export function getMovies() {
      return function (dispatch) {
        Promise.all(arr)
        .then((value) => {
          dispatch({ type: "GET_MOVIES", payload: value });
        })
        .catch((err) => {
          console.log(err);
        });
      };
    } */
/* const namess = [
  "toy story",
  "lego",
  "cry macho",
  "spider man",
  "vivo",
  "spirit",
  "fast and furious",
];

const arrMovies = namess.map((mov, i) =>
  fetch(
    `https://www.omdbapi.com/?apikey=2b9c4287&s=${namess[i]}&type=movie`
  ).then((value) => value.json())
);
export function getMovies() {
  return function (dispatch) {
    Promise.all(arrMovies)
      .then((value) => {
        dispatch({ type: "GET_MOVIES", payload: value });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
 */
