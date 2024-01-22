import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
import Form from './Form';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Jenish Ghimire via email @ hi@miu.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>       <h5 style={{ color: '#5959d2' }}> Feel free to get in touch. </h5>You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
    <Form />
  </Main>
);

export default Contact;
