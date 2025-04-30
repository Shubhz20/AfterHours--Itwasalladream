import React from 'react';
import { motion } from 'framer-motion';
import { Music, Calendar, MapPin } from 'lucide-react';

const ConcertsList = () => {
  const indianConcerts = [
    {
      title: "Yo Yo Honey Singh – Millionaire India Tour",
      date: "March 15, 2025",
      venue: "Ahmedabad (Venue to be announced)",
      genre: "Hip-Hop/Pop",
      details: "Yo Yo Honey Singh is set to perform his chart-topping hits in Ahmedabad as part of his 'Millionaire' tour."
    },
    {
      title: "SANAM Live in Concert",
      date: "March 15, 2025",
      venue: "Courtyard, R City Mall, Ghatkopar, Mumbai",
      genre: "Bollywood/Pop",
      details: "SANAM Puri and his band will perform their popular renditions of classic Bollywood songs."
    },
    {
      title: "Shreya Ghoshal – Live Concert",
      date: "March 15, 2025",
      venue: "Codissia Ground, Coimbatore",
      genre: "Playback Singing",
      details: "The renowned playback singer will mesmerize the audience with her soulful voice."
    },
    {
      title: "Anuv Jain & Zaeden – Live in Lucknow",
      date: "March 15, 2025",
      venue: "Vint Club, Lucknow",
      genre: "Indie/Pop",
      details: "Anuv Jain and Zaeden will perform their hit songs in a cozy setting."
    },
    {
      title: "Devi Sri Prasad – Musical Mayhem",
      date: "March 15, 2025",
      venue: "Aakasha Rooftop Lounge, Bengaluru",
      genre: "Telugu Film Music",
      details: "The music composer and playback singer will bring his energetic performance to Bengaluru."
    },
    {
      title: "Madhubanti Bagchi – Live in Concert",
      date: "March 15, 2025",
      venue: "Phoenix Market City, Whitefield, Bengaluru",
      genre: "Bollywood/Pop",
      details: "Madhubanti Bagchi will perform her popular tracks in a lively setting."
    },
    {
      title: "Shubha Mudgal – The Classical Colors of Music",
      date: "March 15, 2025",
      venue: "Chowdiah Memorial Hall, Bengaluru",
      genre: "Classical Music",
      details: "The classical vocalist will present a blend of traditional and contemporary music."
    },
    {
      title: "Arijit Singh – Live in Pune",
      date: "March 16, 2025",
      venue: "Maharashtra Cricket Association Stadium, Pune",
      genre: "Bollywood/Soulful",
      details: "Arijit Singh will perform his soulful hits in Pune."
    }
  ];

  const internationalConcerts = [
    {
      title: "Camila Cabello – Yours, C Tour",
      date: "June 21 – September 14, 2025",
      venue: "Multiple Venues",
      genre: "Pop",
      details: "Camila Cabello embarks on her first concert tour in over seven years, supporting her fourth studio album, C, XOXO. The tour includes 20 dates across Europe, Asia, Australia, and South America."
    },
    {
      title: "Jennifer Lopez – Up All Night: Live in 2025",
      date: "July 4 – August 7, 2025",
      venue: "Multiple Venues",
      genre: "Pop/R&B",
      details: "Jennifer Lopez returns to the stage with her fifth concert tour, marking her first in six years. The tour will feature 17 shows across Africa, Asia, and Europe."
    },
    {
      title: "G-Dragon – Übermensch World Tour",
      date: "March 29 – August 10, 2025",
      venue: "Multiple Venues",
      genre: "K-Pop",
      details: "South Korean rapper and singer-songwriter G-Dragon embarks on his fourth concert tour in support of his third studio album, Übermensch. The tour includes 16 shows across Asia."
    }
  ];

  const ConcertCard = ({ concert }) => (
    <motion.div
      className="concert-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3>{concert.title}</h3>
      <div className="concert-details">
        <p><Calendar size={16} /> {concert.date}</p>
        <p><MapPin size={16} /> {concert.venue}</p>
        <p><Music size={16} /> {concert.genre}</p>
      </div>
      <p className="concert-description">{concert.details}</p>
    </motion.div>
  );

  return (
    <div className="concerts-section">
      <div className="concerts-category">
        <h2>🎤 Bollywood & Indian Artists</h2>
        <div className="concerts-grid">
          {indianConcerts.map((concert, index) => (
            <ConcertCard key={index} concert={concert} />
          ))}
        </div>
      </div>

      <div className="concerts-category">
        <h2>🌍 Hollywood & International Artists</h2>
        <div className="concerts-grid">
          {internationalConcerts.map((concert, index) => (
            <ConcertCard key={index} concert={concert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConcertsList; 