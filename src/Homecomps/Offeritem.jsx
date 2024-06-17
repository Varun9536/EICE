import React, { useState } from "react";
import { useHref } from "react-router-dom";
import arrowblue from '../assets/arrowblue.svg';

function Offeritem({ id, svg, title, link, fliptext }) {
    const [showDetails, setShowDetails] = useState(false);
    const handleMouseEnter = () => {
        setShowDetails(true);
    };
    const handleMouseLeave = () => {
        setShowDetails(false);
    };

    const href = useHref(link);

    return (
    <div className="">
        <div
        // USE THIS - - - - 2xl:w-[400px] 2xl:h-80 2xl:m-0
        // NOT THIS - - - - xl:scale-100 2xl:w-112 2xl:h-80 lg:w-96 lg:h-96
            className="offer-item offer-item-border shadow-sm border-[1px] border-blackk/20 hover:shadow-bloo/50 hover:shadow-md shadow-black/20 bg-white rounded-md overflow-hidden transition duration-500 ease-in-out
                       2xl:w-[350px] 2xl:h-80 2xl:m-0 
                       w-screen h-64 ml-2 mr-2 
                       "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`front`}>
                <div className="justify-center items-center 
                                2xl:flex 2xl:h-3/4 2xl:flex-col 2xl:m-0 2xl:p-0
                                grid grid-cols-2 w-full h-full mt-1 mb-1 p-2
                                ">
                    <div className="flex justify-center items-center 
                                    2xl:h-3/4 2xl:p-0
                                    ">
                        <img
                            src={svg}
                            alt="svg"
                            className="2xl:w-auto cursor-pointer
                                        2xl:mt-0 2xl:h-48 2xl:scale-[0.40]
                                        scale-[1.5] -mt-4"
                        />
                    </div>
                    <div className="flex items-center justify-center font-manrope 
                                    2xl:mb-4 2xl:scale-90 2xl:p-0 2xl:-mt-0
                                    -mt-4 scale-[0.4]
                                    pr-8
                                    ">
                        <h3 className="text-blackk text-center px-4 2xl:font-bold 2xl:text-2xl 2xl:h-full text-[56px] font-bold">{title}</h3>
                    </div>
                </div>
            </div>
            <div 
                className={`back`}
                // className={`back ${showDetails ? "show" : "hide"}`}
            >
                <div className="justify-between 
                                2xl:flex 2xl:flex-col 2xl:h-3/4
                                grid grid-cols-2 items-center">
                    <div className="flex justify-center items-center 
                                2xl:h-3/4">
                        <p className="font-manrope text-blackk text-center 
                                        2xl:text-lg 2xl:px-4 2xl:p-0 2xl:m-0
                                        text-[10px] py-2 px-2 mt-10">
                            {fliptext}
                        </p>
                    </div>
                    <div className="flex justify-center items-center font-manrope 
                                    2xl:mb-4 2xl:scale-90
                                    scale-75 mt-12">
                        <a
                            href={href}
                            rel="noopener noreferrer"
                            className="flex flex-row items-center justify-center transition duration-200 border-[2px] border-bloo hover:shadow-md hover:shadow-bloo/30 text-bloo font-semibold rounded 
                                        2xl:text-xl 2xl:py-2 2xl:px-2
                                        px-1"
                        >
                            {'Learn More '} <span className="2xl:bg-cover 
                                                            2xl:scale-[0.9] 2xl:pl-1
                                                            scale[0.3] pt-1 pb-1">
                                                <img src={arrowblue} alt="" />
                                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Offeritem;
