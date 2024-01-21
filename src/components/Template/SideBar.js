import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>JENISH GHIMIRE</h2>
        <p><a href="mailto:jenish.ghimire@miu.edu">jenish.ghimire@miu.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jenish. I&apos;m currently pursuing master&apos;s degree in <a href="https://www.miu.edu/">Maharishi International University</a>, Fairfield, IOWA.
        and woking in a  <a href="https://www2.deloitte.com/us/en.html">Deloitte</a> as a Java Developer. Previously,
        I have worked in a DB Workshop and IT Support Pvt. Ltd, an IT company based in Nepal.
        {/* {' '} <a href="https://planet.com">Planet</a> and <a href="https://facebook.com">Facebook</a>. */}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; jenish ghimire <Link to="/">jenish.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
