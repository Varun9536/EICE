import React from "react";
import Offeritem from "./Offeritem";
import Ouroffers from '../Data/Ouroffers'

function Offers() {
    return (
        // 
        <div className="">
            <div className="text-manrope  px-4 py-12 sm:py-12 md:py-16 lg:py-16 xl:py-20 2xl:py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
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
        </div>
    )
}

export default Offers;