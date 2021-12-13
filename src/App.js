import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import MovieInfo from "./components/MovieInfo/MovieInfo.jsx";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies/:id" component={MovieInfo} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  moviesL: state.moviesLoaded,
  moviesActual: state.moviesActual,
  moviesYearFilter: state.moviesYearFilter,
});

export default connect(mapStateToProps, null)(App);
