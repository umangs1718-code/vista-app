import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h4 className="text-success"> Sasta Shop</h4>
            <p>123 Malviya Nagar, Jaipur Rajasthan</p>
            <p>010-020-0340</p>
            <p>info@Sasta.com</p>
          </div>

          <div className="col-md-4">
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li>Luxury</li>
              <li>Sport Wear</li>
              <li>Men's Shoes</li>
              <li>Women's Shoes</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>

        <div className="text-center mt-4 border-top pt-3 small-text">
          © 2023 SASTA | Designed by Umang Jain
      </div>
      </div>
    </footer>
  );
};

export default Footer;
