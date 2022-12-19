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
            I am 3rd BTech student at IIT BHU (Varanasi). My interest lies in the
            field of Software development. I love Problem Solving and I have a
            decent level of knowledge in Data Structures and Algorithms. I
            regularly practise questions on online Coding platforms like
            Codeforces and Interviewbit.
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
