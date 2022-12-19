import React from "react";
import CV from "../../assets/CV.pdf";

const Action = () => {
  return (
    <div className="action">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  );
};

export default Action;
