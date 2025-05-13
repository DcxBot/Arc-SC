import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import homeimg1 from '../images/homeimg1.jpg';
import homeimg2 from '../images/homeimg2.jpg';
import homeimg3 from '../images/homeimg3.jpg';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [homeimg1, homeimg2, homeimg3];
  const navigate = useNavigate();

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-container">
      {/* Background Slideshow */}
      <div className="slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>

      {/* Your Existing Grid */}
      <div className="home-parent">
        <div className="home-div1">
          <h2 className="home-card-title">Where Sophisticated Bots Meet Seamless Functionality</h2>
          <p className="home-card-subtitle">Tech meets taste. Your digital wardrobe awaits.</p>
          <button className="home-stroke-btn"
          onClick={() => navigate('/ARC')}
          >
            View</button>
        </div>
        
        <div className="home-div2">
          <h2 className="home-card-title">Upload. Search. Find Exactly What You Need.</h2>
          <p className="home-card-subtitle">Built for speed, designed for clarity.</p>
          <button className="home-stroke-btn"
          onClick={() => navigate('/SolutionsCatalogue')}
          >
            View</button>
        </div>

        <div className="home-div3">3</div>
        <div className="home-div4">4</div>
      </div>
    </div>
  );
};

export default Home;