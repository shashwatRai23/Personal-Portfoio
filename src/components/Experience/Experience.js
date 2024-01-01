import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Industry Experience</h5>
      <h2>My Internship</h2>
      <div className="container experience__container">
        <div className="experience__content">
          <p>
            I have done my Internship as frontend developer at{" "}
            <b>Orpton Esports Ltd.</b> from May 2022 to July 2022.
            My task was to develop dynamic and responsive web pages for the
            company using React.js. Used Redux.js for state management to
            efficiently manage and share data across components and also
            enhanced the app performance through the application of lazy loading
            and code splitting and integrated RESTful APIs into the React.js
            frontend, utilizing Axios to fetch and display real-time data.
          </p>
          <a href="https://orpton-46eac.web.app/" target="_blank" className="btn btn-primary">
            Link to my Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
