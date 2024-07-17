import React from "react";
import laptop from "../assets/Compressed/Laptop.png";
import character from '../assets/Compressed/character.png';
import arrow from '../assets/arrow.svg';
import {Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';


function Casestudies() {
    return (
        <div className="bg-cstdbanner bg-no-repeat bg-cover">
            <div className="relative font-manrope py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto ">
                <div className=" grid grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                    <div className="col-span-2 text-center px-4 lg:text-left order-2 lg:order-1">
                    <div className="space-y-2">
                        <div className="leading-tight pr-24">
                            <h1 className="font-base text-2xl sm:text-3xl lg:text-4xl xl:text-5xl !leading-tight">
                                Happy chills, contentment, gratification, fruition.  <span className="text-bloo font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                                Check our detailed case studies
                            </span>
                            </h1>
                        </div>
                        <div className="leading-snug">
                            
                        </div>
                    </div>
                        <div className="flex justify-center lg:justify-start py-1 pt-4">
                            <Link to="/casestudies" className="inline-flex items-center justify-center py-4 px-24 border-2 border-blue-900 bg-blue-900 text-white font-semibold rounded-md text-lg transition duration-200 hover:bg-blue-900/90 hover:shadow-md hover:shadow-bloo/30">
                                Explore <img src={arrow} alt="" className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-end items-end order-1 lg:order-2">
                        <img src={laptop} alt="Laptop" className="max-w-full h-auto" />
                    </div>
                </div>
                
            </div>
            <div className="absolute scale-[.8] w-44 h-44 right-[7rem] bottom-[7rem]">
                    <img src={character} alt="character" />
                </div>
        </div>
        </div>
    )
}

export default Casestudies;