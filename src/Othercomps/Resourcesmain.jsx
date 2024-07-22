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
            <div className="bg-gradient-to-br  from-cyan-100 to-bloo/10 w-screen 2xl:h-[35vh] h-[60vh] bg-cover bg-no-repeat -my-12">
                <div className=" max-w-7xl mx-auto w-full h-full">
                    <div className="2xl:pt-0 pt-24 flex flex-col items-center justify-center w-full h-full ">
                        <h1 className="text-blackk font-bold text-center text-3xl lg:text-5xl py-2">EICE Resources</h1>
                        <h2 className="text-bloo font-semibold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-4">Case Studies, Blogs and more</h2>
                        <h2 className="text-blackk/60 font-medium text-center sm:text-lg mx-auto lg:text-xl max-w-6xl py-2">Explore a wealth of knowledge and insights designed to help you navigate the
complexities of digital transformation and stay ahead in your industry. Our resources are
curated by experts to provide valuable information, practical strategies, and innovative
solutions that drive business success.</h2>
                        </div>
                </div>
                
            </div>
            <div className="pb-7"></div>
            
            <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-blackk font-bold text-center text-2xl sm:text-3xl lg:text-4xl max-w-3xl mx-auto mb-8 sm:mb-12">
                Discover, Innovate and Excel with EICE
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 xl:gap-0 gap-12 justify-center items-center">
                <div className="flex flex-col col-span-2">
                    <h2 className="text-blackk text-left font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">
                        Case Studies
                    </h2>
                    <p className="font-medium text-blackk/60 max-w-2xl text-base sm:text-lg mb-6">
                        Learn from real-world success stories where EICE has helped clients overcome challenges and achieve significant results. Our case studies highlight our approach, solutions, and the measurable impact of our work.
                    </p>
                    <Link to="/casestudies" className="self-start">
                        <button className="w-full sm:w-auto py-3 px-8 sm:px-12 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                            Learn More
                        </button>
                    </Link>
                </div>
                <div className="lg:order-last lg:block hidden order-first justify-end items-end relative w-full h-64 sm:h-80 rounded-full overflow-hidden">
                    <img src={budget2} alt="Case Study" className="w-full h-full object-cover rounded-full"/>
                    <div className="absolute inset-0 bg-slate-800/80 rounded-full"></div>
                </div>  
            </div>
        </div>
            <Talktous />
        </div>
    )
}

export default Resourcesmain;