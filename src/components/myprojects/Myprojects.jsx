import React from "react";
import "./myprojects.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Checkup E-commerce</h3>
          <small className="text-light">
            Firebase | ReactJs | TailwindCSS{" "}
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JimohSegun/checkup_e-commerce"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://checkup-ecommerce.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Modern Hook Bank </h3>
          <small className="text-light">React | TailwindCSS</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JimohSegun/React_HooBank_Project"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://bankhooknew.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Gericht Restaurant </h3>
          <small className="text-light">ReactJs | Js</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JimohSegun/modern_ui_ux_restaurant"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://gerirestaurant.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Chat GPT-3 </h3>
          <small className="text-light">ReactJs</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JimohSegun/React_modern_gpt3_website"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://modern3gpt.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Myprojects;
