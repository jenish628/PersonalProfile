import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Jenish Ghimire's personal website. Pursuing Master's in CS from MIU, "
    + 'Solution Specialist, working as a JAVA DEVELOPER in Deloitte.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            <strong style={{ color: '#708090' }}> Welcome to my personal profile website, </strong>
            where I showcase a comprehensive overview of my professional journey.
            Explore my educational background, diverse projects,
            and technical skills in Software Development.
            I invite you to navigate through pages and discover more about my story.
            Connect with me through the provided links and Let&apos;s explore
            the possibilities together.
          </p>
          {/* <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript for the personal site.
          </p> */}
        </div>
      </header>
      <p>  <strong> Welcome to my website. </strong> Please feel free to read more <em> <Link to="/about">about me</Link>, </em>
        or you can check out my {' '}
        <em> <Link to="/resume">resume</Link>, {' '} </em>
        <em> <Link to="/projects">projects</Link>, {' '} </em> view
        <em> <Link to="/stats">site statistics</Link>, {' '} </em> or
        <em> <Link to="/contact">contact</Link> me. </em>
      </p>
      <p> Source available <strong> <a href="https://github.com/jenish628/PersonalProfile.git">here</a>. </strong></p>
      <p>  <strong style={{ color: '#556B2F' }}> Thanks for visiting. </strong> </p>
    </article>
  </Main>
);

export default Index;
