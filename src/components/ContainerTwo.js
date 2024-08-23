import "./ContainerTwo.css";
import Blog from "./Blog";
function ContainerTwo() {
  return (
    <div class="bag">
      <h1 class="clr">
        An enterprise template to ramp
        <br /> up your company website
      </h1>

      <div class="one">
        <h3>
          “Buyer buzz partner network disruptive non-disclosure agreement
          business”
        </h3>
        <div className="author-name">
          <img src="./images/author3.png" alt="author" />
          <p>Albus Dumbledore</p>
          <span>Manager @ Howarts</span>
        </div>
      </div>
      <div class="two">
        <h3>
          “Learning curve infrastructure value proposition advisor strategy user
          experience hypotheses investor.”
        </h3>
        <div className="author-name">
          <img src="./images/author2.png" alt="author" />

          <p>Severus Snape</p>
          <span>Manager @ Slytherin</span>
        </div>
      </div>
      <div class="three">
        <h3>
          “Release facebook responsive web design business model canvas seed
          money monetization.”
        </h3>
        <div className="author-name">
          <img src="./images/author1.png" alt="author" />
          <p>Harry Potter</p>
          <span>Manager @ Howarts</span>
        </div>
      </div>
      <img class="customer" src="./images/customer.png" alt="Customer" />

      <div class="sides">
        <div class="side1">
          <h3>
            We connect our customers
            <br /> with the best, and help them <br />
            keep up-and stay open.
          </h3>
        </div>
        <div class="side2">
          <div class="data">
            <p class="a">We connect our customers with the best? </p>
          </div>
          <div class="data">
            <p class="a">Android research & development rockstar?</p>
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
}

export default ContainerTwo;
