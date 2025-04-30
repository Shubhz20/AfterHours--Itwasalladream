import React from 'react';
import { motion } from 'framer-motion';

const InstagramReel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="instagram-reel-container"
    >
      <div className="reel-wrapper">
        <iframe
          src="https://www.instagram.com/reel/DERkmVWy9lt/embed"
          width="100%"
          height="450"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          allow="encrypted-media"
          title="Instagram Reel"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default InstagramReel; 