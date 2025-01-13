import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutDept.css";

// Import FontAwesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Import staff images (same as before)
import johnPhoto from "../assets/coremm.jpg";
import janePhoto from "../assets/coremm.jpg";
import michaelPhoto from "../assets/coremm.jpg";
import emilyPhoto from "../assets/coremm.jpg";
import davidPhoto from "../assets/coremm.jpg";

const staffData = [
  {
    id: 1,
    name: "Dr. MUTHUSELVAN S ",
    profession: "Head of Department",
    photo: johnPhoto,
  },
  {
    id: 2,
    name: "Dr. MUTHUSELVAN S ",
    profession: "Assistant Professor",
    photo: janePhoto,
  },
  {
    id: 3,
    name: "Dr. MUTHUSELVAN S ",
    profession: "Research Scholar",
    photo: michaelPhoto,
  },
  {
    id: 4,
    name: "Dr. MUTHUSELVAN S ",
    profession: "Lecturer",
    photo: emilyPhoto,
  },
  {
    id: 5,
    name: "Dr. MUTHUSELVAN S ",
    profession: "Lab Assistant",
    photo: davidPhoto,
  },
];

const AboutDept: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} className="slick-prev" />,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} className="slick-next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="about-dept-container">
      <h2 className="about-dept-title">About Our Department</h2>
      <p className="about-dept-description">
        Welcome to our department, a hub of knowledge, innovation, and
        collaboration. Our dedicated faculty and staff are committed to
        providing a supportive environment where students excel academically
        and professionally.
      </p>
      <div className="carousel-container">
        <Slider {...settings}>
          {staffData.map((staff) => (
            <div key={staff.id} className="carousel-item">
              <div className="staff-card">
                <img
                  src={staff.photo}
                  alt={`${staff.name}'s photo`}
                  className="staff-photo"
                />
                <p className="staff-name">{staff.name}</p>
                <p className="staff-profession">{staff.profession}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutDept;
