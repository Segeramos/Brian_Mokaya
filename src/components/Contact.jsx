// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You could integrate with an API or email service here
    console.log("Submitting contact form:", formData);
    setSubmitted(true);
    // Reset form or leave as is
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-12 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-accent mb-6 text-center">Get In Touch</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            name="message"
            placeholder="Type your message here"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
          <button
            type="submit"
            className="bg-accent text-white py-2 px-6 rounded-md hover:bg-accent-dark transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-lg font-medium text-text">Thanks for submitting!</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
