import React, { useEffect, useState } from 'react';
import {
  FiTarget,
  FiEye,
  FiAward,
  FiHeart,
  FiUsers,
  FiGlobe,
} from 'react-icons/fi';
import heroImage from '../images/about.png';
import storyImage from '../images/ship.png';

// Generic counter hook
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

export default function About() {
  // counters
  const years = useCounter(5);
  const tons = useCounter(200);
  const clients = useCounter(350);
  const partners = useCounter(25);

   const values = [
    {
      Icon: FiAward,
      title: 'Quality',
      desc: 'We maintain the highest standards in every batch of spice we deliver.',
    },
    {
      Icon: FiHeart,
      title: 'Integrity',
      desc: 'Transparent relationships with our growers, partners, and customers.',
    },
    {
      Icon: FiUsers,
      title: 'Community',
      desc: 'Empowering local farmers and preserving traditional practices.',
    },
    {
      Icon: FiGlobe,
      title: 'Sustainability',
      desc: 'Eco-friendly cultivation and packaging for future generations.',
    },
  ];

    const items = [
    {
      Icon: FiTarget,
      title: 'Our Mission',
      text:
        'To cultivate and deliver the purest, most aromatic Ceylon spices, while uplifting local communities and preserving the environment.',
    },
    {
      Icon: FiEye,
      title: 'Our Vision',
      text:
        'To be the world’s leading ambassador of genuine Ceylon cinnamon and black pepper, celebrated for quality and sustainability.',
    },
  ];


  return (
    <div className="font-sans text-gray-800">
      {/* Hero Banner */}
      <section
  id="hero"
  className="relative h-[600px] bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50" />
  <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6">
    <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
      About Us
    </h1>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
      
Widurasa Agro was founded by a family passionate about bringing
              true Ceylon cinnamon and black pepper to the world. Starting
              from a small plantation in Sri Lanka, we perfected sustainable
              cultivation and traditional processing methods to deliver
              unmatched aroma and taste.
    </p>
  </div>
</section>


      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are a family-owned business dedicated to producing the finest
Ceylon cinnamon and pepper from Sri Lanka.
Our commitment to excellence ensures a product that supports local
communities and brings the best of Sri Lankan spice to the world.
We have been registered as a sole proprietor business under the
Monaragala Divisional Office [registration No: MO/3758] since July of
2024.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, our spices travel from our fields to kitchens globally,
              connecting generations of flavor and tradition in every sprinkle.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={storyImage}
              alt="Our Story"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-20 bg-gray-50">
      {/* Section Heading */}
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Mission & Vision</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          What drives us forward and shapes our future.
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map(({ Icon, title, text }) => (
          <div
            key={title}
            className="relative bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            {/* left accent bar */}
            <span className="absolute left-0 top-0 h-full w-1 bg-black rounded-l-lg" />

            {/* content */}
            <div className="pl-4">
              <div className="flex items-center mb-4">
                <Icon className="w-6 h-6 text-black" />
                <h3 className="ml-3 text-2xl font-semibold text-black">{title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Core Values */}
      <section id="core-values" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="w-8 h-8 text-black mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Sales Summary */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ value: years, label: 'Years Experience' },
              { value: tons, label: 'Tons Exported' },
              { value: clients, label: 'Happy Clients' },
              { value: partners, label: 'Global Partners' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-bold text-black">
                  {stat.value}
                </div>
                <p className="mt-2 text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: '/assets/team1.jpg', name: 'Nalin Perera', role: 'Founder & CEO' },
              { img: '/assets/team2.jpg', name: 'Anitha Silva', role: 'Head of Production' },
              { img: '/assets/team3.jpg', name: 'Ravi Fernando', role: 'Quality Manager' },
              { img: '/assets/team4.jpg', name: 'Maya Kumar', role: 'Export Coordinator' },
            ].map((m) => (
              <div key={m.name} className="text-center p-6 border rounded-lg hover:shadow-lg transition">
                <img
                  src={m.img}
                  alt={m.name}
                  className="mx-auto w-32 h-32 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">{m.name}</h4>
                <p className="text-gray-600">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
