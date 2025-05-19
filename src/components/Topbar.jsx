// TopBar.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-[#1E3A4C] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            <span>+1 (234) 567-890</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>info@dumbaraconstructions.com</span>
          </div>
        </div>
        {/* You can add social icons here if desired */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Example (uncomment if needed):
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
