import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './Pages/HomePage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import Header from './components/Header.jsx';
import ProjectPage from './pages/ProjectPage.jsx';







const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/cv" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;