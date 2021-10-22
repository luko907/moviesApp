import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Movies from "./components/Movies/Movies.jsx";
import { Switch, Route } from "react-router";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/movies" component={Movies} />
      </Switch>
    </React.Fragment>
  );
}
export default App;
