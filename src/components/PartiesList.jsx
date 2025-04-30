import React from 'react';
import { motion } from 'framer-motion';
import { Music, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const PartiesList = () => {
  const clubs = [
    {
      id: 1,
      name: "Ballr",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      location: "Kalyani Nagar",
      genre: "EDM & Bollywood",
      capacity: "500+",
      description: "Pune's premium nightclub with state-of-the-art sound system",
      website: "https://g.co/kgs/yGhRL2x"
    },
    {
      id: 2,
      name: "Escada",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      location: "Koregaon Park",
      genre: "International & Bollywood",
      capacity: "400+",
      description: "Luxurious nightclub with international DJs",
      website: "https://g.co/kgs/mfqgWsQ"
    },
    {
      id: 3,
      name: "Mask",
      image: "https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg",
      location: "Viman Nagar",
      genre: "House & Techno",
      capacity: "300+",
      description: "Underground music venue with unique atmosphere",
      website: "https://g.co/kgs/xhyHWdu"
    },
    {
      id: 4,
      name: "Miller",
      image: "https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/300000000_1234567890_1234567890_n.jpg",
      location: "Koregaon Park",
      genre: "Live Music & Bollywood",
      capacity: "350+",
      description: "Iconic venue known for live performances",
      website: "https://g.co/kgs/NzP3yWU"
    },
    {
      id: 5,
      name: "Dioana",
      image: "https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg",
      location: "Kalyani Nagar",
      genre: "EDM & Hip Hop",
      capacity: "450+",
      description: "Modern club with cutting-edge sound system",
      website: "https://g.co/kgs/CQWXAXf"
    },
    {
      id: 6,
      name: "Toyroom",
      image: "https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/300000000_2345678901_2345678901_n.jpg",
      location: "Koregaon Park",
      genre: "House & Techno",
      capacity: "400+",
      description: "Underground music venue with unique atmosphere",
      website: "https://g.co/kgs/JYoFGKp"
    },
    {
      id: 7,
      name: "Elrow",
      image: "https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/300000000_3456789012_3456789012_n.jpg",
      location: "Viman Nagar",
      genre: "International EDM",
      capacity: "600+",
      description: "World-famous party brand in India",
      website: "https://g.co/kgs/UtvUzfP"
    },
    {
      id: 8,
      name: "Plunge",
      image: "https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/300000000_4567890123_4567890123_n.jpg",
      location: "Koregaon Park",
      genre: "EDM & Bollywood",
      capacity: "500+",
      description: "Premium nightclub with pool parties",
      website: "https://g.co/kgs/a9v8MVv"
    },
    {
      id: 9,
      name: "Publiq",
      image: "https://images.pexels.com/photos/1190305/pexels-photo-1190305.jpeg",
      location: "Kalyani Nagar",
      genre: "Live Music & Bollywood",
      capacity: "400+",
      description: "Modern venue with great acoustics",
      website: "https://g.co/kgs/1YFo1c9"
    }
  ];

  const PartyCard = ({ party }) => (
    <motion.div
      className="party-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="party-image">
        <img src={party.image} alt={party.name} />
      </div>
      <h3>{party.name}</h3>
      <div className="party-details">
        <p><MapPin size={16} /> {party.location}</p>
        <p><Music size={16} /> {party.genre}</p>
        <p><Users size={16} /> Capacity: {party.capacity}</p>
      </div>
      <p className="party-description">{party.description}</p>
      <a 
        href={party.website} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="website-link"
      >
        <ExternalLink size={16} /> Know More
      </a>
    </motion.div>
  );

  return (
    <motion.div
      className="parties-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Popular Venues</h2>
      <div className="parties-grid">
        {clubs.map((club) => (
          <PartyCard key={club.id} party={club} />
        ))}
      </div>
    </motion.div>
  );
};

export default PartiesList; 