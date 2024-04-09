import React from 'react';
import ProjectCard from '../components/PreviewProject';

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
};

const Projets = () => {
  const projects = [
    {
      imageUrl: require('../assets/MonVieuxGrimoire.png'),
      projectName: 'Mon Vieux Grimoire',
    },
    {
      imageUrl: require('../assets/Kasa.png'),
      projectName: 'Kasa',
    },
    {
      imageUrl: require('../assets/NinaCarducci.png'),
      projectName: 'Nina Carducci',
    },
    {
      imageUrl: require('../assets/SophieBluel.png'),
      projectName: 'Sophie Bluel',
    },
    {
      imageUrl: require('../assets/Booki.png'),
      projectName: 'Booki',
    },
  ];

  return (
    <div style={containerStyle}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imageUrl={project.imageUrl}
          projectName={project.projectName}
        />
      ))}
    </div>
  );
};

export default Projets;
