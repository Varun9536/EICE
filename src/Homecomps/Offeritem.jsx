import React, { useState } from "react";
import { useHref } from "react-router-dom";
import arrowblue from '../assets/arrowblue.svg';
import {Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';


function Offeritem({ id, svg, title, link, fliptext }) {
   

    return (
        <Link to={link}
            className="bg-white rounded-md overflow-hidden transition hover:shadow-lg hover:shadow-blackk/30 hover:border hover:cursor-pointer duration-500 ease-in-out w-full h-80"
        >
            <div className={`p-8 flex flex-row gap-12`}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                    <div className="rounded-full bg-bloo/10 w-full h-full flex items-center justify-center">
                        <img
                            src={svg}
                            alt="svg"
                            className="object-contain w-3/4 h-3/4 scale-[.85]"
                        />
                    </div>
                </div>
                <div className="">
                    <h3 className="text-blackk font-bold text-xl py-4 sm:text-2xl">{title}</h3>
                    <h1 className="">{fliptext}</h1>
                </div>
            </div>
            
        </Link>
    );
}

export default Offeritem;