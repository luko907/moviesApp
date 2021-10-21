import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="home">
        <Home />
      </div>
    </React.Fragment>
  );
}
export default App;
