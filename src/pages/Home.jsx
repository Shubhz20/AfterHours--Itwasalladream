import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music, Calendar, Activity } from 'lucide-react';
import CitySelector from '../components/CitySelector';
import PastVenuesReels from '../components/PastVenuesReels';
import PastEventsReels from '../components/PastEventsReels';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCityChange = (city) => {
    setSelectedCity(city);
    sessionStorage.setItem('selectedCity', city);
  };

  const navOptions = [
    {
      title: 'Explore Clubs',
      description: 'Discover the hottest clubs in your city',
      icon: <Music size={64} />,
      path: '/parties'
    },
    {
      title: 'Meet the Artists',
      description: 'Get to know the artists behind the music',
      icon: <Activity size={64} />,
      path: '/concerts'
    },
    {
      title: 'Join a Party',
      description: 'Find and join exclusive parties near you',
      icon: <Calendar size={64} />,
      path: '/tickets'
    }
  ];

  return (
    <div className="home">
      {/* Video Background */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-nightlife-in-the-city-1080.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      <div className="city-modal">
        <CitySelector onCityChange={handleCityChange} />
      </div>

      <div className="content">
        <div className="logo-container">
          <h1 className="logo-text">AFTERHOURS</h1>
          <p className="tagline">Where the night comes alive</p>
          <p className="dream-quote">"It was all a dream..."</p>
        </div>

        {/* Interactive Navigation Options */}
        <div className="interactive-nav" ref={ref}>
          {navOptions.map((option, index) => (
            <motion.div
              key={index}
              className="nav-option"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              onClick={() => navigate(option.path)}
            >
              <div className="nav-icon">{option.icon}</div>
              <h2 className="nav-title">{option.title}</h2>
              <p className="nav-description">{option.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Past Venues Reels */}
        <PastVenuesReels />

        {/* Past Successful Events */}
        <PastEventsReels />
      </div>
    </div>
  );
};

export default Home;