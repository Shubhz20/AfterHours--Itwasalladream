import React from 'react';
import { motion } from 'framer-motion';

const PastVenuesReels = () => {
  const reels = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DERkUaxyGVh/embed",
      title: "Past Venue Highlights #1"
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DAB-sZuOLk_/embed",
      title: "Past Venue Highlights #2"
    }
  ];

  return (
    <motion.div
      className="past-venues-reels"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Past Venue Highlights</h2>
      <div className="reels-container">
        {reels.map((reel) => (
          <motion.div
            key={reel.id}
            className="reel-wrapper"
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              src={reel.url}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              allow="encrypted-media"
              title={reel.title}
            ></iframe>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PastVenuesReels; 