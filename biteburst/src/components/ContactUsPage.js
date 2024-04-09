import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/contactus.css';

export default function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contactUsRoutes/send-email', { name, email, message });
      toast.success('Email sent successfully!');
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send email. Please try again later.');
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-4xl mb-4 heading">Contact Us</h1>
      <div className="paint-stroke"></div>

      <section className="contactusPara2">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"> Name</label>{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="6"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="mbutton">
            Send Message
          </button>
        </form>
      </section>
      <div className="paint-stroke"></div>
     
      <ToastContainer />
    </section>
  );
}
