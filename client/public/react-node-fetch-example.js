// React Fetch Example for Node.js Backend /send-mail endpoint
// Complete implementation with proper success and error handling

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSending(true);
    
    try {
      const response = await fetch('/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      // Handle HTTP errors
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
NPM
        
        // Different error messages based on status code
        switch (response.status) {
          case 400:
            throw new Error(errorData.message || 'Invalid form data. Please check your inputs.');
          case 429:
            throw new Error('Too many requests. Please try again later.');
          case 500:
            throw new Error('Server error. Please try again later.');
          default:
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
      }

      // Parse successful response
      const data = await response.json();
      
      // Handle success
      if (data.success) {
        alert('Message sent successfully! We\'ll get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({});
      } else {
        // Handle API-level errors (success: false)
        throw new Error(data.message || 'Failed to send message');
      }
      
    } catch (error) {
      console.error('Contact form error:', error);
      
      // Handle different types of errors
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        errorMessage = 'Network error. Please check your internet connection and try again.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      alert(errorMessage);
      
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
            disabled={isSending}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            disabled={isSending}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSending}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
            disabled={isSending}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button type="submit" disabled={isSending} className="submit-btn">
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

/*
// Alternative implementation with toast notifications instead of alerts:

// Replace the alert() calls with:
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// In success case:
toast.success('Message sent successfully! We\'ll get back to you soon.');

// In error case:
toast.error(errorMessage);

// Remember to wrap your app with <ToastContainer />:
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ContactForm />
      <ToastContainer position="top-right" />
    </>
  );
}

// Expected Node.js backend response format:
// Success: { success: true, message: "Message sent successfully" }
// Error: { success: false, message: "Error description" }
*/
