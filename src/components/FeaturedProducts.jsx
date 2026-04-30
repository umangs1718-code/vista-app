import React from "react";
 

function FeaturedProducts() {
  return (
    <section className="featured-section py-5">
      <div className="container text-center">
        <h2 className="section-title">Featured Products</h2>

        <div className="row mt-4">

          {/* Torch Light */}
          <div className="col-md-4">
            <div className="card product-card">
              <img
                src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop"
                className="card-img-top product-img"
                alt="Torch Light"
              />
              <div className="card-body">
                <h5>Torch Light</h5>
                <div className="product-rating">★ ★ ★ ★ ★</div>
                <p className="card-text">
                  Explore our high-performance LED torch — durable, bright,
                  and reliable. Perfect for outdoor adventures and emergencies.
                </p>
                <p className="product-price">$240.00</p>
                <div className="product-reviews">Reviews (24)</div>
              </div>
            </div>
          </div>

          {/* Smart Watch */}
          <div className="col-md-4">
            <div className="card product-card">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
                className="card-img-top product-img"
                alt="Smart Watch"
              />
              <div className="card-body">
                <h5>Smart Watch</h5>
                <div className="product-rating">★ ★ ★ ★ ★</div>
                <p>
                  Discover our advanced smartwatches — sleek design, health
                  tracking, and seamless connectivity for an active lifestyle.
                </p>
                <p className="product-price">$480.00</p>
                <div className="product-reviews">Reviews (48)</div>
              </div>
            </div>
          </div>

          {/* Camera */}
          <div className="col-md-4">
            <div className="card product-card">
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop"
                className="card-img-top product-img"
                alt="Camera"
              />
              <div className="card-body">
                <h5>Camera</h5>
                <div className="product-rating">★ ★ ★ ★ ★</div>
                <p>
                  Capture life's moments in stunning detail with our
                  professional-grade cameras — high-resolution imaging and
                  versatile features.
                </p>
                <p className="product-price">$360.00</p>
                <div className="product-reviews">Reviews (74)</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;