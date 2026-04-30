import React from "react";

const Shop = () => {
  return (
    <>
      

      {/* Content */}
      <div className="container py-5">
        <div className="row">

          {/* Sidebar */}
          <div className="col-lg-3">
            <h2 className="pb-4">Categories</h2>
            <ul className="list-unstyled">
              <li>Men</li>
              <li>Women</li>
              <li>Luxury</li>
              <li>Sport</li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-lg-9">
            <div className="row">

              {/* Product 1 */}
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
                    className="card-img-top"
                     style={{ height: "300px" }}
                    alt="Sunglasses"
                  />
                  <div className="card-body text-center">
                    <h5>Sunglasses</h5>
                    <p>$50.00</p>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src="https://okhai.org/cdn/shop/files/SSKR102K.jpg?v=1754303910"
                    className="card-img-top"
                     style={{ height: "300px" }}
                    alt="Kurti"
                  />
                  <div className="card-body text-center">
                    <h5>Womens Kurti</h5>
                    <p>$250.00</p>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                    className="card-img-top"
                     style={{ height: "300px" }}
                    alt="Men's T-Shirt"
                  />
                  <div className="card-body text-center">
                    <h5>Men's T-Shirt</h5>
                    <p>$150.00</p>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src="https://nicksonshirts.com/wp-content/uploads/2021/06/casual-shirt-model-front-picture-with-a-grey-background.jpg"
                    className="card-img-top"
                     style={{ height: "300px" }}
                    alt="Men's Shirt"
                  />
                  <div className="card-body text-center">
                    <h5>Men's Shirt</h5>
                    <p>$250.00</p>
                  </div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src="https://www.tenuejeans.com/cdn/shop/files/JacksonMojave_0067_3000.jpg?v=1770894343&width=1920"
                    className="card-img-top"
                     style={{ height: "300px" }}
                    alt="Men's Jeans"
                  />
                  <div className="card-body text-center">
                    <h5>Men's jeans </h5>
                    <p>$250.00</p>
                  </div>
                </div>
              </div>

              {/* Product 6 */}
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2022/10/SA/JB/PK/91351453/mens-cargo-joggers-1000x1000.jpg"
                    className="card-img-top"
                     style={{ height: "300px" }}
                    alt="Burqa"
                  />
                  <div className="card-body text-center">
                    <h5>Joggers</h5>
                    <p>$250.00</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="mb-4">Our Brands</h1>
          <div className="row">

            <div className="col-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                alt="Nike"
                className="img-fluid"
                style={{ height: "60px" }}
              />
            </div>

            <div className="col-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
                alt="Adidas"
                className="img-fluid"
                style={{ height: "60px" }}
              />
            </div>

            <div className="col-3">
              <img
                src="https://www.pngarts.com/files/8/Lacoste-Logo-Transparent-Image.png"
                alt="Lacoste"
                className="img-fluid"
                style={{ height: "60px" }}
              />
            </div>

            <div className="col-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Herm%C3%A8s.svg/1920px-Herm%C3%A8s.svg.png"
                alt="Hermes"
                className="img-fluid"
                style={{ height: "60px" }}
              />
            </div>

          </div>
        </div>
      </section>

       
    </>
  );
};

export default Shop;
