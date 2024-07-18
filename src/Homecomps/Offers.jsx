import React from "react";
import Offeritem from "./Offeritem";
import Ouroffers from '../Data/Ouroffers'

function Offers() {
    return (
        // 
        <div className="pb-10">
            <div className="text-manrope px-4 py-2  sm:py-2 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y- justify-items-center">
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