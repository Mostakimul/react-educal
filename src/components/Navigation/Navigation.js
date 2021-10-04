import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="flex justify-between items-center container mx-auto">
      <div>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="flex justify-between items-center">
        <div className="mr-20 font-medium">
          <NavLink to="/home" className="mx-1.5">
            Home
          </NavLink>
          <NavLink to="/about" className="mx-1.5">
            About
          </NavLink>
          <NavLink to="/services" className="mx-1.5">
            Services
          </NavLink>
          <NavLink to="/contact" className="mx-1.5">
            Contact
          </NavLink>
        </div>
        <div>
          <button className="bg-blue-600 py-1.5 px-3 font-medium text-white rounded">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
