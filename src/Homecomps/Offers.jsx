import React from "react";
import Offeritem from "./Offeritem";
import Ouroffers from '../Data/Ouroffers'

function Offers()
{
    return (
        <div className="text-manrope 
                        2xl:pr-64 2xl:pl-64 2xl:pb-44 2xl:pt-44 2xl:-mb-0
                        pt-8 -mb-10
                        ">
            <div className="flex flex-col items-center justify-center
                            2xl:-mt-24">
                <div className="text-bloo font-manrope">
                    <p className="font-bold 
                                  2xl:text-2xl 2xl:p-0
                                  text-xl pl-2 pr-2 pt-8">
                        What We Offer
                    </p>
                </div>
                <div className="text-blackk font-manrope 
                                2xl:pt-4 2xl:pb-0
                                pb-4
                                ">
                    <p className="  2xl:font-extrabold text-center 
                                    2xl:w-[64rem] 2xl:text-[36px] 2xl:p-0
                                    p-3 text-[28px] font-extrabold">
                        Unlocking Innovation: <br className="2xl:hidden"/>Explore Our Suite of Solutions <br /> for Your Digital Evolution
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center
                            2xl:mt-32 2xl:scale-[1.12]
                            scale-[0.9] -mt-24 -ml-2">
                <div className="2xl:grid 2xl:gap-6
                                2xl:grid-cols-3 2xl:m-0
                                sm:grid-cols-2 
                                grid grid-cols-1 gap-4
                                ">
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