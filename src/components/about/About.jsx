import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import { FaProjectDiagram } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaProjectDiagram className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>

            <article className="about__card">
              <MdPeopleAlt className="about__icon" />
              <h5>Clients</h5>
              <small>9+ Clients</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Net Centric</li>
                  <li>Web Applications</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            A proactive, results-oriented web developer with a successful track
            record in creating innovative designs and features. Possessing solid
            expertise in HTML, CSS, JavaScript, and React, with a quick learning
            aptitude for new technologies. Demonstrating success in resolving
            complex code issues, I am a logical and results-driven professional
            dedicated to building user-focused websites, apps, and platforms. My
            aim is to enhance competitive advantage and drive revenue growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About