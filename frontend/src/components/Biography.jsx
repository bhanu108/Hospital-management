import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Radha Rani Hospital is a leading healthcare institution committed to delivering quality medical services with a compassionate touch. Founded on the principles of care, trust, and excellence, we aim to provide comprehensive healthcare solutions to our community.
          </p>
         
          <p>
          At Radha Rani Hospital, we believe in blending advanced medical technology with empathetic care, ensuring that every patient receives the best possible treatment in a warm and welcoming environment.
          </p>
          <p>"Healing with Heart, Caring with Compassion"</p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;