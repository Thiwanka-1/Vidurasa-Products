// About.jsx
import React from 'react';
import CountUp from 'react-countup';
import { FaHardHat, FaBuilding, FaHandshake } from 'react-icons/fa';

const About = () => {
  // Sample team data for the team section; extend or change as needed.
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Project Manager",
      image: "https://img.freepik.com/free-photo/smiling-young-afro-american-builder-man-uniform-with-safety-helmet-thumbing-up-isolated-white-background-with-copy-space_141793-105397.jpg?t=st=1744383619~exp=1744387219~hmac=39220d780353132d39f37b32d5ab0ca04a20b4536333c9dbc513d29febc3459e&w=996",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Lead Architect",
      image: "https://img.freepik.com/free-photo/smiling-young-builder-man-safety-glasses-wearing-uniform-with-safety-helmet-standing-with-crossed-arms-isolated-orange-wall-with-copy-space_141793-120099.jpg?t=st=1744383634~exp=1744387234~hmac=185b1750479d18336e53b7d3f7291df90cca13ba57a33d9cd07a897ae445ccae&w=996",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Construction Supervisor",
      image: "https://img.freepik.com/free-photo/smiling-young-afro-american-builder-man-safety-glasses-wearing-uniform-with-safety-helmet-thumbing-up-isolated-orange-background-with-copy-space_141793-105136.jpg?t=st=1744383664~exp=1744387264~hmac=a206720f5e29571af22f3e3b280280325c64e9127189af3564d26afcadb418e5&w=996",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* =========================
          Hero Banner
      ========================= */}
      <section
        className="relative h-[700px] bg-cover bg-center "
        style={{ backgroundImage: "url('https://img.freepik.com/free-psd/builder-carries-steel-beam-his-shoulder-generative-ai_587448-2200.jpg?t=st=1744384959~exp=1744388559~hmac=e5f84c2b123eef59958222538bd7a878f37a55433b177d521d2fe86dee9eda01&w=826" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            About Dumbara Constructions
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Building the Future with Quality, Innovation & Integrity
          </p>
        </div>
      </section>

      {/* =========================
          Our Story Section
      ========================= */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-[#1E3A4C]">Our Story</h2>
            <p className="mt-4 text-gray-700">
              Established in [Year], Dumbara Constructions began as a small local business and has grown into a trusted name in the construction industry. Our journey is fueled by a passion for excellence, an eye for innovation, and a commitment to exceptional quality.
            </p>
            <p className="mt-4 text-gray-700">
              Over the years, we have built a reputation for integrity and high standards, turning visions into reality and creating spaces that stand the test of time. Our success is reflected in our enduring client relationships and the projects we proudly deliver.
            </p>
          </div>
          {/* Image */}
          <div>
            <img
              src="https://img.freepik.com/free-photo/construction-silhouette_1150-8336.jpg?t=st=1744383404~exp=1744387004~hmac=c1669d5c53241ce2c6d02aaa6f534ed8cae4758605f3c2f8f6a132cd13c2828d&w=996"
              alt="Our Story"
              className="w-full rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* =========================
          Mission & Vision Section
      ========================= */}
      <section className="py-16 bg-[#2392C3] text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-lg">
              To design and construct innovative, sustainable, and safe environments that empower communities and shape a better future.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="mt-4 text-lg">
              To be the leading construction company, recognized for excellence, innovation, and integrity in every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          Core Values Section
      ========================= */}
      <section className="py-16 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1E3A4C]">Our Core Values</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            These values define who we are and guide our every decision.
          </p>
          <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1: Quality */}
            <div className="bg-[#1E3A4C] text-white p-6 shadow">
              <FaHardHat className="text-4xl mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Quality</h3>
              <p className="mt-2 text-gray-200">
                We deliver exceptional quality that ensures durability, safety, and beauty.
              </p>
            </div>
            {/* Value Card 2: Innovation */}
            <div className="bg-[#2392C3] text-white p-6 shadow">
              <FaBuilding className="text-4xl mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Innovation</h3>
              <p className="mt-2 text-gray-200">
                We incorporate the latest technologies and creative designs to build the future.
              </p>
            </div>
            {/* Value Card 3: Integrity */}
            <div className="bg-[#30B94F] text-white p-6 shadow">
              <FaHandshake className="text-4xl mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Integrity</h3>
              <p className="mt-2 text-gray-100">
                We uphold honesty, transparency, and ethical business practices in all we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          Achievements Section
      ========================= */}
      <section className="py-16 bg-gray-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1E3A4C]">Our Achievements</h2>
          <div className="mt-12 flex flex-col sm:flex-row justify-around items-center">
            <div className="m-4">
              <h3 className="text-4xl font-bold text-[#30B94F]">
                <CountUp end={50} duration={2.5} />
              </h3>
              <p className="mt-2 text-gray-700 uppercase">Years of Experience</p>
            </div>
            <div className="m-4">
              <h3 className="text-4xl font-bold text-[#30B94F]">
                <CountUp end={48000} duration={2.5} separator="," />
              </h3>
              <p className="mt-2 text-gray-700 uppercase">Projects Completed</p>
            </div>
            <div className="m-4">
              <h3 className="text-4xl font-bold text-[#30B94F]">
                <CountUp end={54900} duration={2.5} separator="," />
              </h3>
              <p className="mt-2 text-gray-700 uppercase">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          Our Team Section
      ========================= */}
      <section className="py-16 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1E3A4C]">Meet Our Team</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our diverse team of passionate professionals is the backbone of our success.
          </p>
          <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-100 p-6 shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold text-[#1E3A4C]">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
