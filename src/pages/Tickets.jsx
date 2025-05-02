import React, { useState } from 'react';
import { ticketData } from '../data/ticketData';
import '../styles/Tickets.css';

const Tickets = () => {
  const [tickets, setTickets] = useState(ticketData);
  const [showListingForm, setShowListingForm] = useState(false);
  const [formData, setFormData] = useState({
    eventName: '',
    ticketType: '',
    price: '',
    eventDate: '',
    sellerName: '',
    image: '',
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [formErrors, setFormErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    const requiredFields = ['eventName', 'ticketType', 'price', 'eventDate', 'sellerName'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = 'This field is required';
      }
    });
    
    // Validate price
    if (formData.price && isNaN(formData.price)) {
      errors.price = 'Price must be a number';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Create new ticket with a random image from existing tickets
      const randomImage = ticketData[Math.floor(Math.random() * ticketData.length)].image;
      
      const newTicket = {
        id: tickets.length + 1,
        eventName: formData.eventName,
        ticketType: formData.ticketType,
        price: parseFloat(formData.price),
        eventDate: formData.eventDate,
        seller: formData.sellerName,
        image: formData.image || randomImage
      };
      
      setTickets([...tickets, newTicket]);
      setShowListingForm(false);
      setFormData({
        eventName: '',
        ticketType: '',
        price: '',
        eventDate: '',
        sellerName: '',
        image: '',
      });
    }
  };
  
  const filteredTickets = tickets.filter(ticket => 
    ticket.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.ticketType.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="tickets-page">
      <div className="page-header">
        <h1 className="page-title">Buy & Sell <span>Tickets</span></h1>
        <p className="page-subtitle">Your marketplace for event tickets</p>
      </div>
      
      <div className="tickets-actions">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search for events or ticket types..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <button 
          className="list-ticket-button"
          onClick={() => setShowListingForm(!showListingForm)}
        >
          {showListingForm ? 'Cancel' : 'List My Ticket'}
        </button>
      </div>
      
      {showListingForm && (
        <div className="ticket-form-container">
          <form className="ticket-form" onSubmit={handleSubmit}>
            <h3>List Your Ticket</h3>
            
            <div className="form-group">
              <input 
                type="text" 
                id="eventName" 
                name="eventName" 
                value={formData.eventName}
                onChange={handleChange}
                className={formErrors.eventName ? 'error' : ''}
                required
              />
              <label htmlFor="eventName" className={formData.eventName ? 'active' : ''}>
                Event Name
              </label>
              {formErrors.eventName && <span className="error-message">{formErrors.eventName}</span>}
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                id="ticketType" 
                name="ticketType" 
                value={formData.ticketType}
                onChange={handleChange}
                className={formErrors.ticketType ? 'error' : ''}
                required
              />
              <label htmlFor="ticketType" className={formData.ticketType ? 'active' : ''}>
                Ticket Type
              </label>
              {formErrors.ticketType && <span className="error-message">{formErrors.ticketType}</span>}
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  id="price" 
                  name="price" 
                  value={formData.price}
                  onChange={handleChange}
                  className={formErrors.price ? 'error' : ''}
                  required
                />
                <label htmlFor="price" className={formData.price ? 'active' : ''}>
                  Price (₹)
                </label>
                {formErrors.price && <span className="error-message">{formErrors.price}</span>}
              </div>
              
              <div className="form-group">
                <input 
                  type="date" 
                  id="eventDate" 
                  name="eventDate" 
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={formErrors.eventDate ? 'error' : ''}
                  required
                />
                <label htmlFor="eventDate" className="active">
                  Event Date
                </label>
                {formErrors.eventDate && <span className="error-message">{formErrors.eventDate}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                id="sellerName" 
                name="sellerName" 
                value={formData.sellerName}
                onChange={handleChange}
                className={formErrors.sellerName ? 'error' : ''}
                required
              />
              <label htmlFor="sellerName" className={formData.sellerName ? 'active' : ''}>
                Your Name
              </label>
              {formErrors.sellerName && <span className="error-message">{formErrors.sellerName}</span>}
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                id="image" 
                name="image" 
                value={formData.image}
                onChange={handleChange}
              />
              <label htmlFor="image" className={formData.image ? 'active' : ''}>
                Image URL (Optional)
              </label>
            </div>
            
            <button type="submit" className="submit-button">
              List Ticket
              <span className="button-glow"></span>
            </button>
          </form>
        </div>
      )}
      
      <div className="tickets-grid">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <div className="ticket-image" style={{ backgroundImage: `url(${ticket.image})` }}>
                <div className="ticket-overlay"></div>
                <div className="ticket-date">{ticket.eventDate}</div>
              </div>
              <div className="ticket-details">
                <h3 className="ticket-event">{ticket.eventName}</h3>
                <div className="ticket-info">
                  <p className="ticket-type">{ticket.ticketType}</p>
                  <p className="ticket-seller">Seller: {ticket.seller}</p>
                </div>
                <div className="ticket-footer">
                  <span className="ticket-price">₹{ticket.price}</span>
                  <a 
                    // href="https://youtube.com/shorts/HDDCtBhuzgc?si=clkfIAsrFD7wrCDU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="buy-button"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-tickets">
            <p>No tickets found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;