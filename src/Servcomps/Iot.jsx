import React, { useState, useRef } from "react";
import laptop from "../assets/Compressed/Laptop.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import dtransbanner from "../assets/Compressed/dtransbanner.jpg";
import servicebannerpattern from "../assets/Compressed/servicebannerpattern.png";

import { FaArrowRight } from "react-icons/fa";

import dtdigital from "../assets/Compressed/dtdigital.svg";
import dtdesign from "../assets/Compressed/dtdesign.svg";
import dtconsulting from "../assets/Compressed/dtconsulting.svg";

import Footer from '../Othercomps/Footer.jsx';
import Copyright from '../Othercomps/Copyright.jsx';
import TalkToUs from '../Othercomps/Talktous';
import Reviews from '../Homecomps/Reviews';
import Clients from '../Homecomps/Clients';
import Clientele from '../Homecomps/Clientele';


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
        <h2 className="text-bloo text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 py-1">
          Case Studies
        </h2>
        <h1 className="text-blackk max-w-7xl mx-auto text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 py-1">
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
                        ? "bg-bloo text-white"
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

function Iot()
{
    return (
        <div>
    <div className="xl:-mt-8 -mt-4 bg-gradient-to-r from-transparent via-bloo/5 to-bloo/10 pt-16 md:pt-20 lg:pt-12 2xl:pt-0">
        <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen ">
            <div className="absolute inset-0 left-[10%]">
                <img src={servicebannerpattern} alt="" />
            </div>
            <div className="flex lg:flex-row flex-col px-4 py-20 items-center">
                <div className="w-full">
                    <h1 className="text-blackk font-bold sm:text-6xl text-4xl sm:leading-tight leading-snug">IOT</h1>
                    <h2 className="text-blackk font-light sm:text-3xl text-2xl pb-4 pt-2">
                        {"Reduce costs and imporve operational efficiency with our IOT solutions"}
                    </h2>
                </div>
                <div className="lg:flex hidden items-center justify-end ">
                    <div className="lg:w-7/12 w-1/2">
                        <img src={dtransbanner} alt="" className="rounded-full"/>
                    </div>
                </div>
            </div>       
        </div>    
    </div>
    
    <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div>
        <h1 className="text-blackk font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Embrace the IoT Future: 
                <span className="text-bloo"> Innovation </span>
                for Competitive Advantage
            </h1>
        </div>
        <div>
            <p className="font-medium text-base sm:text-lg text-justify">
                In today's rapidly evolving IoT landscape, businesses must adapt to stay relevant. At EICE, we offer comprehensive IoT solutions to propel your organization into the future.
            </p>
            <p className="font-medium text-base sm:text-lg text-justify mt-4">
                Our strategic approach ensures alignment with your business objectives. Our experts combine industry insights with cutting-edge IoT technologies to implement solutions that drive meaningful change.
            </p>
        </div>
    </div>

    <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen py-20 pb-44">
        <h1 className="text-bloo font-bold sm:text-3xl text-2xl pb-4 text-center">Workflow</h1>
        <h2 className="text-blackk font-bold sm:text-4xl text-2xl sm:leading-tight leading-snug text-center">Our step-by-step process to help you on your IOT journey</h2>
        <p className="text-blackk/60 pt-2 max-w-5xl text-justify font-semibold mx-auto px-4">
            Our comprehensive IoT workflow begins with discovery and requirement gathering, followed by meticulous design and architecture planning. We then move to prototyping and validation to ensure functionality and scalability. Our expert team handles end-to-end development and seamless integration with existing systems. We manage deployment and implementation, ensuring optimal performance. Finally, we provide ongoing maintenance and support, guaranteeing the reliability and efficiency of your IoT solutions throughout their lifecycle.
        </p>
        <div>
        <div className="lg:flex lg:flex-row flex flex-col sm:pt-16 pt-16 items-center justify-center px-4">
                    <div className="lg:w-52 lg:h-52 w-11/12 h-52 border-2 border-bloo rounded-lg">
                        <div className="flex flex-col text-center w-full h-full items-center justify-center">
                            <h1 className="font-bold pb-4 px-2 text-bloo">Discovery & Requirement Gathering</h1>
                        </div>
                    </div>
                    <div className="lg:p-4 p-1 lg:scale-100 scale-75">
                        <FaArrowRight size={30} className="text-blackk/50 lg:rotate-0 rotate-90"/>
                    </div>
                    <div className="lg:w-52 lg:h-52 w-11/12 h-52 border-2 border-amber-500 rounded-lg">
                        <div className="flex flex-col text-center w-full h-full items-center justify-center">
                            <h1 className="font-bold pb-4 px-2 text-amber-500">Design & Architecture Planning</h1>
                            
                        </div>
                    </div>
                    <div className="lg:p-4 p-1 lg:scale-100 scale-75">
                        <FaArrowRight size={30} className="text-blackk/50 lg:rotate-0 rotate-90"/>
                    </div>
                    <div className="lg:w-52 lg:h-52 w-11/12 h-52 border-2 border-emerald-400 rounded-lg">
                        <div className="flex flex-col text-center w-full h-full items-center justify-center">
                            <h1 className="font-bold pb-4 px-2 text-emerald-500">Prototyping & Validation</h1>
                            
                        </div>
                    </div>
                    <div className="lg:p-4 p-1 lg:scale-100 scale-75">
                        <FaArrowRight size={30} className="text-blackk/50 lg:rotate-0 rotate-90"/>
                    </div>
                    <div className="lg:w-52 lg:h-52 w-11/12 h-52 border-2 border-purple-400 rounded-lg">
                        <div className="flex flex-col text-center w-full h-full items-center justify-center">
                            <h1 className="font-bold pb-4 px-2 text-purple-400">Development & Deployment</h1>
                            
                        </div>
                    </div>
                    <div className="lg:p-4 p-1 lg:scale-100 scale-75">
                        <FaArrowRight size={30} className="text-blackk/50 lg:rotate-0 rotate-90"/>
                    </div>
                    <div className="lg:w-52 lg:h-52 w-11/12 h-52 border-2 border-rose-400 rounded-lg">
                        <div className="flex flex-col text-center w-full h-full items-center justify-center">
                            <h1 className="font-bold pb-4 px-2 text-rose-400">Maintenance & Support</h1>
                            
                        </div>
                    </div>
                </div>
        </div>
    </div>
   
    <Cstdmain />
    <Reviews />
    <TalkToUs />
    <Clients />
    <Clientele />
    <Footer/>
    <Copyright />
</div>
    )
}

export default Iot;