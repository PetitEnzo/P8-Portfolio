import React from 'react';
import Portrait2 from '../assets/EnzoPetit1.jpg';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-main">
      <main>
        <div>
          <h1>À Propos</h1>
          <p style={{ fontSize: '32px' }}>
            Merci de vous être arrêté. <br />
            Découvrez mon parcours professionnel.
          </p>
          <img className="about-img" alt="Enzo Petit" src={Portrait2} />
        </div>

        <div className="section-flex">
          <h2 className="section-title">Background</h2>
          <p className="content">
            De ma formation initiale en tant que technicien du son à mes dix
            années d'expérience dans l'animation socioculturelle, j'ai eu le
            privilège de partager ma passion pour le numérique avec les autres.
            Cependant, l'envie de créer et de contribuer de manière plus
            tangible à cet univers m'a finalement poussé à franchir le pas pour
            devenir développeur. C'est ainsi que j'ai entrepris ce voyage vers
            le monde du développement, où chaque projet est une nouvelle
            aventure et une nouvelle occasion de donner vie à mes idées. Je suis
            passionné par les défis que ce domaine offre et déterminé à
            continuer d'apprendre et de grandir en tant que développeur.
          </p>
        </div>

        <div className="section-flex">
          <h2 className="section-title">Education</h2>
          <p className="content">
            BAC+2 Developpeur Web (RNCP), Titre professionnel responsable
            d'espace de médiation numérique, BPJEPS animation socioculturelle
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
