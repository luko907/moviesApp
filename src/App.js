import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <Home />
      </div>
    </React.Fragment>
  );
}
export default App;
