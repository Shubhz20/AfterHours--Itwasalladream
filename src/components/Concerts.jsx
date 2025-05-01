import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Music, Ticket, Clock } from 'lucide-react';

const Concerts = () => {
  const concerts = [
    {
      id: 1,
      name: "Arijit Singh — One Night Only Tour",
      image: "/arijitsingh.jpeg",
      date: "March 15, 2024",
      time: "7:00 PM",
      location: "Mumbai",
      venue: "Jio World Garden",
      genre: "Bollywood",
      description: "Experience the magic of Arijit Singh's soulful voice in this exclusive concert featuring his greatest hits."
    },
    {
      id: 2,
      name: "Diljit Dosanjh — Born to Shine Tour",
      image: "/diljit.jpeg",
      date: "March 20, 2024",
      time: "8:00 PM",
      location: "Delhi",
      venue: "Indira Gandhi Stadium",
      genre: "Punjabi Pop",
      description: "Join Diljit Dosanjh for an electrifying performance of his greatest hits in this special tour."
    },
    {
      id: 3,
      name: "Badshah — Paagal India Tour",
      image: "/badshah.jpeg",
      date: "March 25, 2024",
      time: "9:00 PM",
      location: "Bangalore",
      venue: "Kanteerava Stadium",
      genre: "Hip Hop",
      description: "Witness Badshah's high-energy performance with his chart-topping tracks and special guests."
    },
    {
      id: 4,
      name: "Neha Kakkar — Live in Concert",
      image: "/neha.jpeg",
      date: "April 5, 2024",
      time: "7:30 PM",
      location: "Hyderabad",
      venue: "Hitex Exhibition Center",
      genre: "Bollywood",
      description: "Experience the power of Neha Kakkar's voice in this special concert featuring her latest hits."
    },
    {
      id: 5,
      name: "Shreya Ghoshal — India Musical Nights",
      image: "/shreya.jpeg",
      date: "April 10, 2024",
      time: "8:30 PM",
      location: "Chennai",
      venue: "Jawaharlal Nehru Stadium",
      genre: "Classical & Bollywood",
      description: "Immerse yourself in the enchanting melodies of Shreya Ghoshal's timeless classics."
    },
    {
      id: 6,
      name: "Sonu Nigam — The Sonu Experience",
      image: "/sonu.jpeg",
      date: "April 15, 2024",
      time: "7:00 PM",
      location: "Kolkata",
      venue: "Netaji Indoor Stadium",
      genre: "Bollywood",
      description: "An evening of timeless classics with the legendary Sonu Nigam and his orchestra."
    },
    {
      id: 7,
      name: "Darshan Raval — Love Aaj Kal Tour",
      image: "/darshan.jpeg",
      date: "April 20, 2024",
      time: "8:00 PM",
      location: "Ahmedabad",
      venue: "Narendra Modi Stadium",
      genre: "Indie Pop",
      description: "Experience the magic of Darshan Raval's romantic melodies in this special concert."
    },
    {
      id: 8,
      name: "Jubin Nautiyal — Live Mehfil India Tour",
      image: "/jubin.jpeg",
      date: "April 25, 2024",
      time: "7:30 PM",
      location: "Pune",
      venue: "Shree Shiv Chhatrapati Sports Complex",
      genre: "Bollywood",
      description: "Join Jubin Nautiyal for an evening of soulful music and romantic melodies."
    },
    {
      id: 9,
      name: "B Praak — Soulful Nights Tour",
      image: "/bpraak.jpeg",
      date: "May 1, 2024",
      time: "8:30 PM",
      location: "Jaipur",
      venue: "Sawai Mansingh Stadium",
      genre: "Punjabi & Bollywood",
      description: "Experience the emotional depth of B Praak's voice in this special concert."
    },
    {
      id: 10,
      name: "Amit Trivedi — Indie Vibes Tour",
      image: "/amit.jpeg",
      date: "May 5, 2024",
      time: "7:00 PM",
      location: "Mumbai",
      venue: "NSCI Dome",
      genre: "Indie & Bollywood",
      description: "A unique concert featuring Amit Trivedi's musical journey with live orchestra."
    },
    {
      id: 11,
      name: "Travis Scott — Utopia India Experience",
      image: "/travis.jpeg",
      date: "May 10, 2024",
      time: "9:00 PM",
      location: "Mumbai",
      venue: "Mahaalaxmi Racecourse",
      genre: "Hip Hop",
      description: "Experience the high-energy performance of Travis Scott in this exclusive India tour."
    },
    {
      id: 12,
      name: "Alan Walker — Walkerverse India Tour",
      image: "/alan.jpeg",
      date: "May 15, 2024",
      time: "8:00 PM",
      location: "Delhi",
      venue: "Jawaharlal Nehru Stadium",
      genre: "EDM",
      description: "Join Alan Walker for an electrifying EDM experience with stunning visuals."
    },
    {
      id: 13,
      name: "DJ Snake — India Tour: Disco Diaries",
      image: "/snake.jpeg",
      date: "May 20, 2024",
      time: "9:30 PM",
      location: "Bangalore",
      venue: "Palace Grounds",
      genre: "EDM",
      description: "Get ready for an unforgettable night with DJ Snake's electrifying beats."
    },
    {
      id: 14,
      name: "AP Dhillon — Out of This World India Tour",
      image: "/ap.jpeg",
      date: "May 25, 2024",
      time: "8:00 PM",
      location: "Punjab",
      venue: "Punjab Cricket Association Stadium",
      genre: "Punjabi Pop",
      description: "Experience AP Dhillon's unique blend of Punjabi and Western music."
    },
    {
      id: 15,
      name: "King — Champagne Talk India Tour",
      image: "/king.jpeg",
      date: "June 1, 2024",
      time: "7:30 PM",
      location: "Mumbai",
      venue: "Mahaalaxmi Racecourse",
      genre: "Indie Pop",
      description: "Join King for an evening of his chart-topping hits and new releases."
    }
  ];

  return (
    <motion.div
      className="concerts-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Upcoming Concerts</h2>
      <div className="concerts-grid">
        {concerts.map((concert) => (
          <motion.div
            key={concert.id}
            className="concert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="concert-image">
              <img src={concert.image} alt={concert.name} />
              <div className="concert-overlay">
                <span className="concert-genre">{concert.genre}</span>
              </div>
            </div>
            <div className="concert-content">
              <h3>{concert.name}</h3>
              <div className="concert-details">
                <p><Calendar size={16} /> {concert.date}</p>
                <p><Clock size={16} /> {concert.time}</p>
                <p><MapPin size={16} /> {concert.venue}, {concert.location}</p>
              </div>
              <p className="concert-description">{concert.description}</p>
              <a 
                href="https://youtu.be/dQw4w9WgXcQ?si=QoIt83uFH-8yUpyM"
                target="_blank"
                rel="noopener noreferrer"
                className="ticket-button"
              >
                <Ticket size={16} /> Get Tickets
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Concerts; 