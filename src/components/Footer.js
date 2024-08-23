import "./Footer.css";
function Footer() {
  return (
    <div class="footer-data">
      <div class="box-f">
        <h3 style={{ font: "Open Sans" }}>Boldo</h3>
        <p>
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p>All rights reserved.</p>
      </div>
      <div class="box-f">
        <h4 class="f-h4">Landings</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
        </ul>
      </div>
      <div class="box-f">
        <h4 class="f-h4">Company</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Careers</a>
            <button class="hire">Hiring</button>
          </li>
          <li>
            <a href="/">Serivces</a>
          </li>
        </ul>
      </div>
      <div class="box-f">
        <h4 class="f-h4">Resources</h4>
        <ul>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
