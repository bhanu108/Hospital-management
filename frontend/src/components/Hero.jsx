import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to Radha Rani Hospital, where compassionate care meets medical excellence. We are dedicated to providing advanced healthcare services with a personal touch, ensuring that your wellness is always our top priority. At Radha Rani Hospital, our mission is to bring hope and healing to every patient by offering exceptional medical care, guided by a deep commitment to compassion and quality.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;