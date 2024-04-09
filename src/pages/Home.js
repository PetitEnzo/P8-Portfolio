import React from 'react';
import Pill from '../components/Pill';
import portrait from '../assets/Portrait1.png';
import logo from '../assets/microphone-stage.svg';
import logoH from '../assets/terminal-window.svg';
import logoS from '../assets/trophy.svg';
import logoP from '../assets/strategy.svg';
import js from '../assets/file-js.svg';
import mongo from '../assets/leaf.svg';
import react from '../assets/atom.svg';
import node from '../assets/graph.svg';
import git from '../assets/github-logo.svg';
import arrow from '../assets/arrow-right.svg';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <header className="hero">
        <div className="content">
          <div className="content-title">
            <h1 className="title">Hello , je m'appelle Enzo Petit</h1>
            <h2>Développeur web junior passionné basé à Bordeaux !</h2>
          </div>

          <div className="roles">
            <Pill>{'</>'} Développeur</Pill>
            <Pill>
              <img src={logo} alt="Logo" className="mic" />
              Gestionnaire de projet
            </Pill>
          </div>
        </div>

        <img alt="Enzo Petit" className="portrait" src={portrait} />
      </header>

      <div className="skills">
        <div className="hard-skill">
          <div className="logo-container">
            <img src={logoH} alt="logo" className="logo-hard-skills" />
          </div>
          <h3>Hard Skills</h3>
          <ul className="bullet-list">
            <li>
              <img src={js} alt="Logo HTML" className="skill-logo" />
              JavaScript
            </li>
            <li>
              <img src={mongo} alt="Logo HTML" className="skill-logo" />
              MongoDb
            </li>
            <li>
              <img src={react} alt="Logo HTML" className="skill-logo" />
              React
            </li>
            <li>
              <img src={node} alt="Logo HTML" className="skill-logo" />
              Node.Js
            </li>
            <li>
              <img src={git} alt="Logo HTML" className="skill-logo" />
              Git
            </li>
          </ul>
        </div>
        <div className="soft-skill">
          <img src={logoS} alt="logo" className="logo-soft-skills" />

          <h3>Soft Skills</h3>
          <p className="soft-skill-paragraph">
            Patient, autonome et polyvalent, je suis également capable de
            m'adapter rapidement aux nouveaux défis et de collaborer
            efficacement en équipe.
          </p>
        </div>
        <div className="perspective">
          <img src={logoP} alt="logo" className="logo-perspective-skills" />

          <h3>Perspective</h3>
          <p className="perspective-paragraph">
            Curieux, je m'efforce d'explorer et d'apprendre constamment, en
            effectuant une veille régulière, afin d'améliorer mes compétences
            dans le domaine du développement.
          </p>
        </div>
      </div>
      <div className="projects">
        <div className="project-header">
          <h2>Mes projets</h2>
          <Link to="/Projets" className="toProject">
            <Pill className="toProject">
              Tous mes projets{' '}
              <img src={arrow} alt="fleche" className="logo-pill" />
            </Pill>
          </Link>
        </div>
        <p>
          Découvrez mes projets, réalisés dans le cadre de mes études, pour des
          clients ou pour moi-même.
        </p>
      </div>
    </div>
  );
};

export default Home;
