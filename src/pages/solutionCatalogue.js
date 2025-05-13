import React, { useState } from "react";
import "../css/solutionCatalogue.css";


const documents = [
  {
    id: 1,
    title: "Project Plan",
    tags: ["IBM", "PDF", "AI"],
  } /** will come from mongo DB */,
  {
    id: 2,
    title: "Budget Report",
    tags: ["Microsoft", "Powerpoint", "Cloud"],
  } /**will be adding paragraph and urls*/,
  { id: 3, title: "Design Guidelines", tags: ["OpenText", "PDF", "Security"] },
  { id: 4, title: "User Research", tags: ["IBM", "Powerpoint", "AI", "Cloud"] },
];

const filterGroups = {
  /**also comes from mongo DB */ OEM: ["IBM", "Microsoft", "OpenText"],
  DocumentType: ["PDF", "Powerpoint"],
  Topics: ["AI", "Cloud", "Security"],
};

function SolutionsCatalogue() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [activeFilters, setActiveFilters] = useState([]);
  const [isRefinedSearch, setIsRefinedSearch] = useState(false);

  const handleFilterChange = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveFilters(selectedTags);
    setIsRefinedSearch(false); // Regular search (OR logic)
  };

  const handleRefineSearch = (e) => {
    e.preventDefault();
    setActiveFilters(selectedTags);
    setIsRefinedSearch(true); // Refined search (AND logic)
  };

  const filteredDocuments = activeFilters.length
    ? isRefinedSearch
      ? documents.filter((doc) =>
          activeFilters.every((filter) => doc.tags.includes(filter))
        )
      : documents.filter((doc) =>
          doc.tags.some((tag) => activeFilters.includes(tag))
        )
    : documents;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:5000/api/upload", {
      //url to connect to Lebo's backend
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log("Upload response:", result);
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2
          style={{
            letterSpacing: "3px",
            marginBottom: "30px",
            marginTop: "22px",
          }}
        >
          FILTERS
        </h2>
        <form>
          {Object.entries(filterGroups).map(([groupName, tags]) => (
            <details key={groupName} className="filter-section">
              <summary>{groupName}</summary>
              <div className="filter-options">
                {tags.map((tag) => (
                  <label key={tag} className="checkbox-label">
                    <input
                      type="checkbox"
                      value={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleFilterChange(tag)}
                    />
                    {tag}
                  </label>
                ))}
              </div>
            </details>
          ))}
          <div
            className="filter-actions"
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            <button
              type="button"
              onClick={() => {
                setSelectedTags([]);
                setActiveFilters([]);
                setIsRefinedSearch(false);
              }}
              className="reset-filter"
            >
              All
            </button>

            <button
              type="button"
              onClick={handleSearch}
              className="search-button"
            >
              Search
            </button>

            <button
              type="button"
              onClick={handleRefineSearch}
              className="new-button"
            >
              Refine Search
            </button>
          </div>
        </form>
      </aside>

      <main className="main-content">
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", letterSpacing: "3px" }}
        >
          DOCUMENTS
        </h2>
        <button onClick={() => setIsModalOpen(true)} className="upload-button">
          Upload
        </button>

        {filteredDocuments.map((doc) => (
          <div key={doc.id} className="document-card">
            <h3>{doc.title}</h3>
            <p>
              {doc.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </p>
          </div>
        ))}
      </main>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Upload Document</h3>
            <form onSubmit={handleSubmit}>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <button type="submit">Upload</button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="close-modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SolutionsCatalogue;
