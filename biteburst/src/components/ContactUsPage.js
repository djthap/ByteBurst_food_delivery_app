import React from 'react'
import "../css/contactus.css"

export default function ContactUsPage() {
  return (
    <section className="mt-8">
      <h1 className="text-center text-4xl mb-4 heading">Contact Us</h1>
         <div className="paint-stroke"></div>
    
      <section className="contactusPara2">
        <form>
          <div className="form-group">
            <label htmlFor="name"> Name</label> &nbsp;&nbsp;&nbsp;&nbsp;
            <input  type="text"   className="form-control"   id="name"  placeholder="Enter your name"  required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input    type="email"     className="form-control" id="email"  placeholder="Enter your email" required  />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea  className="form-control"   id="message"  rows="6" placeholder="Write your message here..." required ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
      <div className="paint-stroke"></div>
      <section className="contactusPara3 alignLeft">
        <div className="contact-info">
          <h1 className="head2">Phone Number</h1>
          <p className="para2">+123 456 7890</p>
          <h1 className="head2">Email Address</h1>
          <p className="para2">contact@biteburst.com</p>
        </div>
        <div className="social-media">
          <h1 className="head2">Follow Us</h1>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <i className="fa fa-twitter" aria-hidden="true"></i> {/* Twitter link to be added */}
        </div>
      </section>
    </section>
  )
}
