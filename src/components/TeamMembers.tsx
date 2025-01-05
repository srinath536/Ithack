import React from "react";
import "./TeamMembers.css";
import teamMember1 from "../assets/corem.png"; // Replace with actual image paths
import teamMember2 from "../assets/corem.png";
import teamMember3 from "../assets/corem.png";
import teamMember4 from "../assets/corem.png";

const teamMembers = [
  { id: 1, image: teamMember1, linkedin: "https://www.linkedin.com/in/member1/" },
  { id: 2, image: teamMember2, linkedin: "https://www.linkedin.com/in/member2/" },
  { id: 3, image: teamMember3, linkedin: "https://www.linkedin.com/in/member3/" },
  { id: 4, image: teamMember4, linkedin: "https://www.linkedin.com/in/member4/" },
];

const TeamMembers: React.FC = () => {
  return (
    <div className="team-container">
      <h2 className="team-heading">Team Members</h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <a
            key={member.id}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="team-card"
          >
            <img src={member.image} alt={`Team Member ${member.id}`} className="team-image" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
