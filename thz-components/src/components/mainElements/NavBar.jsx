import React from 'react';
import NavLink from '../uiElements/NavLink';

const NavBar = () => {

  return (
    <nav className="w-screen flex align-middle justify-center h-14 bg-grey-800 bg-opacity-30 backdrop-blur-lg p-4">
      <div className="container mx-auto flex justify-between items-center pr-6 lg:pr-0">
        {/* Logo */}
        <div className="text-white text-lg font-bold">
          <a href="#">My Components</a>
        </div>

        {/* Hamburger Menu */}
        <NavLink href="https://tharhtetzan.netlify.app/helloworld" className="hover:bg-opacity-10">Contact</NavLink>
        
      </div>
    </nav>
  );
};

export default NavBar;
