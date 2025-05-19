// src/components/Footer.jsx
import React from 'react';
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
} from 'react-icons/fi';
import logo from './logo2.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand & Description */}
          <div>
            <img src={logo} alt="Widurasa Logo" className="h-10 mb-4" />
            <p className="text-gray-400 leading-relaxed">
              Widurasa Agro Products — Bringing you the finest Ceylon cinnamon
              & black pepper, straight from Sri Lanka’s lush plantations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'Our Products', href: '#products' },
                { name: 'About Us', href: '#about' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="flex items-center mb-2">
              <FiMail className="mr-2" /> info@widurasaagro.lk
            </p>
            <p>+94 11 234 5678</p>
            <p className="mt-2">
              123 Spice Lane,<br />
              Colombo 07, Sri Lanka
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Get the latest spice news & offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 rounded-r-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-12">
          {[FiFacebook, FiInstagram, FiTwitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-gray-400 hover:text-white text-2xl transition"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm pb-8">
          &copy; {new Date().getFullYear()} Widurasa Agro Products. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
