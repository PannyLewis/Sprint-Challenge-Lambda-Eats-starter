import React from "react";
import Pizza from "./Pizza";
import imgPizza from "./imgPizza.png";

function Home() {
  return (
    <div className="home-wrapper">
      <img className="home-image" src={imgPizza} alt="pizza" />
    </div>
  );
}

export default Home;
