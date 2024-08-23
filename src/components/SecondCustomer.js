import "./SecondCustomer.css";
import PieChart from "../PieChart";
function SecondCustomer() {
  return (
    <div class="alpha">
      <div>
        <div class="abc">
          <h3>
            We connect our customers
            <br /> with the best, and help them <br />
            keep up-and stay open.
          </h3>
          <div class="data">
            {/* <img src="./images/leaf.jpg" alt="leaf" /> */}
            <p className="para">We connect our customers with the best. </p>
          </div>
          <div class="data">
            {/* <img src="./images/eye.webp" alt="eye" /> */}
            <p className="para">Advisor success customer launch party.</p>
          </div>
          <div class="data">
            {/* <img src="./images/sun.webp" alt="sun" /> */}
            <p className="para">Business-to-consumer long tail.</p>
          </div>
        </div>
      </div>
      <div class="xyz">
        <img src="./images/girl.png" alt="customer" />
        <div className="pie-on-pic">
          <div className="dounet">
            <PieChart />
          </div>
          <ul>
            <li className="pie-list"> 35% - Agile Development</li>
            <li className="pie-list">30% - Investor bandwidth</li>
            <li className="pie-list">35% - A/B testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SecondCustomer;
