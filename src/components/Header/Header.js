import React from "react";
import "./Header.css";
import Action from "./Action";
import avatar from "../../assets/header.svg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shashwat Rai</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Action />
        <HeaderSocials />
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
