import React from "react";
import "./Core.css";
import coreMember1 from "../assets/corem.png"; // Replace with actual image paths
import coreMember2 from "../assets/corem.png";
import coreMember3 from "../assets/corem.png";
import coreMember4 from "../assets/corem.png";

const coreTeam = [
  { id: 1, image: coreMember1, linkedin: "https://www.linkedin.com/in/member1/" },
  { id: 2, image: coreMember2, linkedin: "https://www.linkedin.com/in/member2/" },
  { id: 3, image: coreMember3, linkedin: "https://www.linkedin.com/in/member3/" },
  { id: 4, image: coreMember4, linkedin: "https://www.linkedin.com/in/member4/" },
];

const Core: React.FC = () => {
  return (
    <div className="core-container">
      <h2 className="core-heading">Core Team</h2>
      <div className="core-grid">
        {coreTeam.map((member) => (
          <a
            key={member.id}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="core-card"
          >
            <img src={member.image} alt={`Core Member ${member.id}`} className="core-image" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Core;
