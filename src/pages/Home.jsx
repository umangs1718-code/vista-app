import HeroCarousel from "../components/HeroCarousel";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  return (
    <>
      {/* Hero Section / Carousel */}
      <HeroCarousel />

      {/* Welcome Section */}
      <section className="welcome-section py-5">
        <div className="container text-center">
          <h2 className="mb-4">Welcome to Sasta Shopping</h2>
          <p className="welcome-text mx-auto">
            Welcome to Sasta Shopping, where your online shopping experience
            meets unparalleled convenience and style. We are dedicated to
            bringing you curated high-quality products and exceptional customer
            service. Explore fashion, electronics, and lifestyle essentials —
            all in one place.
          </p>
        </div>
      </section>

      {/* Categories */}
      <Categories />

      {/* Featured Products */}
      <FeaturedProducts />
    </>
  );
}

export default Home;
