import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UttarPradeshTravelPortal from './components/UttarPradeshTravelPortal';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import Culture from './components/Culture';
import PlanJourney from './components/PlanJourney';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UttarPradeshTravelPortal />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/plan-journey" element={<PlanJourney />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
