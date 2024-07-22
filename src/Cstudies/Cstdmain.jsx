import React, { useState, useRef } from "react";
import laptop from "../assets/Compressed/Laptop.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const industries = [
  { name: "OIL AND GAS INDUSTRY", id: "oil" },
  { name: "AUTOMOBILE INDUSTRY", id: "auto" },
  { name: "HEALTHCARE INDUSTRY", id: "health" }
];

const projects = {
  oil: [
    { title: "Offshore Platform Optimization", description: "Improved production efficiency by 25% through advanced AI-driven monitoring systems." },
    { title: "Pipeline Leak Detection System", description: "Reduced environmental risks with real-time leak detection, cutting response time by 60%." },
    { title: "Refinery Process Automation", description: "Implemented IoT sensors and machine learning to optimize refining processes, saving $5M annually." },
    { title: "Seismic Data Analysis Tool", description: "Developed a cloud-based platform for faster seismic data processing, reducing analysis time by 40%." },
    { title: "Predictive Maintenance Solution", description: "Created an AI model to predict equipment failures, reducing downtime by 30% and maintenance costs by $2M." },
    { title: "Smart Well Management", description: "Designed a real-time well monitoring system, increasing production by 15% across 500 wells." },
    { title: "Energy Trading Platform", description: "Built a blockchain-based trading platform, improving transaction security and reducing costs by 20%." }
  ],
  auto: [
    { title: "Electric Vehicle Battery Management", description: "Developed an advanced BMS increasing EV range by 12% and battery lifespan by 2 years." },
    { title: "Autonomous Driving AI", description: "Created a machine learning model improving object detection accuracy by 30% in diverse weather conditions." },
    { title: "Connected Car Platform", description: "Designed a cloud-based system enabling OTA updates and predictive maintenance for 100,000+ vehicles." },
    { title: "Manufacturing Process Optimization", description: "Implemented an AI-driven system reducing production line downtime by 40% and improving quality control." }
  ],
  health: [
    { title: "AI-Powered Diagnostic Tool", description: "Developed an AI algorithm for early cancer detection, improving accuracy by 15% over traditional methods." },
    { title: "Telemedicine Platform", description: "Created a secure, HIPAA-compliant telehealth solution, facilitating over 1 million virtual consultations." }
  ]
};

const CaseStudy = ({ title, description, image }) => (
  <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      <img 
        src={image}
        alt={title} 
        className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
      />
      <div className="p-3 md:p-4">
        <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  </div>
);


function Cstdmain() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);

  return (
    <div className="font-manrope  xl:-mt-4">
      <header className="bg-gradient-to-r from-cyan-100 to-bloo/10 w-screen text-white 2xl:py-8 pt-32 pb-8 text-center">
        <h1 className="text-blackk text-4xl  md:text-6xl font-bold mb-4">CASE STUDIES</h1>
        <p className="text-blackk text-xl  md:text-2xl max-w-3xl py-2 mx-auto px-4">
          Explore <span className="text-bloo font-bold">Real-World Examples</span> of how EICE has transformed businesses across industries through innovative software solutions and unparalleled expertise.
        </p>
      </header>
      <main className="container mx-auto max-w-7xl pt-8">
        <nav className="mb-8 sm:mb-12">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {industries.map((industry) => (
              <li key={industry.id}>
                <button
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition ${
                    activeIndustry === industry.id
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {industry.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {industries.map((industry) => (
          <section
            key={industry.id}
            className={`mb-12 px-2 ${activeIndustry === industry.id ? "block" : "hidden"}`}
          >
            <h2 className="text-xl px-2 sm:text-2xl font-bold mb-4 sm:mb-6">{industry.name}</h2>
            <div className="flex flex-wrap -mx-2">
              {projects[industry.id].map((project, index) => (
                <CaseStudy
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={laptop}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Cstdmain;