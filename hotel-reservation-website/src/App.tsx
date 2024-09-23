import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage' // Import the Hero component
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import VideoSection from './components/videosection';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
       <LandingPage />
       <AboutUs/>
       <OurServices/>
       <VideoSection/>
        </>} />
      </Routes>
    </Router>
  );
};

export default App;
