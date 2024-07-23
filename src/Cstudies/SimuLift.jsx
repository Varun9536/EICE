import React from "react";
import Footer from "../Othercomps/Footer";
import Copyright from "../Othercomps/Copyright";

import temp from '../assets/Compressed/temp.png';
import temp2 from '../assets/Compressed/temp2.png';
import espctquote1 from '../assets/Compressed/espctquote1.png';
import espctquote2 from '../assets/Compressed/espctquote2.png';
import petrosim1 from '../assets/Compressed/kbcchempetro1.png';
import petrosim2 from '../assets/Compressed/kbcchempetro2.png';
import adanigas1 from '../assets/Compressed/adanigas1.png';
import adanigas2 from '../assets/Compressed/adanigas2.png';


import { GiVirtualMarker } from "react-icons/gi";
import { Link } from "react-router-dom";
import PetroSIM from "./PertroSIM";


function SimuLift()
{
    return(
        <div className="text-justify">
            <div className="max-w-7xl text-justify mx-auto px-4 2xl:pt-12 pt-32">
                <div className="w-full">
                    <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">SimuLIFT</h1>
                    <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">Quote and Sizing tool for Artificial Lift Methods</h2>
                    <p className="font-medium max-w-4xl mx-auto text-justify text-blackk/60 sm:text-xl text-lg pt-4 px-4">Development of a  software application to design artificial lift solutions for the oil industry covering different artificial lift methods from ESP design to PCP and Hydraulic Rod pump systems.</p>
                    <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4"><img src={adanigas1} alt="" className="w-full h-full object-fit"/><img src={adanigas2} alt="" className="w-full h-full object-fit"/></div>
                </div>
                <div className="w-full pb-6">
                    <h2 className="text-blackk max-w-3xl pb-2 font-bold text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">Key Challenges</h2>
                    <div className="max-w-3xl  mx-auto flex flex-col py-4 gap-4">
                        <div className="flex gap-4 ">
                            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">01</h1>
                            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2"> Designing a comprehensive tool that integrates various artificial lift methods</p>
                        </div>
                        <div className="flex gap-4">
                            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">02</h1>
                            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">Ensuring accurate and reliable data for quoting and sizing.</p>
                        </div>
                        <div className="flex gap-4">
                            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">03</h1>
                            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">Facilitating ease of use for sales and engineering teams.</p>
                        </div>
                        <div className="flex gap-4">
                            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">04</h1>
                            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">Integrating with existing systems for seamless data flow.</p>
                        </div>
                        <div className="flex gap-4">
                            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">05</h1>
                            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">Providing extensive reporting features for detailed analysis.</p>
                        </div>
                    </div>
                </div>
                
            </div>
                <div className="bg-zinc-50 py-12 mt-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">About Our Client</h1>
                        <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">HALLIBURTON</h2>
                        <p className="font-medium text-blackk/60 sm:text-xl text-lg pt-4">
                        Founded in 1919, Halliburton is one of the world's leading providers of products and services to the energy industry.
                        They create innovative technologies, products, and services that help our customers maximize their value throughout the life cycle of an asset and advance a sustainable energy future.
                        </p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="pt-20 pb-6">
                        <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">Unlocking Success</h1>
                    </div>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pb-20">
                            <div  className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
                                <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
                                    <div className="w-full h-full items-center justify-start px-2 pb-2">
                                        <GiVirtualMarker size={50} className="text-bloo"/>
                                    </div>
                                    <div>
                                        <div className="flex flex-col p-2 text-start justify-end">
                                            <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl">IDEATION:</h1>
                                            <p className="z-20 font-medium text-blackk/60 sm:text-xl text-lg">
                                            We envisioned a robust software tool that could simplify the process of designing and quoting artificial lift solutions. Our focus was on creating an intuitive platform that supports multiple lift methods and provides accurate data for decision-making.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
                                <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
                                    <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                                        <GiVirtualMarker size={50} className="text-bloo"/>
                                    </div>
                                    <div>
                                        <div className="flex flex-col p-2 text-start justify-end ">
                                            <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl">OUR APPROACH</h1>
                                            <p className="z-20 font-medium text-blackk/60 sm:text-xl text-lg">
                                            We prioritized the development of an easy-to-use interface that could handle various artificial lift methods. By integrating comprehensive data inputs and offering detailed reporting features, we aimed to support both engineering and sales functions. We also focused on ensuring seamless integration with existing systems for smooth data flow.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
                                <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
                                    <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                                        <div className="grid grid-cols-2 gap-0">
                                        <GiVirtualMarker size={50} className="text-bloo"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col p-2 text-start">
                                            <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl">OUTCOMES</h1>
                                            <p className="z-20 font-medium text-blackk/60 sm:text-xl text-lg">
                                            The development of SimuLIFT has significantly enhanced Halliburton's ability to design and quote artificial lift solutions. Its user-friendly interface, combined with robust data handling and reporting features, has improved efficiency and accuracy in project execution. Moreover, the software's capability to integrate with existing systems showcases its adaptability and relevance in the industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="w-full pb-20 px-4">
                    <h2 className="text-blackk max-w-3xl pb-2 font-bold text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">Project Outcomes</h2>
                    <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
                        <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
                            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">01</h1>
                            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">Successfully developed a comprehensive quote and sizing tool for artificial lift methods.</p>
                        </div>
                        <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
                            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">02</h1>
                            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">Enhanced the ability to design and quote using various lift methods accurately.</p>
                        </div>
                        <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
                            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">03</h1>
                            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">Improved data integration for seamless information flow.</p>
                        </div>
                        <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
                            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">04</h1>
                            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">Provided extensive reporting features for detailed project analysis.</p>
                        </div>
                        <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
                            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">05</h1>
                            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">Developed a versatile tool that supports both engineering and sales functions.</p>
                        </div>
                    </div>
                </div>
                <div className="py-12 bg-zinc-50">
                    <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">More Like This</h1>
                    <h2 className="text-blackk max-w-3xl pb-2 text-center font-bold text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px]">Take a look at other Case Studies</h2>
                    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 w-full">
                        <div className="p-2 rounded-xl hover:scale-[.99] transition duration-300">
                            <Link to='/CaseStudy-PetroSIM' className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                                <img 
                                    src={petrosim1}
                                    className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
                                />
                                <div className="p-3 md:p-4">
                                    <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">PetroSIM</h3>
                                    <p className="font-medium text-blackk/60 text-lg text-left">Product Quality Assurance for Refinery Simulation Tool</p>
                                </div>
                                </div>
                            </Link>
                        </div>
                        <div className="p-2 rounded-xl hover:scale-[.99] transition duration-300">
                            <Link to='/CaseStudy-ReliMonitor' className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                                <img 
                                    src={temp}
                                    className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
                                />
                                <div className="p-3 md:p-4">
                                    <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">RE.LI Monitor</h3>
                                    <p className="font-medium text-blackk/60 text-lg text-left">Developed a Real Time Sensor monitoring tool using SCADA</p>
                                </div>
                                </div>
                            </Link>
                        </div>
                        <div className="p-2 rounded-xl hover:scale-[.99] transition duration-300">
                            <Link to='/CaseStudy-EspctQuote' className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                                <img 
                                    src={espctquote1}
                                    className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
                                />
                                <div className="p-3 md:p-4">
                                    <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">ESPCT Quote</h3>
                                    <p className="font-medium text-blackk/60 text-lg text-left">Web Based Sales and Quotation Tool</p>
                                </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            <Footer />
            <Copyright />
        </div>
    )
}

export default SimuLift;