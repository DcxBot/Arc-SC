import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import ARC from './pages/ARC';
import SolutionsCatalogue from './pages/solutionCatalogue';
import ReserveForm from './components/ReserveForm'; // Add this import
import ScrollToTop from './components/scrolltotop';


function App() {
  // Add this state management for the form
  const [formState, setFormState] = useState({
    isOpen: false,
    botType: null
  });

  const openForm = (botType) => setFormState({ isOpen: true, botType });
  const closeForm = () => setFormState({ isOpen: false, botType: null });

  return (
    <Router>
        <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <nav>
          <div className="nav-container">
            <div className="company-name">D A T A C E N T R I X</div>
            <div className="nav-links">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active-tab' : 'hover-underline')}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ARC"
                    className={({ isActive }) => (isActive ? 'active-tab' : 'hover-underline')}
                  >
                    A.R.C
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/SolutionsCatalogue"
                    className={({ isActive }) => (isActive ? 'active-tab' : 'hover-underline')}
                  >
                    Solution Catalogue
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="hamburger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </nav>

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Pass openForm to ARC */}
            <Route path="/ARC" element={<ARC openForm={openForm} />} />
            <Route path="/SolutionsCatalogue" element={<SolutionsCatalogue />} />
          </Routes>
        </main>

        {/* Minimal Gradient Footer */}
        <footer style={{
          background: 'linear-gradient(to right, transparent, rgba(210, 234, 247, 0.7), transparent)',
          padding: '20px 0',
          textAlign: 'center',
          borderTop: '1px solid rgba(178, 216, 239, 0.5)',
          marginTop: '40px'
        }}>
          <p style={{ 
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 300,
            letterSpacing: '0.05em',
            color: '#3b82f6',
            margin: 0
          }}>
            © {new Date().getFullYear()} DATACENTRIX | AI Assistant Suite
          </p>
        </footer>

        {/* Add the form at the root level */}
        {formState.isOpen && (
          <ReserveForm 
            onClose={closeForm} 
            botType={formState.botType} 
          />
        )}
      </div>
    </Router>
  );
}

export default App;