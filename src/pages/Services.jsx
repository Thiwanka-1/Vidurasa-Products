// Services.jsx
import React from 'react';

import { FaTools, FaHammer, FaBuilding, FaTruck, FaHardHat } from 'react-icons/fa';
const serviceCards = [
    {
      id: 1,
      title: "Architecture",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
      image: "https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?w=1060",
      icon: <FaTools className="text-white text-2xl"/>,
    },
    {
      id: 2,
      title: "Renovation",
      description: "Modernizing spaces with precision and style, while preserving their unique character.",
      image: "https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?w=1060",
      icon: <FaBuilding className="text-white text-2xl"/>,
    },
    {
      id: 3,
      title: "Construction",
      description: "Delivering high-quality builds on time and on budget, from foundations to finishing touches.",
      image: "https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?w=1060",
      icon: <FaHammer className="text-white text-2xl"/>,
    },
    {
      id: 4,
      title: "Logistics & Support",
      description: "Streamlining material supply and project logistics for smooth execution.",
      image: "https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?w=1060",
      icon: <FaTruck className="text-white text-2xl"/>,
    },
    {
      id: 5,
      title: "Project Management",
      description: "Coordinating every facet of your project to ensure success from start to finish.",
      image: "https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?w=1060",
      icon: <FaTools className="text-white text-2xl"/>,  // Change to a more appropriate icon if available.
    },
    {
      id: 6,
      title: "Safety & Compliance",
      description: "Meeting the highest safety standards and regulatory requirements for every project.",
      image: "https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?w=1060",
      icon: <FaHardHat className="text-white text-2xl"/>,
    },
  ];
const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
     

      {/* -------------------------------
          Services Overview Section
      ------------------------------- */}
      <section
          className="relative h-[700px] bg-cover bg-center"
          style={{ backgroundImage: "url('https://img.freepik.com/free-photo/construction-site_53876-14088.jpg?t=st=1744384847~exp=1744388447~hmac=fe57d9e46cd12aba95e99f1195422af0b62d1c77527c5b3dd56274032fb585a6&w=996')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Discover our comprehensive solutions tailored to every aspect of construction.
            </p>
          </div>
        </section>

        {/* -------------------------------
            Services Overview Section (Cards)
        ------------------------------- */}
        <section id="services" className="py-16 bg-white px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#1E3A4C]">Our Services</h2>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive solutions tailored to your needs. From design and renovation to full-scale construction, our services cover it all.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCards.map((card) => (
                <div
                  key={card.id}
                  className="group relative bg-white border border-gray-200 rounded shadow hover:shadow-xl transition overflow-hidden"
                >
                  {/* Top Image */}
                  <div className="relative w-full h-48">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Icon Circle */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#2392C3] group-hover:bg-[#1E3A4C] transition-colors">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                  {/* Text Content */}
                  <div className="mt-10 pb-6 px-4 text-center">
                    <h3 className="text-xl font-semibold text-[#1E3A4C]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* -------------------------------
          Detailed Process Section
      ------------------------------- */}
      <section className="py-16 bg-[#1E3A4C] text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Our Process</h2>
          <p className="mt-4 text-center text-gray-200 max-w-2xl mx-auto">
            We follow a streamlined process to deliver outstanding results every time.
          </p>
          <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#30B94F]">Consultation</h3>
              <p className="mt-2">
                Understanding your vision and requirements to lay the groundwork for success.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#30B94F]">Planning & Design</h3>
              <p className="mt-2">
                Crafting innovative and sustainable designs tailored to your needs.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#30B94F]">Execution</h3>
              <p className="mt-2">
                Coordinating construction and managing every detail until project completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------
          Final Call-To-Action Section
      ------------------------------- */}
      <section className="py-16 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1E3A4C]">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get in touch with us today to discuss your construction needs and bring your vision to life.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-[#2392C3] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#1E3A4C] transition"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
};

export default Services;
