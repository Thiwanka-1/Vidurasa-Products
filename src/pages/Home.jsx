// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import {
  FiCheckCircle,
  FiTruck,
  FiGlobe,
  FiThumbsUp,
  FiPackage,
  FiFeather,
} from 'react-icons/fi';
import logo from '../components/logo2.png';         // your lion-cinnamon logo
import heroImage from '../images/heroimage.jpg';    // big banner image
import aboutImage from '../images/aboutimage.jpg';  // "who we are" image
import product1 from '../images/sticks.png'; // featured product images
import product2 from '../images/pownder.png';
import product3 from '../images/papper.png';
import process1 from '../images/get.png';
import process2 from '../images/process.png';
import process3 from '../images/pack.png';
import process4 from '../images/ship.png';
import gallery1 from '../images/galary1.png';
import gallery2 from '../images/galary2.png';
import gallery3 from '../images/galary3.png';
import gallery4 from '../images/galary4.png';
import cinnamonImage from '../images/cinnamon.jpg'; // swap in your actual path
import { FaLeaf, FaPepperHot, FaQuoteLeft, FaQuoteRight, FaShippingFast } from 'react-icons/fa';
  
export default function Home() {

  const testimonialsData  = [
    {
      quote:
        "Far far away, behind the word mountains, there live the blind texts. Separated they live in Bookmarksgrove.",
      author: "Jeff Freshman",
      role: "CEO, Example Company",
    },
    {
      quote:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      author: "Anna Johnson",
      role: "CTO, Another Company",
    },
    {
      quote:
        "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.",
      author: "Mark Spencer",
      role: "Project Manager, Some Company",
    },
  ];

   const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="font-sans text-gray-800">

     


     {/* Hero Banner */}
<section
  id="hero"
  className="relative h-[700px] bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="absolute inset-0 bg-black opacity-40" />
  <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
    <div className="w-full lg:w-1/2 text-white space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold">
        Authentic Ceylon Cinnamon & Black Pepper
      </h1>
      <p className="text-lg md:text-xl max-w-lg">
        Handpicked from Sri Lanka’s finest farms, packed with flavor and tradition.
      </p>
      <div className="mt-6 flex space-x-4">
        <a
          href="#products"
          className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Our Products
        </a>
        <a
          href="#about"
          className="border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-black transition"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>

  {/* move cards down: use top-[75%] instead of bottom-0 */}
  <div className="absolute inset-x-0 top-[85%] px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
        <div className="bg-black p-3 rounded-full mb-4">
          <FaLeaf className="text-white text-2xl" />
        </div>
        <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
        <p className="text-gray-700">
          Sustainably grown cinnamon & pepper—no additives.
        </p>
      </div>
      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
        <div className="bg-black p-3 rounded-full mb-4">
          <FaPepperHot className="text-white text-2xl" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
        <p className="text-gray-700">
          Hand-selected bark & peppercorns for unmatched flavor.
        </p>
      </div>
      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
        <div className="bg-black p-3 rounded-full mb-4">
          <FaShippingFast className="text-white text-2xl" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Global Shipping</h3>
        <p className="text-gray-700">
          Fast, reliable delivery straight from Sri Lanka to you.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Who We Are */}
      <section id="about" className="bg-white py-20 pt-48">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <img
            src={aboutImage}
            alt="About us"
            className="w-full mt-96 lg:mt-10 md:mt-40 sm:mt-40 lg:w-[650px] rounded-xl shadow-lg mb-10 lg:mb-0 hover:scale-105 transform transition"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
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
      <section id="process" className="py-20 bg-white">
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

  <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-white overflow-hidden flex flex-col lg:flex-row ">
          
          {/* Text Content */}
          <div className="lg:w-1/2 p-10 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Ceylon Cinnamon Cultivation
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Ceylon cinnamon, or “true cinnamon,” is distinct from Cassia—
              the more common variety—known for its delicate, sweet flavor 
              and lower coumarin content. Harvested from the inner bark of the 
              Cinnamomum verum tree in Sri Lanka, it’s prized for its subtle 
              aroma, smoother texture, and numerous health benefits.
            </p>

            <ul className="space-y-4">
              {[
                'Reduce blood sugar levels',
                'Lower risk of heart diseases',
                'Lower risk of cancer',
                'Reduce acne',
                'Source of vitamins',
                'Reduce inflammation',
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <FiCheckCircle className="mt-1 text-black" />
                  <span className="ml-3 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 hover:scale-105 transform transition">
            <img
              src={cinnamonImage}
              alt="Ceylon cinnamon sticks"
              className="w-full h-full object-cover rounded-lg overflow-hidden shadow-lg"
            />
          </div>
          
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

      {/* ======================================
            Testimonial Section (Slider)
        ====================================== */}
        <section className="py-16 h-[500px] w-full">
      <div className="max-w-screen mx-auto flex flex-col md:flex-row items-stretch h-full w-full">
        {/* Left Side */}
        <div className="md:w-1/2 bg-gray-100 text-black p-8 md:p-16 flex flex-col justify-center ">
          <p className="uppercase text-sm text-black tracking-wide lg:pl-60 md:pl-1">
            Read Testimonials
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mt-2 leading-tight lg:pl-60 md:pl-4 sm:pr-4">
            It’s always a joy to hear that the work we do has positively reviews
          </h3>
        </div>

        {/* Right Side (Slider) */}
        <div className="md:w-1/2 bg-black text-white p-8 md:p-16 flex flex-col justify-center">
          {/* Quoted Text */}
          <div className="relative text-lg md:text-xl italic">
            <FaQuoteLeft className="absolute -left-6 top-0 text-white text-xl" />
            {testimonialsData[currentTestimonial].quote}
            <FaQuoteRight className="absolute -right-6 bottom-0 text-white text-xl" />
          </div>

          {/* Author & Role */}
          <div className="mt-4">
            <strong>{testimonialsData[currentTestimonial].author}</strong>
            <br />
            <span className="text-gray-300 text-sm">
              {testimonialsData[currentTestimonial].role}
            </span>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center items-center mt-6 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentTestimonial === index
                    ? "bg-white"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>


      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white">
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
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      
      
        

    </div>
  );
}
