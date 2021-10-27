import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Movies from "./components/Movies/Movies.jsx";
/* import MovieInfo from "./components/MovieInfo/MovieInfo.jsx"; */
import { Switch, Route } from "react-router";
import { connect } from "react-redux";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/movies" component={Movies} />
        {/*    <Route path="/movies/info" component={MovieInfo} /> */}
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  moviesL: state.moviesLoaded,
});

export default connect(mapStateToProps, null)(App);
