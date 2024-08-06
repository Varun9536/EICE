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
import datamgmt1 from "../assets/Compressed/datamgmt1.png";
import datamgmt2 from "../assets/Compressed/datamgmt2.png";
import peep1 from "../assets/Compressed/Peep1.png";
import peep2 from "../assets/Compressed/Peep2.png";

import { GiVirtualMarker } from "react-icons/gi";
import { Link } from "react-router-dom";

function Peep() {
  return (
    <div className="text-justify">
      <div className="max-w-7xl text-justify mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
            Peep Model Visualizer
          </h1>
          <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            Development of Tool for Monitoring of Petroleum Financial Models
            (Peep Model Visualizer)
          </h2>
          <p className="font-medium max-w-4xl mx-auto text-justify text-blackk/60 sm:text-xl text-lg pt-4 px-4">
            Development of Peep Model Visualizer: A comprehensive solution for
            visualizing and analyzing complex petroleum financial models,
            enhancing decision-making in upstream oil and gas projects.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img src={peep1} alt="" className="w-full h-full object-fit" />
            <img src={peep2} alt="" className="w-full h-full object-fit" />
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
                Data complexity: Handling intricate financial models with
                numerous interconnected variables.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                02
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Visualization: Creating intuitive visual representations of
                complex economic relationships.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                03
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Model comparison: Enabling side-by-side analysis of different
                financial scenarios.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                04
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Usability: Developing a user-friendly interface for economists
                and engineers across the industry.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                05
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Scalability: Ensuring the tool can handle models from various
                oil and gas companies worldwide.
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
            Schlumberger
          </h2>
          <p className="font-medium text-blackk/60 sm:text-xl text-lg pt-4">
            Schlumberger supplies the petroleum industry with services such as
            seismic data processing, formation evaluation, well testing and
            directional drilling, well cementing and stimulation, artificial
            lift, well completions, flow assurance and consulting, and software
            and information management.
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
                    We designed an advanced visualization tool that transforms
                    complex petroleum economic models into easily understandable
                    visual diagrams. Our focus was on creating a platform that
                    could streamline financial analysis and improve
                    decision-making processes in the oil and gas industry.
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
                    We prioritized the development of an intuitive interface
                    that presents financial data in both detailed and
                    diagrammatic views. By implementing interactive elements and
                    comparative analysis features, we created a powerful tool
                    for in-depth exploration of economic models.
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
                    The Peep Model Visualizer has revolutionized the way
                    petroleum financial models are analyzed and understood. The
                    system's ability to provide clear visual representations of
                    complex economic relationships has significantly improved
                    decision-making processes in upstream oil and gas projects.
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
              Developed a sophisticated tool for visualizing and analyzing
              petroleum financial models.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              02
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Implemented an interactive diagram view that clearly illustrates
              the relationships between various financial components.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              03
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Created a comparative analysis feature allowing users to examine
              multiple scenarios simultaneously.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              04
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Established a user-friendly interface accessible to both
              economists and engineers in the industry.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              05
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Successfully deployed the tool across approximately 350 oil and
              gas companies, serving over 4,000 users worldwide.
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
              to="/CaseStudy-PetroSIM"
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
              to="/CaseStudy-ReliMonitor"
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
              to="/CaseStudy-EspctQuote"
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

export default Peep;
