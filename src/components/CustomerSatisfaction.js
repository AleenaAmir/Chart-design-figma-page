import "./CustomerSatisfaction.css";
import BarChart from "./BarGraph";

function CustomerSatisfaction() {
  return (
    <div class="parent">
      <div>
        <div class="child1">
          <img class="cstmr" src="./images/boy.png" alt="customer" />
          <div className="bar-on-pic">
            <div className="histogram-chart">
              <BarChart />
            </div>

            <h3 className="bar-h">30%</h3>
            <p className="bar-p">More income in June</p>
          </div>
        </div>
      </div>
      <div class="child2">
        <h3>
          We connect our customers
          <br /> with the best, and help them
          <br /> keep up-and stay open.
        </h3>

        <p>We connect our customers with the best.</p>
        <p>Advisor success customer launch party.</p>
        <p>Business-to-consumer long tail.</p>
        <button className="start-now">Start now</button>
      </div>
    </div>
  );
}

export default CustomerSatisfaction;
