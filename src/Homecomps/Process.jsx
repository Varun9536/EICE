import React from "react";
import {Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';

function Process()
{
    return(
        <div>
            {/*Pattern*/}
            <div className="bg-bgplate bg-cover py-20"></div>
                {/* Proven processes, unparalelled expertise, top notch tools */} 
                <div className="bg-zinc-50">
                    <div className="sm:max-w-7xl mx-auto w-screen">
                        
                        <div className="flex flex-col items-center justify-center pb-12 sm:pb-16 md:pb-20">
                            <p className="text-bloo font-bold text-xl sm:text-2xl lg:text-3xl mb-4 py-1">
                                Agile Software Development
                            </p>
                            <h2 className="text-blackk font-extrabold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[36px] max-w-4xl py-1">
                                Proven processes, unparalelled expertise, and top notch tools 
                            </h2>
                        </div>

                        <div>
                            
                        </div>

                    </div>
                </div>
            {/*Pattern*/}
            <div className="bg-bgplate bg-cover py-20 rotate-180"></div>
        
        </div>
    )
}

export default Process;