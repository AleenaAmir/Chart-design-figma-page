import React, { Fragment } from "react";
import ExploreButton from "./ExplorButton";

import "./Services.css";

function Serivces() {
  return (
    <Fragment>
      <div className="lines">
        <h4>Our Serivces</h4>
        <h1>
          Handshake infographic mass market
          <br /> crowdfunding iteration.
        </h1>
      </div>
      <section class="box">
        <div class="leftbox">
          <img src="./images/cool.png" alt="logo" />
          <h3>Cool feature title</h3>
          <p>
            Learning curve network effects
            <br /> return on investment.
          </p>
          <ExploreButton />
        </div>
        <div class="middlebox">
          <img src="./images/cool1.png" alt="logo" />
          <h3> Even Cooler feature </h3>
          <p>
            Learning curve network effects
            <br /> return on investment.
          </p>
          <ExploreButton />
        </div>
        <div class="rightbox">
          <img src="./images/cool3.png" alt="logo" />

          <h3>Cool feature title</h3>
          <p>
            Learning curve network effects
            <br /> return on investment.
          </p>
          <ExploreButton />
        </div>
      </section>
    </Fragment>
  );
}

export default Serivces;
