import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
        <li
  style={{
    cursor: "pointer",
    borderBottom: 0,
    fontFamily: "Raleway, Helvetica, sans-serif",
    fontSize: "0.7em",
    fontWeight: 400,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
  }}
  onClick={() => window.open("https://medium.com/@jenish2119")}
>
  EXPLORE BLOGS
</li>      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
