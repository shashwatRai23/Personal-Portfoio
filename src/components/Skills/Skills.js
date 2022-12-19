import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container skills__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon"/>
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon"/>
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon"/>
              <div>
                <h4>Mongoose JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon"/>
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
