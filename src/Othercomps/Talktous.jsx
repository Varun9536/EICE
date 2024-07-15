import React from "react";
import {Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';

function Talktous()
{
    return(
        <div className="relative">
            <div className="w-full max-w-screen mx-auto">
                <div className="w-full bg-talkbanner lg:py-12 py-20 h-0 pb-[40%] sm:pb-[30%] lg:pb-[25%] bg-cover bg-center bg-no-repeat rounded-lg"></div>
            </div>
            <div className="z-20 absolute inset-0 flex items-center justify-center px-4">
                <div className="max-w-7xl w-full mx-auto flex lg:flex-col flex-row justify-center items-center sm:items-start text-left">
                    <h1 className="text-blackk font-bold px-4 text-xl sm:text-2xl lg:text-3xl xl:text-4xl w-full sm:w-3/4 lg:w-2/3 pb-6 sm:pb-8 lg:pb-12">
                        Our strength lies in delivering innovative, <span className="text-bloo">Industry-Specific Solutions</span>. 
                        Partner with EICE to transform your business and achieve <span className="text-bloo">Exceptional Results</span>.
                    </h1>
                    <div className="px-4">  
                        <Link to="/contact" className="h-full">
                            <button className=" text-nowrap py-3 sm:py-4 lg:py-6 px-8 sm:px-12 lg:px-24 font-semibold rounded transition duration-200 border-2 border-blue-900 hover:bg-blue-900/95 bg-blue-900 text-white hover:shadow-md hover:shadow-blue-900/30 text-base sm:text-lg lg:text-xl">
                                Let's Connect
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Talktous;