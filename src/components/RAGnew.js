import React from "react";
import "../css/RAGnew.css";
import thinker from "../images/thinker.jpg";
import business from "../images/business.jpg";

const RAGnew = ({ openForm }) => { // Receive openForm as prop
  return (
    <div className="parent-rag">
      <div className="div1-rag">
        <h1 className="RAG-title">
          THE R.A.G<br></br> BOT
        </h1>
        <p className="RAG-corner-text">
          Your AI document collaborator. Upload files, then ask questions,
          debate ideas, or extract <br></br>key insights—all through natural
          conversation with your private knowledge base.
        </p>
      </div>

      <div className="div2-rag">
        <div className="image-container">
          <img
            src={business}
            alt="lawyers sitting with documents in meeting"
            className="card-image"
            style={{
              width: "100%",
              height: "auto",
              position: "absolute",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="hover-content">
          <p>
            Instantly extract answers from 100+ page documents—like having a PhD
            researcher on standby 24/7.
          </p>
        </div>
      </div>

      <div className="div3-rag">
        <div className="image-container">
          <img
            src={thinker}
            alt="man thinking"
            className="card-image"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="hover-content">
          <p>
            Boardroom-ready insights from your documents in 30 seconds. No more
            'I'll get back to you'—just confidence on demand.
          </p>
        </div>
      </div>

      <div className="div4-rag">
        <button 
          className="stroke-button" 
          onClick={() => openForm("RAG")} // Use the prop directly
        >
          Reserve
        </button>
      </div>

      <div className="div5-rag">
        <button className="stroke-button">Demo</button>
      </div>
    </div>
  );
};

export default RAGnew;