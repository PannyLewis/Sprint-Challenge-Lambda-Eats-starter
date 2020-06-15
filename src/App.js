import React from "react";
import "./App.css";
import Pizza from "./components/Pizza";
import { Switch, Link, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <div className="App">
        <h1 className="restaurant-name">Lambda Eats</h1>

        <nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/pizza">Order Pizza</Link>
          </div>
        </nav>
      </div>
      <Route path="/">
        <Home />
      </Route>

      <Route path="/pizza">
        <Pizza />
      </Route>
    </>
  );
};
export default App;
