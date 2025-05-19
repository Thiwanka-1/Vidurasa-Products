// src/components/Header.jsx
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo2.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Our Products', to: '/products' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Widurasa Logo" className="h-14" />
          <span className="ml-3 text-2xl font-semibold text-black">
            Widurasa Products
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ label, to }) => {
            const isActive = location.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`
                    font-medium
                    hover:underline
                    underline-offset-4
                    ${isActive ? 'underline' : ''}
                  `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {links.map(({ label, to }) => {
              const isActive = location.pathname === to;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block py-2
                      font-medium
                      hover:underline
                      underline-offset-4
                      ${isActive ? 'underline' : ''}
                    `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
