import React, { useEffect } from "react";

import "../css/ReserveForm.css";

const ReserveForm = ({ onClose, botType }) => {

  useEffect(() => {
    document.body.classList.add('form-open');
    return () => {
      document.body.classList.remove('form-open');
    };
  }, []);


  const formConfig = {
    CRM: {
      title: "CRM Bot build",
      description: "Get personalized customer insights",
    },
    Legal: {
      title: "Legal Assistant Access",
      description: "Streamline contract reviews",
    },
    RAG: {
      title: "Document AI Setup",
      description: "Chat with your files",
    },
  };

  const { title, description } = formConfig[botType] || {};

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert("Form submitted successfully!"); // Your alert
    onClose(); // Close the form
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h1>{title || "Demo Request"}</h1>
        <p>{description || "We'll contact you shortly"}</p>
        <form onSubmit={handleSubmit} style={{ marginTop: 50 }}>
          {" "}
          {/* Added onSubmit */}
          <input
            style={{ padding: 20 }}
            type="text"
            placeholder="Full Name"
            required
          />
          <input
            style={{ padding: 20 }}
            type="email"
            placeholder="Email"
            required
          />
          <input
            style={{ padding: 20 }}
            type="text"
            placeholder="What is the main purpose or goal of the chatbot?"
            required
          />
          <input
            style={{ padding: 20 }}
            type="text"
            placeholder="What platform(s) should the chatbot be available on?"
            required
          />
          <input
            style={{ padding: 20 }}
            type="text"
            placeholder="What specific tasks should the chatbot be able to do?"
            required
          />
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 15 }}
          >
            <button type="submit">Submit</button>
          </div>
          <button type="button" className="close-btn" onClick={onClose}>
            ×
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReserveForm;
