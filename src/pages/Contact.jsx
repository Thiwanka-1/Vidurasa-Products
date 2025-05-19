// src/pages/Contact.jsx
import React, { useState } from 'react';
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';
import contactHero from '../images/contact1.jpg';
import contactIllustration from '../images/contact.png';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // prepare mailto URL
      const subject = encodeURIComponent(`New message from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );

      // reset form
      setForm({ name: '', email: '', message: '' });
      setLoading(false);

      // open email client
      window.location.href = `mailto:gamithu619@gmail.com?subject=${subject}&body=${body}`;
    }, 3000);
  };

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Banner */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${contactHero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6">
          <h1 className="text-3xl md:text-5xl text-white font-bold mb-2">
            Get in Touch
          </h1>
          <p className="text-white max-w-2xl leading-relaxed">
            Have questions or want to order our authentic Ceylon spices?
            Drop us a line below or reach out via any of our channels.
          </p>
        </div>
      </section>

      {/* Top Contact Info & Social */}
     <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6">
    {/* Section Heading */}
    <h2 className="text-3xl font-bold text-center text-black mb-12">
      Contact Information
    </h2>

    {/* Contact Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Address */}
      <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
        <FiMapPin
          className="text-black text-4xl mx-auto mb-4"
          aria-hidden="true"
        />
        <h3 className="text-xl font-semibold text-black mb-2 text-center">
          Our Address
        </h3>
        <p className="text-gray-600 text-center">
          123 Spice Lane, Colombo 07, Sri Lanka
        </p>
        <a
          href="https://goo.gl/maps/your-map-link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-black hover:text-gray-700 transition lg:ml-36 ml-16"
        >
          View on Map →
        </a>
      </div>

      {/* Email */}
      <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
        <FiMail
          className="text-black text-4xl mx-auto mb-4"
          aria-hidden="true"
        />
        <h3 className="text-xl font-semibold text-black mb-2 text-center">
          Email Us
        </h3>
        <a
          href="mailto:info@widurasaagro.lk"
          className="text-gray-600 text-center hover:text-black transition block"
        >
          info@widurasaagro.lk
        </a>
      </div>

      {/* Phone */}
      <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
        <FiPhone
          className="text-black text-4xl mx-auto mb-4"
          aria-hidden="true"
        />
        <h3 className="text-xl font-semibold text-black mb-2 text-center">
          Call Us
        </h3>
        <a
          href="tel:+94112345678"
          className="text-gray-600 text-center hover:text-black transition block"
        >
          +94 11 234 5678
        </a>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="mt-12 text-center">
      <h4 className="text-lg font-semibold text-black mb-6">Follow Us</h4>
      <div className="flex justify-center space-x-6">
        <a
          href="https://facebook.com/YourPage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-black text-2xl hover:text-gray-700 transition"
        >
          <FiFacebook />
        </a>
        <a
          href="https://instagram.com/YourPage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-black text-2xl hover:text-gray-700 transition"
        >
          <FiInstagram />
        </a>
        <a
          href="https://linkedin.com/in/YourProfile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-black text-2xl hover:text-gray-700 transition"
        >
          <FiLinkedin />
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Main Form & Illustration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows="6"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center bg-black text-white font-semibold py-4 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Sending…
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>

          {/* Illustration/Image */}
          <div className="flex justify-center">
            <img
              src={contactIllustration}
              alt="Contact illustration"
              className="lg:w-[800px] rounded-lg shadow-md lg:h-[630px]"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
