import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const QuickStartForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef();

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_o1eo6wj',        // Your service ID
      'template_u5gqzxf',       // Your template ID
      form.current,
      '9lAc8dOKsC62UPejO'       // Your public key
    ).then((result) => {
      alert("Message sent successfully!");
      form.current.reset();
      closeForm();
    }, (error) => {
      alert("Failed to send. Try again.");
      console.error("EmailJS Error:", error);
    });
  };

  return (
    <div>
      <button onClick={openForm}>Quick Start – Submit Your Requirement</button>

      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closeForm}>&times;</span>
            <form ref={form} onSubmit={sendEmail}>
              <h3>Quick Start – Submit Your Requirement</h3>

              <textarea name="message" placeholder="Paste your text..." required />

              <select name="service" required>
                <option value="">Select service</option>
                <option>Editing and Language enhancement</option>
                <option>Plagiarism and AI check & remove</option>
                <option>Journal selection, Formatting, Submission</option>
                <option>Research paper writing assistance</option>
                <option>Data analysis and Figure development</option>
                <option>Pre-Submission Peer review</option>
              </select>

              <input type="email" name="email" placeholder="Email" required />

              <input type="text" name="whatsapp" placeholder="WhatsApp (optional)" />

              <input
                type="text"
                name="filelink"
                placeholder="Paste Google Drive / Dropbox File Link"
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickStartForm;
