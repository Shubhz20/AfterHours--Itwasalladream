import React from 'react';
import { motion } from 'framer-motion';
import PartiesList from '../components/PartiesList';
import '../styles/Home.css';

const AllParties = () => {
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
          Upcoming Parties
        </motion.h1>
        <motion.p 
          className="landing-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Find the perfect party for your night out
        </motion.p>

        <PartiesList />
      </div>
    </div>
  );
};

export default AllParties;