import React from 'react'
import "./Footer.css"
import {BsCodeSlash} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        PORTFOLIO
      </a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><FiInstagram/></a>
        <a href='https://twitter.com'><IoLogoTwitter/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; My Portfolio. All rights reserved</small>
      </div>
    </footer>
  ) 
}

export default Footer