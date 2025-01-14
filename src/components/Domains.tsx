import React from "react";
import "./Domains.css";

const domainsData = [
  {
    id: 1,
    title: "AI and ML",
    description:
      "Explore the world of Artificial Intelligence and Machine Learning with cutting-edge solutions.",
    icon: "🤖",
  },
  {
    id: 2,
    title: "Web & App Development",
    description:
      "Dive into the realm of creativity and build applications that empower users worldwide.",
    icon: "🌐",
  },
  {
    id: 3,
    title: "IoT and Hardware",
    description:
      "Bridge the gap between the physical and digital worlds through IoT and hardware innovation.",
    icon: "🔧",
  },
  {
    id: 4,
    title: "Cybersecurity",
    description:
      "Secure the digital landscape by tackling cyber threats and fortifying systems.",
    icon: "🛡️",
  },
];

const Domains: React.FC = () => {
  return (
    <section className="domains-section">
      <div className="domains-header">
        <h2>Explore Our Domains</h2>
      </div>
      <div className="domains-grid">
        {domainsData.map((domain) => (
          <div key={domain.id} className="domain-card">
            <div className="domain-icon">{domain.icon}</div>
            <h3 className="domain-title">{domain.title}</h3>
            <p className="domain-description">{domain.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Domains;
