import React from "react";
import "./Sponsors.css";
import gpt from "../assets/gpt.png";
import fb from "../assets/fb.png";
import dell from "../assets/dell.png"
import stripe from "../assets/stripe.png"

const sponsors = [
  { id: 1,  image: gpt }, // Directly assign the imported string
  { id: 2,  image: dell },
  { id: 3,  image: fb },
  { id: 4,  image: stripe },
];

const Sponsors: React.FC = () => {
  return (
    <div className="sponsors-container">
      <h2 className="sponsors-heading">Our Sponsors</h2>
      <div className="sponsors-grid">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-card">
            <img
              src={sponsor.image} // Use the string directly here
              
              className="sponsor-image"
            />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
