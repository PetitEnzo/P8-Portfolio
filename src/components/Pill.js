import React from 'react';

import '../styles/pill.css';

const Pill = ({ children, className, onClick }) => {
  return (
    <span className={`pill ${className || ''}`} onClick={onClick}>
      {children}
    </span>
  );
};

export default Pill;
