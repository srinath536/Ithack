import React from "react";
import "./Logo.css";
import logoImage from "../assets/hcklogo.png";

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo" className="logo" />
    </div>
  );
};

export default Logo;
