import React from "react";
import "../css/CRMnew.css";
import "../css/MobileCRM.css";
import agent2 from "../images/agent2.jpg";
import agents from "../images/agents.jpg";

const CRMnew = ({ openForm }) => { // Receive openForm as prop
  return (
    <>
      <div className="parent">
        <div className="div1">
          <h1 className="CRM-title">THE CRM & CONTACT CENTER BOT</h1>
          <p className="CRM-corner-text">
            Your 24/7 intelligent assistant that personalizes customer
            interactions while <br></br> capturing valuable relationship data.
          </p>
        </div>

        <div className="div2">
          <div className="image-container">
            <img
              src={agents}
              alt="agent in black on call"
              className="card-image"
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
                top: "-80%",
                left: 0,
                objectFit: "cover",
              }}
            />
          </div>
          <div className="hover-content">
            <p>
              AI-powered customer insights with real-time sentiment analysis and
              automated call logging
            </p>
          </div>
        </div>

        <div className="div3">
          <div className="image-container">
            <img
              src={agent2}
              alt="agent in black on call"
              className="card-image"
            />
          </div>
          <div className="hover-content">
            <p>
              Boosts customer satisfaction scores by 40% while automating 80% of routine inquiries.
            </p>
          </div>
        </div>

        <div className="div4">
          <button 
            className="stroke-button" 
            onClick={() => openForm('CRM')} // Use the prop directly
          >
            Reserve
          </button>
        </div>

        <div className="div5">
          <button 
          className="stroke-button demo-button"
          
          >Demo</button>
        </div>
      </div>
    </>
  );
};

export default CRMnew;