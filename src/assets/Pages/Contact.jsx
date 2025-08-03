import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../style/style.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o1eo6wj",      // replace with your service ID
        "template_u5gqzxf",     // replace with your template ID
        form.current,
        "9lAc8dOKsC62UPejO"       // replace with your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="contact-h1">Get In Touch</h1>
      <h2 className="contact-header">
        We're here to help! Reach out using the form below or via our contact details.
      </h2>

      <div className="contact-content">
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" required />

            <label>Email Address</label>
            <input type="email" name="user_email" required />

            <label>Message</label>
            <textarea name="message" rows="8" required />

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Our Address</h3>
          <p>Bhubaneswar, Odisha</p>

          <h3>Call Us</h3>
          <a href="tel:+918093778526">+91 8093778526</a>

          <h3>Email Us</h3>
          <a href="mailto:info@researchedit.in">info@researchedit.in</a>

          <h3>Find Us Here</h3>
          <div className="contact-map">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14722.633168697058!2d85.8198796!3d20.2960581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909e1e9c0f2ef%3A0x29b7ea39eafeb8f5!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v171234567890"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
