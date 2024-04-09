import React from 'react';
import Navbar from './Navbar';
import logo from '../assets/terminal-window.svg';
import plane from '../assets/paper-plane-tilt.svg';
import Pill from './Pill';
import '../styles/app.css';

const Layout = ({ children }) => {
  const sendEmail = () => {
    window.open('mailto:enzopetit33800@gmail.com');
  };

  return (
    <div className="appBackground">
      <div className="header">
        <div className="headerContent">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="npmEmbauche">npm embauche</h1>
        </div>
        <Navbar />
      </div>
      {children}
      <hr className="mail-divider" />
      <div className="mail">
        <div className="mail-header">
          <h2>Intéressé pour travailler ensemble?</h2>
          <Pill className="toMail" onClick={sendEmail}>
            Envoyez-moi un message <img src={plane} alt="avion en papier" />
          </Pill>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer">
        <div className="footer-left">
          <p>2024 Enzo Petit</p>
        </div>
        <div className="footer-right">
          <a
            href="https://github.com/PetitEnzo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/enzopetit33/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
