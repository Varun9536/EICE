import React from "react";
import {Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';

function Talktous()
{
    return(
        <div className="relative">
            <div className="w-full max-w-screen mx-auto mb-12 sm:mb-16">
                <div className="w-full bg-talkbanner h-0 pb-[40%] sm:pb-[30%] lg:pb-[25%] bg-cover bg-center bg-no-repeat rounded-lg"></div>
            </div>
            <div className="z-20 absolute inset-0 sm:max-w-7xl w-screen mx-auto flex flex-col items-start">
                <h1 className="text-blackk font-bold text-2xl sm:text-3xl lg:text-4xl w-1/2 pb-12">
                    Our strength lies in delivering innovative, <span className="text-bloo">Industry-Specific Solutions</span>. 
                    Partner with EICE to transform your business and achieve <span className="text-bloo">Exceptional Results</span>.
                </h1>
                <Link to="/contact">
                        <button className="text-nowrap py-6 px-24 font-semibold rounded transition duration-200 border-2 border-blue-900  hover:bg-blue-900/95 bg-blue-900 text-white hover:shadow-md hover:shadow-blue-900/30 text-lg 2xl:text-xl">
                          Let's Connect
                        </button>
                </Link>
            </div>
        </div>
    )
}

export default Talktous;