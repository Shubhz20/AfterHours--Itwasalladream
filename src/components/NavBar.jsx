import React, { useState, useEffect } from 'react';
import { Music, Activity, Calendar, Ticket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <Activity size={24} className="logo-icon" />
          <span>AfterHours</span>
        </Link>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li className={location.pathname === '/parties' ? 'active' : ''}>
            <Link to="/parties">
              <Calendar size={18} />
              <span>All Parties</span>
            </Link>
          </li>
          <li className={location.pathname === '/host' ? 'active' : ''}>
            <Link to="/host">
              <Music size={18} />
              <span>Host Party</span>
            </Link>
          </li>
          <li className={location.pathname === '/concerts' ? 'active' : ''}>
            <Link to="/concerts">
              <Activity size={18} />
              <span>Concerts</span>
            </Link>
          </li>
          <li className={location.pathname === '/tickets' ? 'active' : ''}>
            <Link to="/tickets">
              <Ticket size={18} />
              <span>Buy/Sell</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;