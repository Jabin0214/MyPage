import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import Header from './components/Header.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import ProjectCard from './components/ProjectCard.jsx';







const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<ProjectCard />} />
          <Route path="/cv" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;