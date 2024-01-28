import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
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

    console.log(`form data`, formData)
  };

  // Event handler to handle form submission
  const handleSubmit = () => {
    if (phoneValidationMessage) {
      return;
    }

    axios.post('https://ooxlu7sbsky2hee7oczpgdxrq40ifoqz.lambda-url.us-east-2.on.aws/',formData)
      .then(data => {
        alert('successfully submitted data')

        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      })
      .catch(err => console.error(err))

  };

  return (
    <form>
      <h1 style={{ color: '#e34b4b' }}>Share your thoughts using the form below.</h1>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="name"
        value={formData.name}
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
