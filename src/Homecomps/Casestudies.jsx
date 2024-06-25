import React from "react";
import laptop from "../assets/Compressed/Laptop.png";
import arrow from '../assets/arrow.svg';

function Casestudies()
{
    return (
        <div className="font-manrope flex bg-casestudy bg-blend-overlay bg-neutral-100/40 bg-cover flex-col
                        2xl:p-12 
                        p-2 pb-16 pt-16
                        ">
            <div className="2xl:scale-[0.9] 2xl:grid 2xl:grid-cols-2 2xl:pl-[280px] 2xl:text-start 
                            flex flex-col-reverse text-center
                            ">
                <div className="grid grid-cols-1">
                    <h1 className="text-bloo 2xl:font-bold 
                                    2xl:text-2xl 2xl:pt-16 
                                    text-3xl font-semibold pt-8">
                        Case Studies
                    </h1>
                    <h1 className="font-bold 
                                    2xl:text-[50px] 2xl:leading-[3.5rem] 2xl:pb-20 2xl:pt-4 2xl:pr-20
                                    text-[20px] pt-2">
                        Discover our innovative solutions accross industries through detailed case studies
                    </h1>
                    <div className="2xl:flex 
                                    2xl:justify-self-start 2xl:pb-20 2xl:-mt-8 2xl:pt-4 2xl:pl-[26px]
                                    justify-self-center mt-6
                                    ">
                        <a href="/resources/casestudies">
                            <button className="flex flex-row justify-center items-center py-2 px-2 font-semibold rounded transition duration-200 border-[2px] border-bloo hover:bg-bloo/90 bg-bloo text-white hover:shadow-md hover:shadow-bloo/30 
                                                2xl:h-[56px] 2xl:w-[234px] 2xl:text-xl 2xl:scale-125 2xl:-ml-0
                                                scale-75 -ml-4 h-[64px] w-[240px] text-2xl">
                                {'Explore '} <span className="bg-cover scale-[0.9] pl-1"><img src={arrow} alt="" /></span>
                            </button>
                        </a>
                    </div>   
                </div>
                <div className="flex items-center
                                2xl:scale-[0.90] 2xl:pr-[160px]
                                scale-[1]
                                ">
                    <img src={laptop} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Casestudies;