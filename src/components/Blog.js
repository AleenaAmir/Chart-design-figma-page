import React, { Fragment } from "react";
import "./blog.css";
function Blog() {
  return (
    <>
      <Fragment>
        <div className="lines">
          <h4>Our Blog</h4>
          <h1>
            Value proposition accelerator product
            <br /> management venture
          </h1>
        </div>
        <section class="box">
          <div class="leftbox">
            <img class="set" src="./images/cool.png" alt="logo" />
            <h3>Category</h3>
            <p>Pitch termsheet backing validation focus release.</p>
            <img src="./images/author1.png" alt="author" />
          </div>
          <div class="middlebox">
            <img class="set" src="./images/girl.png" alt="logo" />
            <h3> Category </h3>
            <p>
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.
            </p>
            <img src="./images/author2.png" alt="author" />
          </div>
          <div class="rightbox">
            <img class="set" src="./images/thrash.png" alt="logo" />
            <h3>Category</h3>
            <p>
              Beta prototype sales iPad gen-z marketing network effects value
              proposition
            </p>

            <img src="./images/author3.png" alt="author" />
          </div>
        </section>
        <button className="load">Load More</button>
        <div class="packet">
          <h1 class="packet-heading">
            An enterprise template to ramp up your company website
          </h1>
          <input
            class="email-input"
            type="text"
            placeholder="Your Email Address"
          ></input>
          <button class="sbmt">Start now</button>
        </div>
      </Fragment>
    </>
  );
}

export default Blog;
