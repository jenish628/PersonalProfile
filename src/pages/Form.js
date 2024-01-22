/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const Form = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Event handler to update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler to handle form submission
  const handleSubmit = () => {
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
    //   .then((data) => {
    //     // Handle the response from the server (if needed)
    //     console.log('Form submitted successfully:', data);
    //   })
      .catch((error) => {
        console.error('Error submitting form:', error);
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
    </form>
  );
};

export default Form;
