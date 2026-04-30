import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/shop?search=${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm main-nav"
        style={{ backgroundColor: "#6c91ee" }}
      >
        <div className="container">
          <Link className="navbar-brand text-white logo" to="/">
            Sasta
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Navigation Links */}
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/shop">Shop</Link>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-light p-2" type="submit">
    <img
      src="https://img.icons8.com/ios-filled/24/000000/search.png"
      alt="search"
      style={{ width: "15px", height: "15px" }}
    />
  </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;