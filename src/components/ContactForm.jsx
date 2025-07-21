// ContactForm.jsx
import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const { data, error } = await supabase.from('contacts').insert([formData]);

    if (error) {
      console.error(error);
      setStatus('Failed to send message.');
    } else {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 rounded"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 rounded h-28"
        required
      ></textarea>
      <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 px-4 rounded">
        Send Message
      </button>
      <p className="text-sm text-gray-200">{status}</p>
    </form>
  );
};

export default ContactForm;
