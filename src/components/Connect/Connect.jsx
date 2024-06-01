import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Connect.css';


function Connect() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    emailjs.send(serviceId, templateId, {
      from_name: formData.email,
      to_name: formData.subject,
      message: formData.message,
    }, publicKey).then((response) => {
      alert('Email sent successfully!');
    })
      .catch((err) => {
        console.error('Failed to send email:', err);
        alert('Failed to send email. Please try again later.');
      });

    setFormData({
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className='main-connect-container'>

      <div className="connect-container">
        <h2>Connect with Me</h2>
        <form className="connect-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
}

export default Connect;
