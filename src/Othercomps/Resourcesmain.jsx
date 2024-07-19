import React from "react";
import Casestudies from "../Homecomps/Casestudies";

function Resourcesmain()
{
    return(
        <div>
            <div className="">
                <div className=" max-w-7xl mx-auto ">
                    <div className="pb-12 2xl:pt-6 pt-32">
                        <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">Our Resources</h1>
                        <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">Case Studies, Blogs and more</h2>
                    </div>
                </div>
                
            </div>
            
            <Casestudies />
        </div>
    )
}

export default Resourcesmain;