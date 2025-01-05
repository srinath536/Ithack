import React from "react";
import "./Sponsors.css";
import slogo1 from "../assets/apple.png"; // Correctly import the image

const sponsors = [
  { id: 1,  image: slogo1 }, // Directly assign the imported string
  { id: 2,  image: slogo1 },
  { id: 3,  image: slogo1 },
  { id: 4,  image: slogo1 },
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
