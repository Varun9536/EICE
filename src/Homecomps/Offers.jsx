import React from "react";
import Offeritem from "./Offeritem";
import Ouroffers from '../Data/Ouroffers'

function Offers() {
    return (
        <div className="text-manrope px-4 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 2xl:py-44 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 md:mb-20">
                <p className="text-bloo font-bold text-xl sm:text-2xl lg:text-3xl mb-4 py-1">
                    What We Offer
                </p>
                <h2 className="text-blackk font-extrabold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[36px] max-w-4xl py-1">
                    Unlocking Innovation: <br className="sm:hidden"/>Explore Our Suite of Solutions for Your Digital Evolution
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {Ouroffers.map(project => (
                    <Offeritem
                        key={project.id}
                        svg={`data:image/svg+xml;utf8,${encodeURIComponent(project.svg)}`} 
                        title={project.title}
                        link={project.link}
                        fliptext={project.fliptext}
                    />
                ))}
            </div>
        </div>
    )
}

export default Offers;