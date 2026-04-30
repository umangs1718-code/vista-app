import React from "react";
import "../css/Custom.css";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="bg-success py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h1>About Us</h1>
              <p>
                Welcome to  Sasta Shopping, where your online shopping experience
                meets unparalleled convenience and style. We are dedicated to
                bringing you curated high-quality products and exceptional
                customer service.
              </p>
            </div>
            <div className="col-md-4">
              {/* Online About Image */}
              <img
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
                alt="Online Shopping"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-5">
        <div className="row text-center mb-4">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Our Services</h1>
            <p>
              We enhance your shopping experience with smooth transactions,
              quick delivery and responsive support.
            </p>
          </div>
        </div>

        <div className="row text-center">
          {[
            { icon: "fa-truck", title: "Delivery Services" },
            { icon: "fa-exchange-alt", title: "Shipping & Return" },
            { icon: "fa-percent", title: "Promotion" },
            { icon: "fa-user", title: "24 Hours Service" },
          ].map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3 pb-4">
              <div className="h-100 py-5 shadow rounded">
                <div className="h1 text-success">
                  <i className={`fa ${item.icon}`}></i>
                </div>
                <h2 className="h5 mt-3">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="h1 mb-4">Our Brands</h1>
          <div className="row">

            {/* Nike */}
            <div className="col-6 col-md-3 p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                alt="Nike"
                className="img-fluid"
                style={{ maxHeight: "80px" }}
              />
            </div>

            {/* Adidas */}
            <div className="col-6 col-md-3 p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
                alt="Adidas"
                className="img-fluid"
                style={{ maxHeight: "80px" }}
              />
            </div>

            
{/* Lacoste */}
<div className="col-6 col-md-3 p-4">
  <img
    src="https://www.pngarts.com/files/8/Lacoste-Logo-Transparent-Image.png"
    alt="Lacoste"
    className="img-fluid"
    style={{ maxHeight: "80px" }}
  />
</div>
{/* Hermès */}
<div className="col-6 col-md-3 p-4">
  <img
    src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Herm%C3%A8s.svg/1920px-Herm%C3%A8s.svg.png"
    alt="Hermès"
    className="img-fluid"
    style={{ maxHeight: "80px" }}
  />
</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
