import React from "react";

function Company()
{
    return (
        <div className="font-manrope mx-auto sm:px-4 px-4 sm:max-w-7xl w-screen 2xl:pt-12 sm:pt-28 pt-36">
            {/* <div className="w-full h-full bg-bloo/5 -rotate-45 absolute left-[75%] blur-[400px]"></div> */}
            
            <div className="text-center pb-12">
                <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">Our Foundation</h1>
                <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">Expertise, Integrity & Collaboration</h2>
            </div>
            <div className="flex sm:flex-row flex-col px-1 sm:gap-24 gap-12 items-center justify-center text-center text-blackk">
                <div className="">
                    <h1 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">Who We Are</h1>
                    <p className="font-medium text-blackk/60 sm:text-xl text-lg text-justify">
                        EICE is a global software services organization dedicated to delivering high-quality solutions to Fortune 1000 companies. We leverage specialized domain knowledge, cutting-edge technologies, and flexible engagement models to meet our clients' IT needs. With over 10 years of experience, we operate from our headquarters in Houston, Texas, and our office in Noida, India, servicing customers in Financial Services and Enterprise Services.
                    </p>
                </div>
                <div>
                    <h1 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">Our Strength</h1>
                    <p className="font-medium text-blackk/60 sm:text-xl text-lg text-justify">
                        Our strength lies in our deep domain knowledge of the oil and gas industry and our ability to provide innovative solutions to complex technology challenges. We collaborate with leading global operators and service companies across the energy value chain. By combining engineering analysis, applied science, and numerical algorithm expertise, we deliver reliable and responsive solutions that meet our clients' technical and business objectives.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Company;