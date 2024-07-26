import React from "react";
import Footer from './Footer';
import Copyright from "./Copyright";

function OurTeam(){
    return(
        <div className="-mt-6">
           <div className="w-full 2xl:pt-12 pt-32 pb-12 bg-blackk/95">
            <h1 className="text-white font-bold text-center text-3xl lg:text-5xl py-16">
                Our Team
            </h1>
        </div>
           <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl py-2">
                    <h1>OUR LEADERS</h1>
                    <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-5xl py-1">
                        The driving force behind our innovation and success
                    </h2>
                    <p className="text-justify text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-4 text-2xl sm:leading-tight leading-snug">
                        EICE's leadership team is a dynamic blend of creativity, vision, and strategic thinking. They inspire a culture of
                        innovation and passion, driving our entire organization towards shared success. With a commitment to excellence
                        and a collaborative spirit, our leaders foster a vibrant environment that empowers every member of the EICE
                        family. Proudly operating from offices in India, the USA, and Canada, our team of experts is dedicated to delivering
                        exceptional solutions and exceeding client expectations.
                    </p>
                </div>
                <div className="py-4 grid grid-cols-3">
                    <div className="flex flex-col"></div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4">
                <div>
                    
                </div>
                <div>

                </div>
            </div>
            <Footer />
            <Copyright /> 
        </div>
    )
}

export default OurTeam;