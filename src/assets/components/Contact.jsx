import React from "react";

function Contact() {
  return (
    <div className="container" id="contacts">
      <h1 className="heading">Contact me</h1>
      <span className="subtext">
        Please fill out the form below to contact me
      </span>
      <div className="form-wrapper">
        <form className="contact-form" action="https://getform.io/f/agdlklqb" method="POST">
          <h1 className="form-title">Send Your Message</h1>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email address"
              name="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              placeholder="Enter your Query"
              name="message"
            />
          </div>

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
