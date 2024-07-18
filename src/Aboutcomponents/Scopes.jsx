import React from "react";
import budget1 from "../assets/Compressed/budget1.jpg";
import budget2 from "../assets/Compressed/budget2.jpg";
import budget3 from "../assets/Compressed/budget3.jpg";

import UnclearRequirements from "../assets/Compressed/ConstrainedBudget.svg";
import EvolvingScope from "../assets/Compressed/Evolvingscope.svg";
import ConstrainedBudget from "../assets/Compressed/UnclearRequirements.svg";


import { FaArrowRight } from "react-icons/fa";

function Scopes()
{
    return(
        <div className="font-manrope mx-auto sm:px-4 px-4 sm:max-w-7xl w-screen sm:pt-6 sm:pb-36 py-4">
            <div className="text-center text-blackk font-bold sm:text-4xl text-3xl">
                <div className="flex flex-col items-center justify-center text-center sm:pb-6 pb-2">
                    <h1 className="text-bloo font-bold sm:text-3xl text-2xl pb-4">Engage with Us</h1>
                    <h2 className="text-blackk font-bold sm:text-6xl text-4xl sm:leading-tight leading-snug">Choosing an appropriate engagement method for your project</h2>
                </div>
                <div className="font-medium text-blackk/60 sm:text-xl text-lg lg:px-32 sm:pt-4 pt-2 text-justify">
                    <p>
                        The working model between the client and company plays a massive part in catering to each unique project. 
                        After an assessment of cost, time and scope; Our robust, simple and flexible models can be utilised to cater to your every need.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-24 items-center justify-center sm:pt-20 pt-16">
                <div className="lg:grid lg:grid-cols-2 flex flex-col items-center justify-center w-full h-full">
                    <div className="relative w-11/12 h-[30rem] items-center justify-center flex justify-self-start">
                        <div className="flex flex-col p-16  absolute inset-0 justify-center">
                            <div className="z-20 pb-8 justify-start flex w-full px-4"><img src={ConstrainedBudget} alt="" className="scale-[1.2]"/></div>
                            <h1 className="text-white z-20 font-bold text-4xl pb-4 px-2">Constrained Budget</h1>
                            <p className="z-20 text-white/90 text-lg px-2 text-left font-medium">
                                Well defined project guidelines & complete scope. Allows us to give you a fixed cost and timeline.
                            </p>
                        </div>
                        <img src={budget1} alt="" className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-cyan-600/80"></div>
                    </div>
                    <div className="flex flex-col px-8 py-4">
                        <h1 className="w-full text-center text-blackk/50 font-semibold text-2xl pb-2">When to Choose</h1>
                        <h1 className="w-full text-center text-blackk font-semibold text-3xl pb-8">Constrained Budget Engagement</h1>
                        <div className="flex flex-row gap-2 py-2"> 
                            <FaArrowRight size={30} className="text-blackk/70"/>
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Clear, Constrcited scope with requirements that are unlikely to change throughout the project</h2>
                        </div>
                        <div className="flex flex-row gap-2 py-2"> 
                            <FaArrowRight size={30} className="text-blackk/70"/>
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Long term milestones can be defined irrespective of the chosen development model (ie; Agile, Spiral, etc.)</h2>
                        </div>
                        <div className="flex flex-row gap-2 py-2"> 
                            <FaArrowRight size={30} className="text-blackk/70"/>
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Clear, Constrcited scope with requirements that are unlikely to change throughout the project</h2>
                        </div>

                    </div>
                </div>
                <div className="lg:hidden flex flex-col items-center justify-center w-full h-full">
                    <div className="relative w-11/12 h-[30rem] items-center justify-center flex justify-self-start">
                        <div className="flex flex-col p-16  justify-center absolute inset-0 ">
                            <div className="z-20 pb-8  flex w-full"><img src={EvolvingScope} alt="" className="scale-[1.2]"/></div>
                            <h1 className="text-white z-20 font-bold text-4xl pb-4 px-2">Evolving Scope</h1>
                            <p className="z-20 text-white/90 text-lg px-2 text-left font-medium">
                            Adaptable approach, accommodating changing project needs and dynamics throughout the development lifecycle.

                            </p>
                        </div>
                        <img src={budget2} alt="" className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-slate-800/80"></div>
                    </div>
                    <div className="flex flex-col px-8 py-4">
                        <h1 className="w-full text-center text-blackk/50 font-semibold text-2xl pb-2">When to Choose</h1>
                        <h1 className="w-full text-center text-blackk font-semibold text-3xl pb-8">Evolving Scope Engagement</h1>

                        <div className="flex flex-row gap-2 py-2"> 
                            <FaArrowRight size={30} className="text-blackk/70"/>
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Flexible Scope allows projects to evolve freely, adapting to changes without rigid constraints.

                            </h2>
                        </div>
                        <div className="flex flex-row gap-2 py-2"> 
                            <FaArrowRight size={30} className="text-blackk/70"/>
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Dynamic Needs adapt to evolving business, market dynamics, and stakeholder feedback effectively.
                            </h2>
                        </div>
                        <div className="flex flex-row gap-2 py-2"> 
                            <FaArrowRight size={30} className="text-blackk/70"/>
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Continuous feedback fosters iterative improvements and aligns with evolving project objectives effectively.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="lg:grid lg:grid-cols-2 hidden items-center justify-center w-full h-full">
                    <div className="flex flex-col px-8 py-4">
                        <h1 className="w-full text-center text-blackk/50 font-semibold text-2xl pb-2">When to Choose</h1>
                        <h1 className="w-full text-center text-blackk font-semibold text-3xl pb-8">Evolving Scope Engagement</h1>

                        <div className="flex flex-row gap-2 py-2"> 
                            <FaArrowRight size={30} className="text-blackk/70"/>
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Flexible Scope allows projects to evolve freely, adapting to changes without rigid constraints.

                            </h2>
                        </div>
                        <div className="flex flex-row gap-2 py-2"> 
                            <FaArrowRight size={30} className="text-blackk/70"/>
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Dynamic Needs adapt to evolving business, market dynamics, and stakeholder feedback effectively.
                            </h2>
                        </div>
                        <div className="flex flex-row gap-2 py-2"> 
                            <FaArrowRight size={30} className="text-blackk/70"/>
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Continuous feedback fosters iterative improvements and aligns with evolving project objectives effectively.
                            </h2>
                        </div>
                    </div>
                    <div className="relative w-11/12 h-[30rem] items-center justify-center flex justify-self-start">
                        <div className="flex flex-col p-16  justify-center absolute inset-0 ">
                            <div className="z-20 pb-8 px-4 flex w-full"><img src={EvolvingScope} alt="" className="scale-[1.2]"/></div>
                            <h1 className="text-white z-20 font-bold text-4xl pb-4 px-2">Evolving Scope</h1>
                            <p className="z-20 text-white/90 text-lg px-2 text-left font-medium">
                            Adaptable approach, accommodating changing project needs and dynamics throughout the development lifecycle.

                            </p>
                        </div>
                        <img src={budget2} alt="" className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-slate-800/80"></div>
                    </div>
                    
                </div>
                <div className="lg:grid lg:grid-cols-2 flex flex-col items-center justify-center w-full h-full">
                    <div className="relative w-11/12 h-[30rem] items-center justify-center flex justify-self-start">
                        <div className="flex flex-col p-16 justify-center absolute inset-0">
                            <div className="z-20 pb-8 px-4  flex w-full"><img src={UnclearRequirements} alt="" className="scale-[1.2]"/></div>
                            <h1 className="text-white z-20 px-2 font-bold text-4xl pb-4">Unclear Requirements</h1>
                            <p className="z-20 text-white/90 text-lg px-2 text-left font-medium">
                            Ambiguous project requires a lack of specificity, posing challenges in defining clear development objectives.

                            </p>
                        </div>
                        <img src={budget3} alt="" className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-teal-700/80"></div>
                    </div>
                    <div className="flex flex-col px-8 py-4">
                        <h1 className="w-full text-center text-blackk/50 font-semibold text-2xl">When to Choose</h1>
                        <h1 className="w-full text-center text-blackk font-semibold text-3xl pb-8">Unclear Requirement Engagement</h1>
                        <div className="flex flex-row gap-2 py-2"> 
                            <FaArrowRight size={30} className="text-blackk/70"/>
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Initial project requirements are not well-defined, allowing flexibility for discovery and refinement as the project progresses.
                            </h2>
                        </div>
                        <div className="flex flex-row gap-2 py-2"> 
                            <FaArrowRight size={30} className="text-blackk/70"/>
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Particularly suited for exploratory or innovative projects where the outcomes are not fully known at the outset.
                            </h2>
                        </div>
                        <div className="flex flex-row gap-2 py-2"> 
                            <FaArrowRight size={30} className="text-blackk/70"/>
                            <h2 className="font-medium text-blackk/60 sm:text-xl text-lg">Enables continuous discovery and definition of requirements throughout the project lifecycle, adapting to evolving insights and stakeholder needs</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scopes;