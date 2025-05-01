import React from 'react';
import { motion } from 'framer-motion';
import { Music, Calendar, MapPin, Users, ExternalLink, Ticket, UserPlus } from 'lucide-react';

const PartiesList = () => {
  const clubs = [
    {
      id: 1,
      name: "Ballr",
      image:"/BALLR.jpeg",
      location: "Kalyani Nagar",
      genre: "EDM & Bollywood",
      capacity: "500+",
      description: "Pune's premium nightclub with state-of-the-art sound system",
      website: "https://g.co/kgs/yGhRL2x"
    },
    {
      id: 2,
      name: "Escada",
      image:"/escada.jpeg",
      location: "Koregaon Park",
      genre: "International & Bollywood",
      capacity: "400+",
      description: "Luxurious nightclub with international DJs",
      website: "https://g.co/kgs/mfqgWsQ"
    },
    {
      id: 3,
      name: "Mask",
      image:"/MASK.jpeg",
      location: "Viman Nagar",
      genre: "House & Techno",
      capacity: "300+",
      description: "Underground music venue with unique atmosphere",
      website: "https://g.co/kgs/xhyHWdu"
    },
    {
      id: 4,
      name: "Miller",
      image:"/MILLERS.jpeg",
      location: "Koregaon Park",
      genre: "Live Music & Bollywood",
      capacity: "350+",
      description: "Iconic venue known for live performances",
      website: "https://g.co/kgs/NzP3yWU"
    },
    {
      id: 5,
      name: "Dioana",
      image:"https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg",
      location: "Kalyani Nagar",
      genre: "EDM & Hip Hop",
      capacity: "450+",
      description: "Modern club with cutting-edge sound system",
      website: "https://g.co/kgs/CQWXAXf"
    },
    {
      id: 6,
      name: "Toyroom",
      image:"/toyroom.jpeg",
      location: "Koregaon Park",
      genre: "House & Techno",
      capacity: "400+",
      description: "Underground music venue with unique atmosphere",
      website: "https://g.co/kgs/JYoFGKp"
    },
    {
      id: 7,
      name: "Elrow",
      image:"/elrow.jpeg",
      location: "Viman Nagar",
      genre: "International EDM",
      capacity: "600+",
      description: "World-famous party brand in India",
      website: "https://g.co/kgs/UtvUzfP"
    },
    {
      id: 8,
      name: "Plunge",
      image:"/plunge.jpeg",
      location: "Koregaon Park",
      genre: "EDM & Bollywood",
      capacity: "500+",
      description: "Premium nightclub with pool parties",
      website: "https://g.co/kgs/a9v8MVv"
    },
    {
      id: 9,
      name: "Publiq",
      image:"/publiq.jpeg",
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
      <div className="party-actions">
        <a 
          href={`https://wa.me/6377303438?text=Hey%20harshit%2C%20I%20wanna%20join%20guestlist%2C%20can%20i%20get%20more%20details%20about%20the%20parties`}
          target="_blank"
          rel="noopener noreferrer"
          className="ticket-button"
        >
          <Ticket size={16} /> Get Tickets
        </a>
        <a 
          href={`https://wa.me/6377303438?text=Hey%20harshit%2C%20I%20wanna%20join%20guestlist%2C%20can%20i%20get%20more%20details%20about%20the%20parties`}
          target="_blank"
          rel="noopener noreferrer"
          className="guestlist-button"
        >
          <UserPlus size={16} /> Join Guestlist
        </a>
      </div>
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