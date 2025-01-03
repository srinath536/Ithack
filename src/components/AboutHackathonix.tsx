import React from "react";
import "./AboutHackathonix.css";

const AboutHackathonix: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Hackathonix</h1>
      <p className="about-text">
      Hackathonix'25 is the ultimate arena for tech enthusiasts, innovators, and problem-solvers to showcase their skills, creativity, and teamwork. Organized by KCG college of technology, this thrilling 24-hour coding marathon invites participants from diverse backgrounds to collaborate, innovate, and build groundbreaking solutions to real-world challenges
      </p>
      <a href={"https://fonts.google.com/selection/embed"} target="_blank" rel="noopener noreferrer">
          <button className="brochure">Download Brochure</button>
        </a>
    </div>
  );
};

export default AboutHackathonix;
