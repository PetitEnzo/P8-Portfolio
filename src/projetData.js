import monVieuxGrimoireImage from './assets/MonVieuxGrimoire.png';
import bookiImage from './assets/Booki.png';
import ninaCarducciImage from './assets/NinaCarducci.png';
import kasaImage from './assets/Kasa.png';
import sophieBluelImage from './assets/SophieBluel.png';

const projectsData = [
  {
    projectName: 'Mon Vieux Grimoire',
    description:
      "Projet réalisé dans le cadre de ma formation de développeur web chez Openclassroom, axé sur la réalisation de la partie Backend d'un site de notation de livres.",
    tags: ['React', 'Express Js', 'JavaScript', 'MongoDb', 'Node Js'],
    imageUrl: monVieuxGrimoireImage,
    projectCodeUrl: 'https://github.com/PetitEnzo/P7-Mon-vieux-Grimoire',
  },
  {
    projectName: 'Booki',
    description:
      "Dans le cadre de ma formation Openclassrooms pour devenir développeur web, j'ai réalisé un projet visant à explorer et à maîtriser les bases du développement web, incluant le HTML et le CSS. Ce projet consistait à concevoir la partie frontend d'une plateforme de réservation d'hébergement en ligne appelée Booki.",
    tags: ['Html', 'CSS', 'User Testing'],
    imageUrl: bookiImage,
    projectUrl: 'https://projet-booki-azure.vercel.app/',
    projectCodeUrl: 'https://github.com/PetitEnzo/Projet-Booki',
  },
  {
    projectName: 'Sophie Bluel',
    description:
      "Projet réalisé dans le cadre de ma formation de développeur web Openclassroom, axé sur la prise en main de JavaScript pour développer des pages web dynamiques. Cette application présente les projets d'une architecte d'intérieur, avec une gestion des données via une api pour une génération dynamique de contenu. Ceci permet une maintenance simplifiée grâce à un espace administrateur dédié.",
    tags: ['Html', 'CSS', 'JavaScript'],
    imageUrl: sophieBluelImage,
    projectCodeUrl:
      'https://github.com/PetitEnzo/Portfolio-architecte-sophie-bluel',
  },
  {
    projectName: 'Kasa',
    description:
      'Projet réalisé dans le cadre de ma formation de développeur web chez Openclassroom, axé sur la découverte de React, des hooks, du système de router et des composants.',
    tags: ['Html', 'SCSS', 'JavaScript', 'React'],
    imageUrl: kasaImage,
    projectUrl: 'https://p6-kasa-alpha.vercel.app/',
    projectCodeUrl: 'https://github.com/PetitEnzo/P6-Kasa',
  },
  {
    projectName: 'Nina Carducci',
    description:
      "Projet réalisé dans le cadre de ma formation de développeur web chez Openclassroom, axé sur l'optimisation d'un site web pour améliorer ses performances, son référencement SEO et son accessibilité.",
    tags: ['Debug', 'Optimisation SEO', 'Accesibilité'],
    imageUrl: ninaCarducciImage,
    projectUrl: 'https://p5-nina-carducci.vercel.app/',
    projectCodeUrl: 'https://github.com/PetitEnzo/P5-Nina-Carducci',
  },
];

export default projectsData;
