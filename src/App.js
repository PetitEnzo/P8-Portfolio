import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projets from './pages/Projets';
import ProjectPage from './pages/ProjectPage';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/project/:projectName" element={<ProjectPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
