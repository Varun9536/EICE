import React from "react";
import laptop from "../assets/Compressed/Laptop.png";
import arrow from '../assets/arrow.svg';
import {Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';


function Casestudies() {
    return (
        <div className="font-manrope py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <h2 className="text-bloo font-bold text-xl sm:text-2xl lg:text-3xl mb-4 py-1">
                            Case Studies
                        </h2>
                        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-8 py-1">
                            Discover our innovative solutions across industries through detailed case studies
                        </h1>
                        <div className="flex justify-center lg:justify-start py-1">
                            <Link to="/casestudies" className="inline-flex items-center justify-center py-4 px-24 border-2 border-bloo bg-bloo text-white font-semibold rounded-md text-lg transition duration-200 hover:bg-bloo/90 hover:shadow-md hover:shadow-bloo/30">
                                Explore <img src={arrow} alt="" className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center items-center order-1 lg:order-2">
                        <img src={laptop} alt="Laptop" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Casestudies;