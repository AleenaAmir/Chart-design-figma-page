import React from "react";
import PieChart from "../PieChart";
import BarCircle from "./BarCricle";
import BarChart from "./BarGraph";
import Graph from "./Graph";
import "./Header.css";
import MySlider from "./MySlider";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <nav>
          <a className="logo-txt" href="/">
            <img src="./images/logo.png" width="50" height="50" alt="logo" />
            Boldo
          </a>
          <button type="submit" className=" login btn-lg">
            Log in
          </button>
          <a id="nav" href="/product">
            About
          </a>
          <a id="nav" href="/service">
            Services
          </a>
          <a id="nav" href="/about">
            Product
          </a>
        </nav>
        <div className="main ">
          <div>
            <h1 className="heading">
              Save time by building fast with Boldo Template
            </h1>
            <p className="para">
              Funding handshake buyer business-to-business metrics iPad
              partnership. <br />
              First mover advantage innovator success deployment non-disclosure.
            </p>
            <button type="button" className="temp btn-lg" id="bton">
              Buy Template
            </button>
            <button type="button" className="exp btn-lg" id="bton">
              Explore
            </button>
          </div>
        </div>
        <div class="box1">
          <BarCircle />
          <Graph />
        </div>
        <div class="box2">
          <div className="p-chart">
            <BarCircle />
            <PieChart />
          </div>
        </div>
        <div class="box3">
          <BarCircle />
          <BarChart />
        </div>
      </div>
      <div className="slide">
        <MySlider />
      </div>
    </div>
  );
};

export default Header;
