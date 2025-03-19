import React, { useState } from 'react';
import menuIcon from "/assets/menu.svg";
import closeIcon from "/assets/close.svg";
import { navLinks } from '../constants';

const NavItems = () => {
  return (
    <ul className="flex flex-col gap-4 sm:flex-row sm:gap-8">
      {navLinks.map(({ id, href, name }) => (
        <li key={id}>
          <a 
            href={href} 
            className="text-neutral-400 hover:text-white transition-colors"
            onClick={() => {}}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            shreeya
          </a>
          <button 
            onClick={toggleMenu} 
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" 
            aria-label="Toggle menu"
          >
            <img src={isOpen ? closeIcon : menuIcon} alt="toggle" className="w-6 h-6" />
          </button>
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 z-40 transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:hidden`}
      >
        <nav className="p-10">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
