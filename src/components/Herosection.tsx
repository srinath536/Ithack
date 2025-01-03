import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const googleFormURL = "https://forms.gle/your-google-form-link";  

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <h1>
          <span className="hackathonix">HACKATHONIX</span>
          <span className="gradient-25"> 25</span>
        </h1>
        <a href={googleFormURL} target="_blank" rel="noopener noreferrer">
          <button className="register-btn">Register Now</button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection; 