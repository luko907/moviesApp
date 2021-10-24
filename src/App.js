import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Movies from "./components/Movies/Movies.jsx";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies" component={Movies} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  moviesL: state.moviesLoaded,
});

export default connect(mapStateToProps, null)(App);
