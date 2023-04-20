import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Light from './components/Light';
import TrafficLights from './components/TrafficLights';
import StatsBar from './components/StatsBar';
import Header from './components/Header';
import Home from './Pages/Home';

const App = () => {
  const [setIsVertical] = useState(false);
  const [stats, setStats] = useState({});

  const handleTrafficLightClick = (color) => {
    setStats((prevStats) => {
      const currentStats = { ...prevStats };
      currentStats[color] = currentStats[color] ? currentStats[color] + 1 : 1;
      return currentStats;
    });
  };

  const handleStatsBarChange = (isVertical) => {
    setIsVertical(isVertical);
  };

  return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/horizontal' element={<TrafficLights isVertical={false} onClick={handleTrafficLightClick} stats={stats}><Light tlColor='red'/><Light tlColor='yellow'/><Light tlColor='green'/></TrafficLights>} />
            <Route path='/vertical' element={<TrafficLights isVertical={true} onClick={handleTrafficLightClick} stats={stats}><Light tlColor='red'/><Light tlColor='yellow'/><Light tlColor='green'/></TrafficLights>} />
          </Routes>
          <StatsBar onChange={handleStatsBarChange} stats={stats} />
        </div>
      </Router>
  );
};

export default App;
