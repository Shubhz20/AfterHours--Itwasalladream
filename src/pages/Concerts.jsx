import React from 'react';
import { motion } from 'framer-motion';
import ConcertsList from '../components/ConcertsList';
import '../styles/Home.css';

const Concerts = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg)' }}>
      <div className="landing-overlay" />
      <div className="landing-content">
        <motion.h1 
          className="landing-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Upcoming Concerts
        </motion.h1>
        <motion.p 
          className="landing-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover amazing live performances
        </motion.p>

        <ConcertsList />
      </div>
    </div>
  );
};

export default Concerts;