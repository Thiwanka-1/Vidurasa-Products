// src/pages/Home.jsx
import React from 'react';
import {
  FiCheckCircle,
  FiTruck,
  FiGlobe,
  FiThumbsUp,
} from 'react-icons/fi';
import logo from '../components/logo2.png';         // your lion-cinnamon logo
import heroImage from '../images/heroimage.jpg';    // big banner image
import aboutImage from '../images/aboutimage.jpg';  // "who we are" image
import product1 from '../images/team3.png'; // featured product images
import product2 from '../images/team3.png';
import product3 from '../images/team3.png';
import process1 from '../images/team3.png';
import process2 from '../images/team3.png';
import process3 from '../images/team3.png';
import process4 from '../images/team3.png';
import gallery1 from '../images/team3.png';
import gallery2 from '../images/team3.png';
import gallery3 from '../images/team3.png';
import gallery4 from '../images/team3.png';

export default function Home() {
  return (
    <div className="font-sans text-gray-800">

     


      {/* Hero Banner */}
      <section
        id="hero"
        className="relative h-[800px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="w-full lg:w-1/2 text-white space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Authentic Ceylon Cinnamon & Black Pepper
            </h1>
            <p className="text-lg lg:text-xl max-w-lg">
              Handpicked from Sri Lanka’s finest farms, packed with flavor and tradition.
            </p>
            <button className="mt-4 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Explore Our Spices
            </button>
          </div>
        </div>
      </section>


      {/* Who We Are */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <img
            src={aboutImage}
            alt="About us"
            className="w-full lg:w-1/2 rounded-xl shadow-lg mb-10 lg:mb-0"
          />
          <div className="lg:pl-12 space-y-6">
            <h2 className="text-4xl font-bold text-black">Who We Are</h2>
            <p className="text-gray-700 text-lg">
              We are a family-owned business dedicated to cultivating, processing,
              and exporting the purest Ceylon cinnamon and black pepper.
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                'Responsibly sourced from traditional plantations',
                'State-of-the-art processing locks in aroma & flavor',
                'Serving both local and global markets with pride',
              ].map((txt) => (
                <li key={txt} className="flex items-start">
                  <FiCheckCircle className="text-green-600 mt-1 mr-2" />
                  {txt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                Icon: FiTruck,
                title: 'Reliable Delivery',
                desc: 'Fast island-wide shipping of fresh spices.',
              },
              {
                Icon: FiGlobe,
                title: 'Global Export',
                desc: 'Exporting premium Ceylon spices worldwide.',
              },
              {
                Icon: FiCheckCircle,
                title: 'Quality Assurance',
                desc: 'Strict quality checks at every stage.',
              },
              {
                Icon: FiThumbsUp,
                title: 'Customer Support',
                desc: '24/7 assistance for all inquiries.',
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-xl transition"
              >
                <Icon className="text-5xl text-black mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: process1,
                title: 'Sourcing',
                desc: 'Selecting the finest raw cinnamon & pepper.',
              },
              {
                img: process2,
                title: 'Processing',
                desc: 'Traditional and modern methods combined.',
              },
              {
                img: process3,
                title: 'Packaging',
                desc: 'Airtight packaging for maximum freshness.',
              },
              {
                img: process4,
                title: 'Shipping',
                desc: 'Safe and timely delivery to you.',
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Featured Products */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                img: product1,
                name: 'Cinnamon Sticks',
                desc: 'Aromatic, hand-rolled Ceylon cinnamon sticks.',
              },
              {
                img: product2,
                name: 'Ground Cinnamon',
                desc: 'Fine-textured powder for cooking & baking.',
              },
              {
                img: product3,
                name: 'Black Peppercorns',
                desc: 'Rich, pungent peppercorns for seasoning.',
              },
            ].map((prod) => (
              <div
                key={prod.name}
                className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{prod.name}</h3>
                  <p className="text-gray-700 mb-4">{prod.desc}</p>
                  <button className="text-black font-medium hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition"
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-700 mb-8">
            Have questions or orders? Reach out to us below.
          </p>
          <form className="max-w-lg mx-auto grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="p-4 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="p-4 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
