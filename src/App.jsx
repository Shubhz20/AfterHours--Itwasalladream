import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllParties from './pages/AllParties';
import HostParty from './pages/HostParty';
import Concerts from './components/Concerts';
import Tickets from './pages/Tickets';

// ScrollToTop component to handle scroll behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <NavBar />
      <ScrollToTop />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parties" element={<AllParties />} />
          <Route path="/host" element={<HostParty />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;