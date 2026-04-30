function Categories() {
  return (
    <section className="container py-5 text-center category-section text-white">
      <h2 className="fw-bold">Categories of The Month</h2>

      <div className="row mt-4">
        {/* Watches */}
        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            className="rounded-circle img-fluid category-img"
            alt="Watches"
          />
          <h5 className="mt-3">Watches</h5>
          <button className="btn custom-blue-btn">Go Shop</button>
        </div>

        {/* Shoes */}
        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            className="rounded-circle img-fluid category-img"
            alt="Shoes"
          />
          <h5 className="mt-3">Shoes</h5>
          <button className="btn custom-blue-btn">Go Shop</button>
        </div>

        {/* Accessories */}
        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
            className="rounded-circle img-fluid category-img"
            alt="Accessories"
          />
          <h5 className="mt-3">Accessories</h5>
          <button className="btn custom-blue-btn">Go Shop</button>
        </div>
      </div>
    </section>
  );
}

export default Categories;