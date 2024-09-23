import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage' // Import the Hero component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
       <LandingPage />
        </>} />
      </Routes>
    </Router>
  );
};

export default App;