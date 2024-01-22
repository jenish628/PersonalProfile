import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    <h6 style={{ color: '#4fd583' }}> Lets stay connected!!! </h6>
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link} aria-label={s.label}>
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
