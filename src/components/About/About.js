import React from "react";
import "./About.css";
import me from "../../assets/about.svg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={me} alt="about_me_image" />
        </div>
        <div className="about__content">
          <p>
            I am Final Year BTech student at IIT BHU (Varanasi). My interest lies in the
            field of Software development. I love Problem Solving and I have a
            decent level of knowledge in Data Structures and Algorithms and solved more than 1000 problems on different coding platforms. I have worked on various projects and have a good knowledge of ReactJS, HTML, CSS , Javascript etc. I am a quick learner and I am always ready to learn new things.  I have a decent understanding of CS topics like Operating Systems, DBMS, Computer Networks, OOPs, etc. I am looking for a full-time opportunity in the field of Software Development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
