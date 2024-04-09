// Dans Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navlinks = [
  { path: '/', name: 'Accueil' },
  { path: '/Projets', name: 'Projets' },
  { path: '/About', name: 'A Propos' },
];
const Navbar = () => {
  return (
    <nav>
      <ul>
        {Navlinks.map((link) => (
          <li>
            <NavLink
              to={link.path}
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundColor: 'purple',
                      color: 'white',
                      borderRadius: '10px',
                    }
                  : undefined
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
