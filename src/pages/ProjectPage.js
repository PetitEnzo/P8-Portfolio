import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../projetData';
import Pill from '../components/Pill';
import '../styles/pill.css';

const ProjectPage = () => {
  let { projectName } = useParams();
  const project = projectsData.find((p) => p.projectName === projectName);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{project.projectName}</h1>
      <p>{project.description}</p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          margin: '5px',
        }}
      >
        {project.tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>
      <img
        src={project.imageUrl}
        alt={project.projectName}
        style={{ width: '100%', maxWidth: '600px', margin: '20px 0' }}
      />
      <div style={{ marginTop: '10px' }}>
        {project.projectUrl && (
          <a href={project.projectUrl} target="_blank" rel="noreferrer">
            <Pill>Visitez le site</Pill>
          </a>
        )}
      </div>
      <div style={{ marginTop: '10px' }}>
        {project.projectCodeUrl && (
          <a href={project.projectCodeUrl} target="_blank" rel="noreferrer">
            <Pill>Visitez le code</Pill>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
