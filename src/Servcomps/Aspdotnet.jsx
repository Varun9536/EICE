import React, { useState, useRef } from "react";
import laptop from "../assets/Compressed/Laptop.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import dtransbanner from "../assets/Compressed/dtransbanner.jpg";
import servicebannerpattern from "../assets/Compressed/servicebannerpattern.png";

import { FiCheckCircle } from "react-icons/fi";

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

function Aspdotnet()
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
                <h1 className="text-blackk font-bold sm:text-6xl text-4xl sm:leading-tight leading-snug">ASP.NET</h1>
                <h2 className="text-blackk font-light sm:text-3xl text-2xl pb-4 pt-2">
                    {"Enhance your web applications and streamline development with our ASP.NET solutions"}
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

    
    <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen py-20 pb-44">
        <h1 className="text-bloo font-bold sm:text-3xl text-2xl pb-4 text-center">Core Competencies</h1>
        <h2 className="text-blackk font-bold sm:text-4xl text-2xl sm:leading-tight leading-snug text-center">Our ASP.NET Expertise</h2>
        <div className="grid px-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-16">
    <div className="w-full  h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
        <div className="h-1/2 rounded-full bg-bloo/10">
            <img src={dtdigital} alt="" />
        </div>
        <div className="pt-6 h-full text-center">
            <h1 className="font-semibold  pb-2 text-xl">ASP.NET App Development</h1>
            <p className="text-justify">Build scalable, high-performance web applications tailored to your business requirements using the latest ASP.NET technologies.</p>
        </div>
    </div>
    <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
        <div className="h-1/2 rounded-full bg-bloo/10">
            <img src={dtconsulting} alt="" className="scale-[0.85]"/>
        </div>
        <div className="pt-6 h-full text-center">
            <h1 className="font-semibold pb-2 text-xl">ASP.NET Core Development</h1>
            <p className="text-justify">Develop modern, cross-platform web applications with ASP.NET Core for enhanced performance and flexibility.</p>
        </div>
    </div>
    <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
        <div className="h-1/2 rounded-full bg-bloo/10">
            <img src={dtdesign} alt="" className="scale-[0.8]"/>
        </div>
        <div className="pt-6 h-full text-center">
            <h1 className="font-semibold pb-2 text-xl">Web API Development</h1>
            <p className="text-justify">Create robust and secure Web APIs for integration with various clients and services using ASP.NET technologies.</p>    
        </div>
    </div>
    <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
        <div className="h-1/2 rounded-full bg-bloo/10">
            <img src={dtdesign} alt="" />
        </div>
        <div className="pt-6 h-full text-center">
            <h1 className="font-semibold pb-2 text-xl">ASP.NET Maintenance & Support</h1>
            <p className="text-justify">Provide ongoing maintenance and support services to ensure your ASP.NET applications run smoothly and efficiently.</p>
        </div>
    </div>
    <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
        <div className="h-1/2 rounded-full bg-bloo/10">
            <img src={dtdesign} alt="" />
        </div>
        <div className="pt-6 h-full text-center">
            <h1 className="font-semibold pb-2 text-xl">ASP.NET Migration Services</h1>
            <p className="text-justify">Assist in migrating legacy applications to the latest ASP.NET framework for improved performance, security, and scalability.</p>
        </div>
    </div>
    <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
        <div className="h-1/2 rounded-full bg-bloo/10">
            <img src={dtdesign} alt="" />
        </div>
        <div className="pt-6 h-full text-center">
            <h1 className="font-semibold pb-2 text-xl">Custom ASP.NET Development</h1>
            <p className="text-justify">Develop custom ASP.NET solutions tailored to your specific business needs and challenges.</p>
        </div>
    </div>
</div>
    </div>

    <div className="pb-32">
        <h1 className="text-bloo font-bold sm:text-3xl text-2xl pb-4 text-center">Why Choose Us</h1>

    <div className="relative px-4 font-manrope mx-auto sm:max-w-7xl w-screen pt-12">
        <div className="grid grid-cols-1 gap-10">
            {[
            { title: "Holistic Approach", content: "We offer end-to-end ASP.NET solutions, from strategy to implementation and beyond." },
            { title: "State-of-the-Art ASP.NET Techniques", content: "Our approach leverages the latest ASP.NET frameworks and techniques, ensuring cutting-edge solutions for your business challenges." },
            { title: "Collaborative Partnership", content: "We work closely with your team, fostering ASP.NET knowledge transfer and ensuring alignment with your organization's goals." },
            { title: "ASP.NET Industry Expertise", content: "Our team of ASP.NET experts brings deep knowledge across various industries, ensuring tailored ASP.NET solutions for your specific sector." },
            { title: "Innovative ASP.NET Technologies", content: "We leverage cutting-edge ASP.NET technologies to drive innovation and create competitive advantages." },
            { title: "Proven ASP.NET Track Record", content: "Our successful ASP.NET implementations across various industries demonstrate our ability to deliver tangible results and ROI." }
            ].map((item, index) => (
            <div key={index} className="flex items-start space-x-8 ">
                <div className="flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                    <p className="text-xl lg:text-2xl">
                        <span className="font-semibold">{item.title}: </span>
                        {item.content}
                    </p>
                </div>
            </div>
                ))}
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

export default Aspdotnet;