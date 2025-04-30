import React from 'react';
import { motion } from 'framer-motion';

const PastEventsReels = () => {
  return (
    <motion.div
      className="past-events-reels"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Past Successful Events</h2>
      <div className="reels-container">
        <motion.div
          className="reel-wrapper"
          whileHover={{ scale: 1.02 }}
        >
          <iframe
            src="https://www.instagram.com/reel/DERkmVWy9lt/embed"
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
            title="Past Successful Events"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PastEventsReels; 