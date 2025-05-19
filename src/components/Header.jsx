import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from './logo2.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Products', href: '#products' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
  <img src={logo} alt="Widurasa Logo" className="h-14" />
  <span className="ml-3 text-2xl font-semibold text-black">
    Vidurasa Products
  </span>
</a>


        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-black hover:text-gray-600 font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="block text-black hover:text-gray-600 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
