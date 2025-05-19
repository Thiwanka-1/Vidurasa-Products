import React, { useState } from 'react';


// Sample projects data – update with your real data
const projects = [
  {
    id: 1,
    image: 'https://img.freepik.com/free-photo/construction-worker-engineer-working-together-construction-site_640221-165.jpg?t=st=1744387835~exp=1744391435~hmac=245e477890926b319b43d8f75808fc6305030a63490fb9e5e122e030ac81ea14&w=996',
    category: 'Building',
    title: 'Building a Condominium',
    location: 'San Francisco, California, USA',
  },
  {
    id: 2,
    image: 'https://img.freepik.com/free-photo/power-plant-construction_1127-2891.jpg?t=st=1744387988~exp=1744391588~hmac=46c7068cf39428afa5e776f7e0f181e51b6ccde64ada585176ef3bc3ed67beff&w=996',
    category: 'Construction',
    title: 'Modern Office Complex',
    location: 'Los Angeles, California, USA',
  },
  {
    id: 3,
    image: 'https://img.freepik.com/free-photo/construction-site-silhouettes_1127-2990.jpg?t=st=1744388560~exp=1744392160~hmac=06a8addde0685d7094552d72179d9296922061b95410affca0cd9a9a7f38b8fc&w=996',
    category: 'Renovation',
    title: 'Historic Mansion Renovation',
    location: 'Boston, Massachusetts, USA',
  },
  {
    id: 4,
    image: 'https://img.freepik.com/free-photo/construction-site-silhouettes_1127-2990.jpg?t=st=1744388560~exp=1744392160~hmac=06a8addde0685d7094552d72179d9296922061b95410affca0cd9a9a7f38b8fc&w=996',
    category: 'Building',
    title: 'Luxury Apartment Complex',
    location: 'New York, New York, USA',
  },
  {
    id: 5,
    image: 'https://img.freepik.com/free-photo/construction-site-silhouettes_1127-2990.jpg?t=st=1744388560~exp=1744392160~hmac=06a8addde0685d7094552d72179d9296922061b95410affca0cd9a9a7f38b8fc&w=996',
    category: 'Construction',
    title: 'Bridge Construction',
    location: 'Chicago, Illinois, USA',
  },
  {
    id: 6,
    image: 'https://img.freepik.com/free-photo/construction-site-silhouettes_1127-2990.jpg?t=st=1744388560~exp=1744392160~hmac=06a8addde0685d7094552d72179d9296922061b95410affca0cd9a9a7f38b8fc&w=996',
    category: 'Renovation',
    title: 'Office Renovation',
    location: 'Miami, Florida, USA',
  },
    {
        id: 7,
        image: 'https://img.freepik.com/free-photo/project7.jpg',
        category: 'Building',
        title: 'Community Center',
        location: 'Seattle, Washington, USA',
    },
    {
        id: 8,
        image: 'https://img.freepik.com/free-photo/project8.jpg',
        category: 'Construction',
        title: 'Shopping Mall',
        location: 'Houston, Texas, USA',
    },
];

const Projects = () => {
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Calculate which projects to show on the current page.
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col min-h-screen">
    

      <main className="flex-grow">
        {/* Hero Banner for Projects Page */}
        <section
          className="relative h-[700px] bg-cover bg-center "
          style={{ backgroundImage: "url('https://img.freepik.com/free-photo/power-plant-construction_1127-2891.jpg?t=st=1744387988~exp=1744391588~hmac=46c7068cf39428afa5e776f7e0f181e51b6ccde64ada585176ef3bc3ed67beff&w=996')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Our Projects</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Explore our portfolio of remarkable projects that showcase our expertise.
            </p>
          </div>
        </section>

        <div className='text-4xl mt-12 text-center font-bold'>
            Latest Projects
        </div>

        {/* Projects Grid */}
        <section className="py-16 bg-gray-50 px-4 md:px-8">
          <div className="max-w-7xl mx-auto ">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 ">
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  className="relative group bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition overflow-hidden "
                >
                  {/* Project Image */}
                  <div className="relative w-full h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Bottom Overlay */}
                  <div className="p-4 text-center">
                    <span className="inline-block bg-[#2392C3] text-white text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-[#1E3A4C]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 border transition-colors ${
                      currentPage === index + 1
                        ? "bg-[#1E3A4C] text-white border-[#1E3A4C]"
                        : "bg-white text-[#1E3A4C] border-[#1E3A4C] hover:bg-[#1E3A4C] hover:text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

    </div>
  );
};

export default Projects;
