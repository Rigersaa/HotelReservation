import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Import the Hero component
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import VideoSection from './components/videosection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoomDetails from './components/RoomDetails';
import RoomsCarousel from './components/RoomsCarousel';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main route showing multiple components */}
        <Route 
          path="/" 
          element={(
            <>
              <LandingPage />
              <AboutUs />
              <OurServices />
              <VideoSection />
              <RoomsCarousel/>
              <ContactUs/>
              <Footer/>
            </>
          )}
        />
        
        {/* Separate route for room details */}
        <Route path="/room-details/:id" element={<RoomDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
