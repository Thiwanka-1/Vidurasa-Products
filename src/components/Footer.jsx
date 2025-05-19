// src/components/Footer.jsx
import React, { useEffect, useState } from 'react';
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
} from 'react-icons/fi';
import logo from './logo2.png';

export default function Footer() {

  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you could also fire off an API call if needed…
    setNotification('🎉 Thanks for subscribing!');
    setEmail('');
  };

  // auto-dismiss after 5 seconds
  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(''), 5000);
    return () => clearTimeout(timer);
  }, [notification]);

  const socialLinks = [
  {
    href: 'https://www.facebook.com/YourPage',
    Icon: FiFacebook,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/YourPage',
    Icon: FiInstagram,
    label: 'Instagram',
  },
  {
    href: 'https://twitter.com/YourProfile',
    Icon: FiTwitter,
    label: 'Twitter',
  },
];
  
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
                { name: 'Home', href: '/' },
                { name: 'Our Products', href: '/products' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
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
          <div className="mx-auto max-w-md px-6">
        <h4 className="text-white font-semibold mb-4">Newsletter</h4>
        <p className="text-gray-400 mb-4">
          Get the latest spice news & offers.
        </p>
        <form onSubmit={handleSubscribe} className="flex">
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
{notification && (
        <div
          className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-4"
          role="alert"
        >
          <span className="flex-1">{notification}</span>
          <button
            onClick={() => setNotification('')}
            className="text-white hover:text-gray-200"
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      )}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-12">
  {socialLinks.map(({ href, Icon, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
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
