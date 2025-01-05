import React from "react";
import "./Prizes.css";
import Prize from "../assets/prize.png"

const Prizes: React.FC = () => {
  return (
    <div className="prizes-container">
      <img 
        src={Prize} /* Replace with your image path */
        alt="Prizes" 
        className="prizes-image"
      />
    </div>
  );
};

export default Prizes;
