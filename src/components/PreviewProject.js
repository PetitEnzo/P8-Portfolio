import React from 'react';
import { Link } from 'react-router-dom';

const cardContainerStyle = {
  padding: '2px 16px',
};

const cardImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

const cardStyle = {
  width: '300px',
  margin: '20px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  transition: '0.3s',
};

const ProjectCard = ({ imageUrl, projectName, projectId }) => (
  <Link
    to={`/project/${projectName}`}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <div style={cardStyle}>
      <img src={imageUrl} alt={projectName} style={cardImageStyle} />
      <div style={cardContainerStyle}>
        <h4>{projectName}</h4>
      </div>
    </div>
  </Link>
);

export default ProjectCard;
