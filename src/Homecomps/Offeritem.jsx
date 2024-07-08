import React, { useState } from "react";
import { useHref } from "react-router-dom";
import arrowblue from '../assets/arrowblue.svg';
import {Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';


function Offeritem({ id, svg, title, link, fliptext }) {
    const [showDetails, setShowDetails] = useState(false);
    const handleMouseEnter = () => setShowDetails(true);
    const handleMouseLeave = () => setShowDetails(false);
   

    return (
        <div 
            className="offer-item offer-item-border shadow-sm border border-blackk/20 hover:shadow-bloo/50 hover:shadow-md bg-white rounded-md overflow-hidden transition duration-500 ease-in-out w-full max-w-[400px] h-80"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`front h-full flex flex-col justify-between p-4`}>
                <div className="flex justify-center items-center h-4/5">
                    <img
                        src={svg}
                        alt="svg"
                        className="w-auto h-32 object-contain"
                    />
                </div>
                <div className="items-start justify-start"><h3 className="text-blackk text-center font-bold text-xl sm:text-2xl">{title}</h3></div>
            </div>
            <div className={`back h-full flex flex-col justify-between p-4 ${showDetails ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
                <p className="font-manrope text-blackk text-left sm:text-lg">
                    {fliptext}
                </p>
                <Link
                    to={`${link}`}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2 px-4 transition duration-200 border-2 border-bloo hover:shadow-md hover:shadow-bloo/30 text-bloo font-semibold rounded text-sm sm:text-base"
                >
                    Learn More <img src={arrowblue} alt="" className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}

export default Offeritem;