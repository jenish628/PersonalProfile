/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [phoneValidationMessage, setPhoneValidationMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && value.trim() !== '') {
      const isValidPhoneNumber = /^\d+$/.test(value);
      setPhoneValidationMessage(isValidPhoneNumber ? '' : 'Please enter a valid phone number.');
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler to handle form submission
  const handleSubmit = () => {
    if (phoneValidationMessage) {
      return;
    }
    // Assuming a hypothetical server endpoint URL for form submission
    const serverEndpoint = 'https://example.com/submitForm';

    // Sending form data to the server using the fetch API
    fetch(serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server (if needed)
        if (data.success) {
          setSubmissionStatus('success');
        } else {
          setSubmissionStatus('error');
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setSubmissionStatus('error');
      });
  };

  return (
    <form>
      <h1 style={{ color: '#e34b4b' }}>Share your thoughts using the form below.</h1>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Phone (Optional):</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      {phoneValidationMessage && (
      <span style={{ color: 'red', marginLeft: '10px' }}>{phoneValidationMessage}</span>
      )}

      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      {submissionStatus === 'success' && (
        <p style={{ color: 'green' }}> Form submitted successfully!!! </p>
      )}

      {submissionStatus === 'error' && (
      <p style={{ color: 'red' }}> Error Submitting form. Please try again later!!! </p>
      )}
    </form>
  );
};

export default Form;
