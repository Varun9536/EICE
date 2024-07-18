import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Workflow()
{
    return (
        <div className="font-manrope mx-auto sm:px-4 px-4 sm:max-w-7xl w-screen sm:pt-28 sm:pb-12 pt-20 pb-20">
            {/* <div className="w-screen h-1/4 bg-bloo/10 rotate-45 absolute top-0 z-1 left-[50%] blur-[300px]"></div> */}
            {/* <div className="w-full h-full bg-bloo/5 -rotate-45 absolute right-[75%] blur-[400px]"></div> */}
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-bloo font-bold sm:text-3xl text-2xl pb-2">Our Values</h1>
                <h2 className="text-blackk font-bold sm:text-6xl text-4xl sm:leading-tight leading-snug">Delivering Reliable and Quality Software Development Services</h2>
            </div>
            <div className="sm:py-16 py-12">
                <div className="flex flex-col items-center justify-center text-center text-blackk">
                    <h1 className="pb-4 text-blackk/90 font-semibold sm:text-3xl text-2xl sm:leading-relaxed leading-snug">EICE's Transparent Workflow</h1>
                    <p className="text-neutral-500/90 font-medium text-lg w-3/4 text-center">Ensuring clarity and visiblity throughout the development process to enhance collaboration and efficiency. Our workflow is well organized and flexible at its core.</p>
                </div>
                <div className="lg:flex lg:flex-row flex flex-col sm:pt-12 pt-12 items-center justify-center">
                    <div className="lg:w-52 lg:h-52 w-11/12 h-52 border-2 border-bloo rounded-lg">
                        <div className="flex flex-col text-center w-full h-full items-center justify-center">
                            <h1 className="font-bold pb-4 text-bloo">Discover</h1>
                            <p className="">Assessing the Requirements</p>
                        </div>
                    </div>
                    <div className="lg:p-4 p-1 lg:scale-100 scale-75">
                        <FaArrowRight size={30} className="text-blackk/50 lg:rotate-0 rotate-90"/>
                    </div>
                    <div className="lg:w-52 lg:h-52 w-11/12 h-52 border-2 border-amber-500 rounded-lg">
                        <div className="flex flex-col text-center w-full h-full items-center justify-center">
                            <h1 className="font-bold pb-4 text-amber-500">Define</h1>
                            <p>Determining the scope and creating an SRS</p>
                        </div>
                    </div>
                    <div className="lg:p-4 p-1 lg:scale-100 scale-75">
                        <FaArrowRight size={30} className="text-blackk/50 lg:rotate-0 rotate-90"/>
                    </div>
                    <div className="lg:w-52 lg:h-52 w-11/12 h-52 border-2 border-emerald-400 rounded-lg">
                        <div className="flex flex-col text-center w-full h-full items-center justify-center">
                            <h1 className="font-bold pb-4 text-emerald-500">Design</h1>
                            <p>System Design, UI/UX, Wireframing</p>
                        </div>
                    </div>
                    <div className="lg:p-4 p-1 lg:scale-100 scale-75">
                        <FaArrowRight size={30} className="text-blackk/50 lg:rotate-0 rotate-90"/>
                    </div>
                    <div className="lg:w-52 lg:h-52 w-11/12 h-52 border-2 border-cyan-400 rounded-lg">
                        <div className="flex flex-col text-center w-full h-full items-center justify-center">
                            <h1 className="font-bold pb-4 text-cyan-500">Product Development</h1>
                            <p>Coding APIs, Testing, Debuggins</p>
                        </div>
                    </div>
                    <div className="lg:p-4 p-1 lg:scale-100 scale-75">
                        <FaArrowRight size={30} className="text-blackk/50 lg:rotate-0 rotate-90"/>
                    </div>
                    <div className="lg:w-52 lg:h-52 w-11/12 h-52 border-2 border-rose-400 rounded-lg">
                        <div className="flex flex-col text-center w-full h-full items-center justify-center">
                            <h1 className="font-bold pb-4 text-rose-400">Delivery</h1>
                            <p>Maintenance and Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workflow;