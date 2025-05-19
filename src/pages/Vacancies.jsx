// VacanciesPage.jsx
import React, { useState } from 'react';
import { FaBriefcase } from 'react-icons/fa';

const vacancies = [
  {
    id: 1,
    title: "Site Supervisor",
    department: "Operations",
    location: "New York, NY",
    description:
      "Manage construction site activities and oversee safety compliance with proven leadership.",
    applyLink:
      "mailto:hr@dumbaraconstructions.com?subject=Site Supervisor Application",
  },
  {
    id: 2,
    title: "Project Manager",
    department: "Management",
    location: "Los Angeles, CA",
    description:
      "Oversee project planning, execution, and delivery with experience in large-scale construction projects.",
    applyLink:
      "mailto:hr@dumbaraconstructions.com?subject=Project Manager Application",
  },
  {
    id: 3,
    title: "Architect",
    department: "Design",
    location: "Chicago, IL",
    description:
      "Develop innovative design solutions and collaborate closely with engineering teams.",
    applyLink:
      "mailto:hr@dumbaraconstructions.com?subject=Architect Application",
  },
  {
    id: 4,
    title: "Civil Engineer",
    department: "Engineering",
    location: "Houston, TX",
    description:
      "Perform design and analysis of infrastructure projects and ensure structural integrity.",
    applyLink:
      "mailto:hr@dumbaraconstructions.com?subject=Civil Engineer Application",
  },
  {
    id: 5,
    title: "Safety Officer",
    department: "Compliance",
    location: "Phoenix, AZ",
    description:
      "Ensure all construction practices meet the highest safety standards and regulatory requirements.",
    applyLink:
      "mailto:hr@dumbaraconstructions.com?subject=Safety Officer Application",
  },
  {
    id: 6,
    title: "Construction Laborer",
    department: "Field Operations",
    location: "Philadelphia, PA",
    description:
      "Assist in various construction tasks with an emphasis on safety, quality, and timeliness.",
    applyLink:
      "mailto:hr@dumbaraconstructions.com?subject=Construction Laborer Application",
  },
  {
    id: 7,
    title: "Estimator",
    department: "Finance",
    location: "San Antonio, TX",
    description:
      "Analyze project requirements and prepare detailed cost estimates for our upcoming projects.",
    applyLink:
      "mailto:hr@dumbaraconstructions.com?subject=Estimator Application",
  },
  {
    id: 8,
    title: "Procurement Specialist",
    department: "Logistics",
    location: "San Diego, CA",
    description:
      "Handle material procurement and supplier negotiations to ensure smooth project execution.",
    applyLink:
      "mailto:hr@dumbaraconstructions.com?subject=Procurement Specialist Application",
  },
];

const Vacancies = () => {
  const vacanciesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(vacancies.length / vacanciesPerPage);

  // Determine the vacancies to display on the current page
  const startIndex = (currentPage - 1) * vacanciesPerPage;
  const currentVacancies = vacancies.slice(
    startIndex,
    startIndex + vacanciesPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col min-h-screen">
    

      <main className="flex-grow">
        {/* -------------------------------
            Hero Banner for Vacancies Page
        ------------------------------- */}
        <section
          className="relative h-[700px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/engineer-wearing-hard-hat-looking-at-blueprint_23-2148620104.jpg?w=1060')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Vacancies</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Join our team and help shape the future of construction.
            </p>
          </div>
        </section>

        {/* -------------------------------
            Vacancies Grid Section
        ------------------------------- */}
        <section className="py-16 bg-gray-50 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#1E3A4C]">
                Current Vacancies
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Explore the career opportunities at Dumbara Constructions. We
                are looking for talented professionals to join our team and
                drive excellence in every project.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {currentVacancies.map((vacancy) => (
                <div
                  key={vacancy.id}
                  className="bg-white border border-gray-200 shadow hover:shadow-xl transition p-6"
                >
                  <div className="flex items-center mb-4">
                    <FaBriefcase className="text-4xl text-[#2392C3] mr-4" />
                    <h3 className="text-xl font-bold text-[#1E3A4C]">
                      {vacancy.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 font-semibold">
                    {vacancy.department}
                  </p>
                  <p className="text-gray-500">{vacancy.location}</p>
                  <p className="mt-2 text-gray-600">{vacancy.description}</p>
                  <a
                    href={vacancy.applyLink}
                    className="mt-4 inline-block bg-[#2392C3] text-white font-semibold py-2 px-4 hover:bg-[#1E3A4C] transition"
                  >
                    Apply Now
                  </a>
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

export default Vacancies;
