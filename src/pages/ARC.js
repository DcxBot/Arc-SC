import React from "react";
import "../css/ARC.css";
import "../css/MobileARC.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// checking if .git is added and working
// Import your components
import CRMnew from "../components/CRMnew";
import LEGALnew from "../components/LEGALnew";
import RAGnew from "../components/RAGnew";
const ARC = ({ openForm }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [nextImageIndex, setNextImageIndex] = React.useState(1);
  const images = [img1, img2, img3];

  // Auto-cycle every 3 seconds for hero images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex((currentImageIndex + 1) % images.length);
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
      }, 1000); // match CSS transition duration
    }, 1500);
    return () => clearInterval(interval);
  }, [currentImageIndex, nextImageIndex, images.length]);

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    cssEase: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    zIndex: 1, // Lower than your form's z-index
    // Updated dots configuration:
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-40px", // Adjust this to move dots up/down
          left: "50%",
          transform: "translateX(-50%)",
          width: "auto",
        }}
      >
        <ul
          style={{
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.3)",
          margin: "0 5px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      />
    ),
    // This ensures the active dot is highlighted properly
    afterChange: (current) => setCurrentImageIndex(current),
  };

  return (
    <div className="arc-page">
      <div className="arc-container">
        <div className="container">
          <div className="text-section">
            <h1>
              DIGITAL
              <br />
              BUSINESS SOLUTIONS
            </h1>
            <p style={{ color: "#566573" }}>
              Unlock the power of AI with premium models
              <br />
              tailored for you. Fast, reliable, and accessible
              <br />
              upgrades for your workflows.
            </p>
          </div>
          <div className="image-section">
            <img
              style={{ maxWidth: "500px", opacity: 0 }}
              src="https://i.pinimg.com/736x/08/1a/ed/081aed2e7ddc029f940021ddb22145fc.jpg"
              alt="Laptop Work"
            />
            <div className="slide-container hover-scale">
              <img
                className={`slide ${currentImageIndex === 0 ? "active" : ""}`}
                src={images[0]}
                alt="Slideshow"
              />
              <img
                className={`slide ${currentImageIndex === 1 ? "active" : ""}`}
                src={images[1]}
                alt="Slideshow"
              />
              <img
                className={`slide ${currentImageIndex === 2 ? "active" : ""}`}
                src={images[2]}
                alt="Slideshow"
              />
            </div>
          </div>
        </div>
        <div className="buttons">
          <a href="#" className="all-demos">
            ALL DEMOS
          </a>
          <a href="#" className="purchase">
            PURCHASE
          </a>
        </div>

        {/* Carousel Section */}
        {/* UPDATED CAROUSEL SECTION */}
        <div
          className="bot-carousel-container"
          style={{
            marginTop: "4rem",
            marginBottom: "0.5rem",
          }}
        >
          <Slider {...carouselSettings}>
            <div className="carousel-slide">
              <CRMnew
                style={{ marginBottom: "-20px" }}
                openForm={() => openForm("CRM")}
              />{" "}
              {/* ADD THIS */}
            </div>
            <div className="carousel-slide">
              <LEGALnew openForm={() => openForm("Legal")} /> {/* ADD THIS */}
            </div>
            <div className="carousel-slide">
              <RAGnew openForm={() => openForm("RAG")} /> {/* ADD THIS */}
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ARC;
