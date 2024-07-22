import React from "react";
import laptop2 from "../assets/Compressed/Laptop2.png";
import character from '../assets/Compressed/character.png';
import arrow from '../assets/arrow.svg';
import { Link } from 'react-router-dom';

function Casestudies() {
    return (
        <div className="bg-cstdbanner bg-no-repeat bg-cover">
            <div className="relative font-manrope py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
                        <div className="col-span-1 lg:col-span-2 text-center lg:text-left order-2 lg:order-1">
                            <div className="space-y-4">
                                <div className="leading-tight">
                                    <h1 className="font-base text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl !leading-tight">
                                        Contentment, gratification, fruition. <span className="text-bloo font-semibold block mt-2">
                                            Check our detailed case studies
                                        </span>
                                    </h1>
                                </div>
                            </div>
                            <div className="flex justify-center lg:justify-start py-6">
                                <Link to="/casestudies" className="inline-flex items-center justify-center py-3 px-6 sm:px-8 md:px-12 lg:px-24 border-2 border-blue-900 bg-blue-900 text-white font-semibold rounded-md text-base sm:text-lg transition duration-200 hover:bg-blue-900/90 hover:shadow-md hover:shadow-bloo/30">
                                    Explore <img src={arrow} alt="" className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end items-end order-1 lg:order-2 mb-6 lg:mb-0">
                            <img src={laptop2} alt="Laptop" className="max-w-full h-auto w-3/4 sm:w-2/3 lg:w-full" />
                        </div>
                    </div>
                </div>
                <div className="absolute hidden sm:block scale-75 sm:scale-100 w-32 h-32 sm:w-44 sm:h-44 right-4 sm:right-8 lg:right-16 bottom-4 sm:bottom-8 lg:bottom-16">
                    <img src={character} alt="character" className="w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default Casestudies;