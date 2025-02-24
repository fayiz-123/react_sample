import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./../styles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Website</h1>
          <p>Discover amazing experiences and solutions crafted just for you.</p>
          <Link to="/about" className="btn">Learn More</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>High Quality</h2>
          <p>We provide top-notch services with excellent quality assurance.</p>
        </div>
        <div className="feature">
          <h2>Reliable Support</h2>
          <p>Our team is always ready to assist you whenever you need help.</p>
        </div>
        <div className="feature">
          <h2>Affordable Pricing</h2>
          <p>Get the best services at the most competitive prices.</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
