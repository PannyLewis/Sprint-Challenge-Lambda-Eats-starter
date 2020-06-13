import React from "react";
import "./App.css";
import Pizza from "./components/Pizza";
import { Switch, Link, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Route exact path="/">
        <Link to="/pizza">Pizza</Link>
        <div className="App">
          <h1>Lambda Eats</h1>
        </div>
      </Route>
      <Route path="/form">
        <Pizza />
      </Route>
    </>
  );
};
export default App;
