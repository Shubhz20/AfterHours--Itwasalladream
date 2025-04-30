import React from 'react';
import { motion } from 'framer-motion';

const ArtistGallery = () => {
  const artists = [
    {
      id: 1,
      name: "DJ Aryan",
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      genre: "Bollywood Mix"
    },
    {
      id: 2,
      name: "DJ Priya",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      genre: "Bollywood Remix"
    },
    {
      id: 3,
      name: "DJ Raj",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      genre: "Bollywood Hits"
    }
  ];

  return (
    <motion.div
      className="artist-gallery"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Bollywood Artists</h2>
      <div className="artists-grid">
        {artists.map((artist) => (
          <motion.div
            key={artist.id}
            className="artist-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="artist-image">
              <img src={artist.image} alt={artist.name} />
            </div>
            <div className="artist-info">
              <h3>{artist.name}</h3>
              <p>{artist.genre}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ArtistGallery; 