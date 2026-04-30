function HeroCarousel() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide hero-carousel"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div className="carousel-inner">
{/* Slide 1 */}
<div className="carousel-item active hero-black-bg">
  <div className="container">
    <div className="row align-items-center py-5">
      <div className="col-lg-6 text-white">
        <h1 className="fw-bold">Sasta eCommerce</h1>
        <h3>The Perfect Website for Online Shopping</h3>
        <p>
          Discover fashion, electronics, and lifestyle products in one place.
        </p>
      </div>
      <div className="col-lg-6 text-center">
        <img
          src="https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/64ec2844a5674215dbecbc80/61acyx9devl-800x800.jpg"
          className="img-fluid hero-img"
          style={{ height: "600px" }}
          alt="Online Shopping"
        />
      </div>
    </div>
  </div>
</div>
        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="container">
            <div className="row align-items-center py-5">
              <div className="col-lg-6">
                <h1>Premium Quality Products</h1>
                <h3>Best Collection Available</h3>
                <p>
                  Elevate your lifestyle with top trending products at great prices.
                </p>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                  className="img-fluid hero-img"
                  alt="Smart Watch"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="container">
            <div className="row align-items-center py-5">
              <div className="col-lg-6">
                <h1>Best Prices Guaranteed</h1>
                <h3>Shop Smart. Shop Easy.</h3>
                <p>
                  Experience smooth checkout and fast delivery with Sasta Shopping.
                </p>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
                  className="img-fluid hero-img"
                  alt="Shopping"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default HeroCarousel;
