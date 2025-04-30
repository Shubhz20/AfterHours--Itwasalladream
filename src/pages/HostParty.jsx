import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Music, Clock } from 'lucide-react';
import '../styles/Home.css';

const HostParty = () => {
  const [formData, setFormData] = useState({
    partyName: '',
    date: '',
    time: '',
    location: '',
    capacity: '',
    musicType: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          Host Your Party
        </motion.h1>
        <motion.p 
          className="landing-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Create an unforgettable night
        </motion.p>

        <motion.div 
          className="host-form-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="host-form">
            <div className="form-group">
              <label>
                <Music size={20} />
                <span>Party Name</span>
              </label>
              <input
                type="text"
                name="partyName"
                value={formData.partyName}
                onChange={handleChange}
                placeholder="Enter your party name"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  <Calendar size={20} />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Clock size={20} />
                  <span>Time</span>
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>
                <MapPin size={20} />
                <span>Location</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter venue address"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  <Users size={20} />
                  <span>Capacity</span>
                </label>
                <input
                  type="number"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                  placeholder="Max guests"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Music size={20} />
                  <span>Music Type</span>
                </label>
                <select
                  name="musicType"
                  value={formData.musicType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select music type</option>
                  <option value="house">House</option>
                  <option value="techno">Techno</option>
                  <option value="hiphop">Hip Hop</option>
                  <option value="bollywood">Bollywood</option>
                  <option value="mixed">Mixed</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>
                <span>Description</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your party..."
                rows="4"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Party
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default HostParty;