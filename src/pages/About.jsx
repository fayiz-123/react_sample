import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./../Styles.css";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about">
        <div className="about-content">
          <h1>About Us</h1>
          <p>We are dedicated to delivering top-quality services with passion and innovation.</p>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="member">
            <h3>Jane Smith</h3>
            <p>Chief Designer</p>
          </div>
          <div className="member">
            <h3>Michael Brown</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
