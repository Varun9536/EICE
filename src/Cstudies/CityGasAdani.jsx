import React from "react";
import Footer from "../Othercomps/Footer";
import Copyright from "../Othercomps/Copyright";

import temp from "../assets/Compressed/temp.png";
import temp2 from "../assets/Compressed/temp2.png";
import espctquote1 from "../assets/Compressed/espctquote1.png";
import espctquote2 from "../assets/Compressed/espctquote2.png";
import petrosim1 from "../assets/Compressed/kbcchempetro1.png";
import petrosim2 from "../assets/Compressed/kbcchempetro2.png";
import adanigas1 from "../assets/Compressed/adanigas1.png";
import adanigas2 from "../assets/Compressed/adanigas2.png";

import { GiVirtualMarker } from "react-icons/gi";
import { Link } from "react-router-dom";
import PetroSIM from "./PertroSIM";

function CityGasAdani() {
  return (
    <div className="text-justify">
      <div className="max-w-7xl text-justify mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
            City Gas Distribution
          </h1>
          <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Construction and Operational Management System
          </h2>
          <p className="font-medium max-w-4xl mx-auto text-justify text-blackk/60 sm:text-xl text-lg pt-4 px-4">
            Development of a GIS-based real-time construction and operational
            management system for City Gas Distribution in Faridabad, India,
            integrating multiple data sources for comprehensive project
            execution and monitoring.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={adanigas1} alt="" className="w-full h-full object-fit" />
            <img src={adanigas2} alt="" className="w-full h-full object-fit" />
          </div>
        </div>
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 font-bold text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
            Key Challenges
          </h2>
          <div className="max-w-3xl  mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4 ">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                01
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                {" "}
                Implementing real-time construction data updates on a GIS
                platform
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                02
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Integrating diverse data sources (Customer data, Honeywell
                SCADA, SAP) into a unified GIS system
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                03
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Developing a final pipe book in APDM format
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                04
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Ensuring seamless data flow between construction, operational,
                and financial systems
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                05
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Creating a scalable solution that could be adapted for other
                city gas projects, particularly in the Middle East
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
            About Our Client
          </h1>
          <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            ESPCT : ESP Completion Technologies
          </h2>
          <p className="font-medium text-blackk/60 sm:text-xl text-lg pt-4">
            ESPCT designs, manufactures and installs proprietary completion
            equipment for electric submersible pump (ESP) systems to meet the
            needs of ESP OEMs and E&P operators. ESPCT is headquartered in
            Missouri City, Texas with three service centers located across the
            United States. They specialize in dual parallel and dual concentric
            installations, providing all equipment as a integrated system from
            the wellhead to the motor base. Having hundreds of successful
            installations, ESPCT is a leader in the submersible pump field.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-20 pb-6">
          <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
            Unlocking Success
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pb-20">
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="w-full h-full items-center justify-start px-2 pb-2">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col p-2 text-start justify-end">
                  <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl">
                    IDEATION:
                  </h1>
                  <p className="z-20 font-medium text-blackk/60 sm:text-xl text-lg">
                    We envisioned a comprehensive GIS-based system that would
                    integrate real-time construction data, operational
                    information, and financial data for efficient management of
                    city gas distribution projects. Our focus was on creating a
                    versatile platform that could streamline project execution
                    and provide valuable insights for decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col p-2 text-start justify-end ">
                  <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl">
                    OUR APPROACH
                  </h1>
                  <p className="z-20 font-medium text-blackk/60 sm:text-xl text-lg">
                    We prioritized the development of a Web GIS interface that
                    could handle real-time construction data updates. By
                    integrating multiple data sources, including customer
                    information, SCADA systems, and SAP, we aimed to create a
                    holistic view of the project. We also focused on producing
                    standardized documentation like the APDM pipe book to ensure
                    comprehensive project records.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                <div className="grid grid-cols-2 gap-0">
                  <GiVirtualMarker size={50} className="text-bloo" />
                </div>
              </div>
              <div>
                <div className="flex flex-col p-2 text-start">
                  <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl">
                    OUTCOMES
                  </h1>
                  <p className="z-20 font-medium text-blackk/60 sm:text-xl text-lg">
                    The GIS-based system for the Faridabad City Gas Distribution
                    project has revolutionized project execution and monitoring.
                    Its ability to provide real-time construction updates,
                    integrated with operational and financial data, has
                    significantly improved project management efficiency.
                    Moreover, the potential for adapting this system into a
                    product for city gas projects, especially in the Middle
                    East, showcases the scalability and market relevance of our
                    solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-20 px-4">
        <h2 className="text-blackk max-w-3xl pb-2 font-bold text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
          Project Outcomes
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              01
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Successfully developed a Web GIS-based Real-time Pipe Book system
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              02
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Integrated real-time construction data with GIS for improved
              project monitoring
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              03
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Created a final pipe book in APDM format for comprehensive
              documentation
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              04
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Achieved integration of customer data, operational data (Honeywell
              SCADA), and SAP on GIS for charge area management
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              05
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Developed a potential product for city gas distribution projects,
              applicable in other regions
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 bg-zinc-50">
        <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
          More Like This
        </h1>
        <h2 className="text-blackk max-w-3xl pb-2 text-center font-bold text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px]">
          Take a look at other Case Studies
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 w-full">
          <div className="p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link
              to="/Casestudy/PetroSIM"
              className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <img
                  src={petrosim1}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    PetroSIM
                  </h3>
                  <p className="font-medium text-blackk/60 text-lg text-left">
                    Product Quality Assurance for Refinery Simulation Tool
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link
              to="/Casestudy/ReliMonitor"
              className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <img
                  src={temp}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    RE.LI Monitor
                  </h3>
                  <p className="font-medium text-blackk/60 text-lg text-left">
                    Developed a Real Time Sensor monitoring tool using SCADA
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link
              to="/Casestudy/EspctQuote"
              className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <img
                  src={espctquote1}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    ESPCT Quote
                  </h3>
                  <p className="font-medium text-blackk/60 text-lg text-left">
                    Web Based Sales and Quotation Tool
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default CityGasAdani;
