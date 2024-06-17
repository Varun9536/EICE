import React from "react";
import arrow from '../assets/arrow.svg';
// import Sols from '../Data/Sols';
// import Solutionitem from "./Solutionitem";

function Solutions()
{
    return (
        <div className="font-manrope
                        2xl:p-52 2xl:pl-4 2xl:pr-4 
                        pt-8 pb-[5rem]">
            
            <h1 className="text-blackk grid grid-cols-1 font-manrope items-center justify-center text-center font-extrabold
                            2xl:text-4xl 2xl:-mt-32 2xl:pb-12 
                            text-[28px] pb-8
                            ">
                <h1 className="font-bold text-bloo
                                2xl:text-2xl 2xl:pb-4 
                                text-xl pl-2 pr-2 pt-6">
                    Industries We Serve
                </h1>
                <h1 className="pt-4">    
                    IT & Software Development Solutions for Industries
                </h1>
            </h1 >
            <div className="flex flex-row text-center items-center justify-center">
            <div className="grid 2xl:grid-cols-4 2xl:gap-4 
                            grid-cols-1 gap-5">
                {/* {
                    Sols.map(solution => (
                        <Solutionitem
                            key={solution.id}
                            title={solution.title}
                            subtext={solution.subtext}
                            link={solution.link}
                        />
                    ))
                } */}
                <div className="2xl:w-full 2xl:inline-block 2xl:justify-normal w-screen flex justify-center">
                    {/* rem for div height-width is 3:2,(36x24) adding a bit more size to height for the text */}
                    <div className="relative bg-cover bg-healthcare  rounded-lg cursor-pointer transition duration-200 hover:shadow-lg hover:shadow-blackk
                                    2xl:h-[36rem] 2xl:w-[20rem] 
                                    h-[25rem] w-11/12">
                    {/* <img src={defaultImage} alt=":/" className="" /> */}
                    {/* <div className={`bgimage`}></div> */}
                    <div className="absolute rounded-lg bottom-0  p-4 bg-gradient-to-t from-stone-900/90 from-40% via-stone-800/95 via-50% to-transparent
                                    2xl:w-full 2xl:h-[150px]
                                    w-full h-[150px]">
                        <h3 className="flex text-left text-stone-100 font-manrope font-extrabold
                                        2xl:p-1 2xl:text-3xl
                                        text-3xl pt-4">
                            HEALTHCARE
                        </h3>
                        <p className="flex text-left p-1 text-white font-semibold 
                                    2xl:text-base text-[16px] ">
                            Innovative solutions to improve patient care and streamline healthcare operations
                        </p>
                    </div>
                    </div>
                </div>
                <div className="2xl:w-full 2xl:inline-block 2xl:justify-normal w-screen flex justify-center">
                    {/* rem for div height-width is 3:2,(36x24) adding a bit more size to height for the text */}
                    <div className="relative bg-cover bg-finance  rounded-lg cursor-pointer transition duration-200 hover:shadow-lg hover:shadow-blackk
                                    2xl:h-[36rem] 2xl:w-[20rem] 
                                    h-[25rem] w-11/12">
                    {/* <img src={defaultImage} alt=":/" className="" /> */}
                    {/* <div className={`bgimage`}></div> */}
                    <div className="absolute rounded-lg bottom-0  p-4 bg-gradient-to-t from-stone-900/90 from-40% via-stone-800/95 via-50% to-transparent
                                    2xl:w-full 2xl:h-[150px]
                                    w-full h-[150px]">
                        <h3 className="flex text-left text-stone-100 font-manrope font-extrabold
                                        2xl:p-1 2xl:text-3xl
                                        text-3xl pt-4">
                            FINANCIAL
                        </h3>
                        <p className="flex text-left p-1 text-white font-semibold 
                                    2xl:text-base text-[16px] ">
                            Secure software to streamline solutions and enhance customer experience
                        </p>
                    </div>
                    </div>
                </div>
                <div className="2xl:w-full 2xl:inline-block 2xl:justify-normal w-screen flex justify-center">
                    {/* rem for div height-width is 3:2,(36x24) adding a bit more size to height for the text */}
                    <div className="relative bg-cover bg-education rounded-lg cursor-pointer transition duration-200 hover:shadow-lg hover:shadow-blackk
                                    2xl:h-[36rem] 2xl:w-[20rem] 
                                    h-[25rem] w-11/12" >
                        {/* <img src={defaultImage} alt=":/" className="" /> */}
                        {/* <div className={`bgimage`}></div> */}
                        <div className="absolute rounded-lg bottom-0  p-4 bg-gradient-to-t from-stone-900/90 from-40% via-stone-800/95 via-50% to-transparent
                                    2xl:w-full 2xl:h-[150px]
                                    w-full h-[150px]">
                            <h3 className="flex text-left text-stone-100 font-manrope font-extrabold
                                        2xl:p-1 2xl:text-3xl
                                        text-3xl pt-4">
                                DIGITAL MEDIA
                            </h3>
                            <p className="flex text-left p-1 text-white font-semibold
                                        2xl:text-base text-[16px]">
                                Advanced solutions for content creation, distribution and monetization
                            </p>
                        </div>
                    </div>
                </div>
                <div className="2xl:w-full 2xl:inline-block 2xl:justify-normal w-screen flex justify-center">
                    {/* rem for div height-width is 3:2,(36x24) adding a bit more size to height for the text */}
                    <div className="absolute bg-cover bg-digimedia  rounded-lg cursor-pointer transition duration-200 hover:shadow-lg hover:shadow-blackk
                                    2xl:h-[36rem] 2xl:w-[20rem] 
                                    h-[25rem] w-11/12" >
                        {/* <img src={defaultImage} alt=":/" className="" /> */}
                        {/* <div className={`bgimage`}></div> */}
                        <div className="absolute rounded-lg bottom-0  p-4 bg-gradient-to-t from-stone-900/90 from-40% via-stone-800/95 via-50% to-transparent
                                    2xl:w-full 2xl:h-[150px]
                                    w-full h-[150px]">
                            <h3 className="flex text-left text-stone-100 font-manrope font-extrabold
                                        2xl:p-1 2xl:text-3xl
                                        text-3xl pt-4">
                                EDUCATION
                            </h3>
                            <p className="flex text-left p-1 text-white font-semibold
                                            2xl:text-base text-[16px]">
                                Digital tools that enhance learning and administrative effificency
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="flex items-center justify-center 
                            2xl:scale-[1.20] 2xl:-mb-32 2xl:mt-16
                            -mb-16 mt-[28rem] ml-4">
                <a href="Allindus" className="items-center justify-center">
                    <button className="flex flex-row items-center justify-center transition duration-200 border-bloo border-[2px] hover:bg-bloo/90 bg-bloo text-white  hover:shadow-md hover:shadow-bloo/30 font-semibold py-2 px-2 rounded
                                        2xl:w-[234px] 2xl:h-[56px] 2xl:text-xl 2xl:p-0 2xl:scale-100
                                        scale-75 -ml-4 h-[64px] w-[240px] text-2xl">
                        {'See All '} <span className="bg-cover scale-[0.9] pl-1"><img src={arrow} alt="" /></span>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Solutions; 