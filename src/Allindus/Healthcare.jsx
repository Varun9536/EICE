import React, { useState, useRef } from "react";
import Footer from '../Othercomps/Footer';
import Copyright from '../Othercomps/Copyright';
import TalkToUs from '../Othercomps/Talktous';
import Reviews from '../Homecomps/Reviews';
import Clients from '../Homecomps/Clients';
import Clientele from '../Homecomps/Clientele';


import { FaCloud, FaDatabase } from "react-icons/fa";

import laptop from "../assets/Compressed/Laptop.png";
import healthrect1 from '../assets/Compressed/healthrect1.png';
import healthrect2 from '../assets/Compressed/healthrect2.png';
import healthrect3 from '../assets/Compressed/healthrect3.png';
import { FaMagnifyingGlass } from "react-icons/fa6";

const KeyService = ({ title, description, image }) => (
  <div className="flex-shrink-0 w-80 md:w-96 p-4 pb-16">
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image}
        alt={title} 
        className="w-full h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const industries = [
  { name: "OIL AND GAS INDUSTRY", id: "oil" },
  { name: "AUTOMOBILE INDUSTRY", id: "auto" },
  { name: "HEALTHCARE INDUSTRY", id: "health" }
];

const projects = {
  oil: [
    { title: "Offshore Platform Optimization", description: "Improved production efficiency by 25% through advanced AI-driven monitoring systems." },
    { title: "Energy Trading Platform", description: "Built a blockchain-based trading platform, improving transaction security and reducing costs by 20%." }
  ],
  auto: [
    { title: "Autonomous Driving AI", description: "Created a machine learning model improving object detection accuracy by 30% in diverse weather conditions." },
    { title: "Autonomous Driving AI", description: "Created a machine learning model improving object detection accuracy by 30% in diverse weather conditions." },
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
    <div className="font-manrope px-4 sm:px-6 lg:px-8">
      <h2 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
        Case Studies
      </h2>
      <h1 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1 pb-8">
        Explore how we digitally transformed other businesses
      </h1>
      <main className="container mx-auto max-w-7xl">
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
            className={`mb-12 px-2p ${activeIndustry === industry.id ? "block" : "hidden"}`}
          >
            <h2 className="text-xl  px-2 sm:text-2xl font-bold mb-4 sm:mb-6">{industry.name}</h2>
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

const services = [
  { id: "ehr", name: "Electronic Health Records (EHR)", image: healthrect1, description: "Implement comprehensive EHR systems that provide easy access to patient records, improve workflow efficiency, and enhance the quality of care." },
  { id: "telemedicine", name: "Telemedicine Solutions", image: healthrect2, description: "Enable remote consultations and virtual care through secure telemedicine platforms." },
  { id: "analytics", name: "Healthcare Analytics", image: healthrect3, description: "Leverage data analytics to derive insights, improve patient outcomes, and optimize resource allocation." },
  { id: "integration", name: "Medical Device Integration", image: healthrect1, description: "Seamlessly integrate medical devices with healthcare IT systems for real-time data collection and analysis." },
  { id: "mobility", name: "Healthcare Mobility Solutions", image: healthrect2, description: "Develop mobile applications for healthcare professionals and patients to access information on-the-go." }
];

function Healthcare() {
  const [activeService, setActiveService] = useState(services[0].id);
  const sliderRefs = useRef({});

  return (
    <div className="">
      <div className="sm:max-w-7xl w-screen mx-auto pb-8">
        <div className="sm:max-w-7xl 2xl:pt-12 pt-32 xl:pb-12 pb-4 px-4 w-screen mx-auto grid grid-cols-3">
          <img src={healthrect1} alt="" />
          <img src={healthrect2} alt="" />
          <img src={healthrect3} alt="" />
        </div>
        <div className="max-w-3xl mx-auto text-center px-8 flex flex-col gap-2">
          <h1 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl pb-4">
            Transforming <span className="text-bloo">Healthcare</span> with Innovative Technology 
          </h1>
          <p className="font-medium text-blackk/60 sm:text-xl text-lg text-justify">
            EICE empowers businesses to thrive in the digital age by leveraging cutting-edge technologies and innovative strategies, revolutionizing operations and enhancing competitiveness.
            At EICE, we understand the critical role technology plays in modern healthcare. Our comprehensive solutions are designed to enhance patient care, streamline operations, and support healthcare
            providers in delivering the highest standards of service. From hospitals and clinics to pharmaceutical companies and research institutions, we cater to diverse needs accross the healthcare sector.
          </p>
        </div>
        
        <div className="sm:max-w-3xl w-screen mx-auto text-center xl:pt-16 pt-8 xl:pb-6 pb-4">
          <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
            Key Services
          </h1>
          <h1 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl pb-4">Explore What We Offer</h1>
        </div>
        <div className="sm:max-w-7xl w-screen mx-auto px-4 pb-12">
            <div className="grid lg:grid-cols-3 grid-cols-3 lg:gap-12 gap-6 items-center justify-center">
                <div className="flex flex-col gap-2">
                {services.map((service) => (
                    <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={` block w-full text-left px-4 py-4 border border-gray-600/60 rounded-lg ${
                        activeService === service.id
                        ? "bg-blue-900 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    >
                    {service.name}
                    </button>
                ))}
                </div>
                <div className="relative h-full rounded-xl w-full col-span-2">
                {services.map((service) => (
                    service.id === activeService && (
                    <div key={service.id} className="p-4 w-full h-full rounded-xl">
                        <img 
                        src={service.image}
                        alt={service.name} 
                        className="absolute inset-0 -z-10 w-full h-full object-cover mb-4 rounded-xl"
                        />
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/90 rounded-xl to-black/30  -z-10"></div>
                        <div className="flex flex-col items-center justify-center h-full z-20 px-8 text-white">
                            <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                            <p className="font-medium text-white sm:text-xl text-lg">{service.description}</p>
                        </div>
                    </div>
                    )
                ))}
                </div>
            </div>
        </div>
        <div className="pt-20 pb-6">
          <h1 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl pb-4">
            Our Healthcare and IT Software Solutions 
          </h1>
        </div>
        <div className="grid px-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pb-16">
            <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
                <div className=" rounded-full flex items-start justify-start w-full px-4">
                    <FaDatabase size={60} className="text-bloo"/>  
                </div>
                <div className="pt-6 h-full text-left">
                    <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl px-4">ELECTRONIC HEALTH RECORDS</h1>
                    <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">We implement comprehensive EHR systems that provide easy access to patient records, improve workflow efficiency, and enhance the quality of care.</p>
                </div>
            </div>
            <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
                <div className=" rounded-full  flex items-start justify-start w-full px-4">
                    <FaCloud size={60} className="text-bloo"/>
                </div>
                <div className="pt-6 h-full text-left">
                    <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl px-4">TELEMEDICINE SOLUTIONS</h1>
                    <p  className="font-medium text-blackk/60 sm:text-xl text-lg px-4">We develop secure and user-friendly telemedicine platforms that enable remote consultations, virtual care, and improved patient access to healthcare services.</p>
                </div>
            </div>
            <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
                <div className=" rounded-full  flex items-start justify-start w-full px-4">
                    <FaMagnifyingGlass size={60} className="text-bloo"/> 
                </div>
                <div className="pt-6 h-full text-left">
                    <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl px-4">HEALTHCARE ANALYTICS</h1>
                    <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">We leverage advanced analytics and AI to extract actionable insights from medical data, enabling data-driven decision-making and improving patient outcomes.</p>    
                </div>
            </div>
        </div>
      </div>
      <Cstdmain />
      <Reviews />
      <TalkToUs />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Healthcare;