import React from "react";
import "../css/LEGALnew.css";
import lawyer1 from "../images/lawyer1.jpg";
import meeting from "../images/meeting.jpg";

const LEGALnew = ({ openForm }) => { // Receive openForm as prop
  return (
    <div className="parent-legal">
      <div className="div1-legal">
        <h1 className="LEGAL-title">
          THE LEGAL<br></br> BOT
        </h1>
        <p className="LEGAL-corner-text">
          Your AI legal co-pilot: accurate transcriptions, instant document
          analysis, <br></br>and preliminary legal insights—all in one secure
          platform.
        </p>
      </div>

      <div className="div2-legal">
        <div className="image-container">
          <img
            src={meeting}
            alt="lawyers sitting with documents in meeting"
            className="card-image"
            style={{
              width: "100%",
              height: "auto",
              position: "absolute",
              top: "-210%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="hover-content">
          <p>
            Cuts contract review time from hours to minutes with 99% clause
            accuracy—so you focus on deals, not paperwork.
          </p>
        </div>
      </div>

      <div className="div3-legal">
        <div className="image-container">
          <img
            src={lawyer1}
            alt="agent in black on call"
            className="card-image"
          />
        </div>
        <div className="hover-content">
          <p>
            Catches hidden contract risks most lawyers miss—like auto-renewal
            traps and liability loopholes—before you sign.
          </p>
        </div>
      </div>

      <div className="div4-legal">
        <button 
          className="stroke-button" 
          onClick={() => openForm("Legal")} // Use the prop directly
        >
          Reserve
        </button>
      </div>

      <div className="div5-legal">
        <button className="stroke-button">Demo</button>
      </div>
    </div>
  );
};

export default LEGALnew;