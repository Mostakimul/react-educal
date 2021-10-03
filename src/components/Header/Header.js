import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gray-300 text-center py-3">
      <NavLink to="/home" className="mx-1">
        Home
      </NavLink>
      <NavLink to="/about" className="mx-1">
        About
      </NavLink>
      <NavLink to="/services" className="mx-1">
        Services
      </NavLink>
      <NavLink to="/contact" className="mx-1">
        Contact
      </NavLink>
    </div>
  );
};

export default Header;
