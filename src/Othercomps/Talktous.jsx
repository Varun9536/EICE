import React from "react";
import {Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';

function Talktous()
{
    return(
        <div className="bg-talkbanner py-12">
            <div className="flex items-center justify-center pb-10 sm:pb-12 lg:pb-16">
                <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 lg:gap-12 gap-4 grid-cols-1 justify-center items-center text-left">
                    <h1 className="col-span-2 max-w-3xl text-blackk lg:text-left text-left font-bold px-4 text-xl sm:text-2xl lg:text-3xl xl:text-4xl w-full ">
                        Our strength lies in delivering innovative, <span className="text-bloo">Industry-Specific Solutions</span>. 
                        Partner with EICE to transform your business and achieve <span className="">Exceptional Results</span>.
                    </h1>
                    <div className="px-4 flex lg:pt-0 pt-4">  
                        <Link to="/contact" className="h-full">
                            <button className=" text-nowrap py-3 sm:py-4 rounded-md lg:py-6 px-8 sm:px-12 lg:px-24 font-semibold transition duration-200 border-2 border-blue-900 hover:bg-blue-900/95 bg-blue-900 text-white hover:shadow-md hover:shadow-blue-900/30 text-base sm:text-lg lg:text-xl">
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