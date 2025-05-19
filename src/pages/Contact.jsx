// Contact.jsx
import React from 'react';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar & Header */}
    
      <main className="flex-grow">
        {/* --------------------------------------
             Hero Banner
        -------------------------------------- */}
        <section
          className="relative h-[700px] bg-cover bg-center"
          style={{ backgroundImage: "url('https://img.freepik.com/free-photo/crop-architect-opening-blueprint_23-2147710985.jpg?t=st=1744389359~exp=1744392959~hmac=52921a110d88ea55e56b213f9e7887fb55451b420118e9e9a08dd3058c146dc6&w=996')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              We're here to help and answer any questions you might have.
            </p>
          </div>
        </section>

        {/* --------------------------------------
             Contact Information Section
        -------------------------------------- */}
        <section className="py-16 bg-gray-50 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Contact Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#1E3A4C]">Contact Information</h2>
              <p className="text-gray-600">
                Feel free to reach out to us via phone or email. Visit our office at the address below for more details.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaPhone className="text-2xl text-[#2392C3] mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A4C]">Phone</h3>
                    <p className="text-gray-600">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-2xl text-[#2392C3] mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A4C]">Email</h3>
                    <p className="text-gray-600">info@dumbaraconstructions.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-2xl text-[#2392C3] mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A4C]">Address</h3>
                    <p className="text-gray-600">123 Construction Avenue, City, Country</p>
                  </div>
                </div>
              </div>
              {/* Call-to-action Button */}
              <div>
                <a
                  href="mailto:info@dumbaraconstructions.com"
                  className="inline-block bg-[#2392C3] text-white font-semibold py-3 px-8 hover:bg-[#1E3A4C] transition"
                >
                  Email Us
                </a>
              </div>
            </div>
            {/* Right: Decorative Image (or Map) */}
            <div>
              <img
                src="https://img.freepik.com/free-photo/crop-architect-opening-blueprint_23-2147710985.jpg?t=st=1744389359~exp=1744392959~hmac=52921a110d88ea55e56b213f9e7887fb55451b420118e9e9a08dd3058c146dc6&w=996"
                alt="Our Location"
                className="w-full h-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* --------------------------------------
             Social Media Section
        -------------------------------------- */}
        <section className="py-16 bg-white px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1E3A4C]">Follow Us</h2>
            <p className="mt-4 text-gray-600">
              Stay connected with us on social media.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" aria-label="Facebook" className="text-[#1E3A4C] hover:text-[#2392C3] transition">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#1E3A4C] hover:text-[#2392C3] transition">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#1E3A4C] hover:text-[#2392C3] transition">
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Contact;
