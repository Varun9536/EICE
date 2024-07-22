import React from "react";
import Casestudies from "../Homecomps/Casestudies";
import Talktous from "../Othercomps/Talktous";
import { FaArrowRight } from "react-icons/fa";

import { Link } from 'react-router-dom';
import budget1 from "../assets/Compressed/budget1.jpg";
import budget2 from "../assets/Compressed/budget2.jpg";
import budget3 from "../assets/Compressed/budget3.jpg";

import UnclearRequirements from "../assets/Compressed/ConstrainedBudget.svg";
import EvolvingScope from "../assets/Compressed/Evolvingscope.svg";
import ConstrainedBudget from "../assets/Compressed/UnclearRequirements.svg";

function Resourcesmain()
{
    return(
        <div>
            <div className="bg-resourceshero w-screen h-screen bg-cover bg-no-repeat -my-12">
                <div className=" max-w-7xl mx-auto w-full h-full">
                    <div className="pb-80 flex flex-col items-center justify-center w-full h-full ">
                        <h1 className="text-white font-black text-center text-xl sm:text-3xl lg:text-5xl  py-2">EICE Resources</h1>
                        <h2 className="text-white  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-4">Case Studies, Blogs and more</h2>
                        <h2 className="text-white  font-medium text-center text-2xl sm:text-xl mx-auto md:text-2xl lg:text-[28px] max-w-6xl py-2">Explore a wealth of knowledge and insights designed to help you navigate the
complexities of digital transformation and stay ahead in your industry. Our resources are
curated by experts to provide valuable information, practical strategies, and innovative
solutions that drive business success.</h2>
                        </div>
                </div>
                
            </div>
            <div className="pb-7"></div>
            x
            <div className="max-w-7xl mx-auto  py-24">
            <h1 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1 pb-16">
       Discover, Innovate and Excel with EICE
      </h1>
            <div className="lg:grid lg:grid-cols-2 hidden items-center justify-center w-full h-full">
                    <div className="flex flex-col px-8 py-4">
                        <h1 className="text-blackk text-left w-full font-bold text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1 pb-4">Case Studies</h1>

                        <div className="flex flex-row gap-2"> 
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Learn from real-world success stories where EICE has

helped clients overcome challenges and achieve
significant results. Our case studies highlight our
approach, solutions, and the measurable impact of
our work.
                            </h2>
                        </div>
                        <Link to="/contact" className="py-4">
                                    <button className="w-full sm:w-auto py-4 px-24 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                                        Learn More
                                    </button>
                        </Link>
                    </div>
                    <div className="relative w-10/12 h-[20rem] rounded-full items-center justify-center flex justify-self-end">
                        <div className="flex flex-col p-16  justify-center  absolute inset-0  rounded-full">
                        </div>
                        <img src={budget2} alt="" className="w-full h-full object-cover rounded-full"/>
                        <div className="absolute inset-0 bg-slate-800/80 rounded-full"></div>
                    </div>  
                </div>
            </div>
            <Talktous />
        </div>
    )
}

export default Resourcesmain;