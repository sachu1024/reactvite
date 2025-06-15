// src/components/ContactForm.jsx
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
