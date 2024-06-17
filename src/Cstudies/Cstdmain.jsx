import React from "react";
import laptop from "../assets/Laptop.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Cstdmain()
{
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 532
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 532
    }
    return(
        <div className="font-manrope">
            <div className="flex-col text-white font-manrope flex text-center font-bold bg-cstdmain bg-blend-overlay bg-black/10 bg-cover 
                            2xl:text-6xl 2xl:p-44 2xl:mt-0
                            mt-16 p-12">
                CASE STUDIES
            </div>
            <div className="2xl:ml-[450px] 2xl:mr-[450px] 2xl:mt-24 2xl:mb-24">
                <div>
                <h1 className="bg-neutral-100 text-center font-semibold 
                               2xl:p-12 2xl:text-3xl 
                               p-6">
                    <span className="2xl:text-4xl">{`"`}</span>Explore <span className="text-bloo">Real-World Examples</span> of how EICE has transformed businesses accross industries through innovative software solutions and unparalelled expertise.<span className="2xl:text-4xl">{`"`}</span>
                </h1>
                </div>
            </div>
            <div className="2xl:p-0 p-4">
                <div className="2xl:ml-[450px] 2xl:mr-[450px] p-4 pb-16">
                    <h1 className="font-semibold 2xl:text-3xl">AUTOMOBILE INDUSTRY</h1>
                    <div className="shadow-sm shadow-blackk/10 pt-1"></div>
                    {/* <div className="grid grid-cols-3 gap-12 pt-2"> */}
                    <div className="flex flex-row">
                        <div className="flex items-center cursor-pointer opacity-50 hover:opacity-100" ><MdChevronLeft size={40} onClick={slideLeft} /></div>
                        <div id="slider" className="no-scrollbar flex flex-row gap-12 pt-2 w-full h-full overflow-visible whitespace-nowrap overflow-x-scroll scroll scroll-smooth">
                            <div className="cursor-pointer w-[500px] flex flex-col justify-center">
                                <img className="saturate-0 hover:saturate-100 transition duration-300
                                                2xl:scale-[.9] pb-1"
                                                src={laptop} alt="" 
                                />
                                <div className="font-bold 2xl:text-lg">Title</div>
                                <div className="text-gray-600 truncate font-semibold 2xl:text-lg text-[10px]">
                                    About the project, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore dolore.
                                </div>            
                            </div>
                            <div className="cursor-pointer w-[500px] flex flex-col justify-center">
                                <img className="saturate-0 hover:saturate-100 transition duration-300
                                                2xl:scale-[.9] pb-1"
                                                src={laptop} alt="" 
                                />
                                <div className="font-bold 2xl:text-lg">Title</div>
                                <div className="text-gray-600 truncate font-semibold 2xl:text-lg text-[10px]">
                                    About the project, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore dolore.
                                </div>            
                            </div>
                            <div className="cursor-pointer w-[500px] flex flex-col justify-center">
                                <img className="saturate-0 hover:saturate-100 transition duration-300
                                                2xl:scale-[.9] pb-1"
                                                src={laptop} alt="" 
                                />
                                <div className="font-bold 2xl:text-lg">Title</div>
                                <div className="text-gray-600 truncate font-semibold 2xl:text-lg text-[10px]">
                                    About the project, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore dolore.
                                </div>            
                            </div>
                            <div className="cursor-pointer w-[500px] flex flex-col justify-center">
                                <img className="saturate-0 hover:saturate-100 transition duration-300
                                                2xl:scale-[.9] pb-1"
                                                src={laptop} alt="" 
                                />
                                <div className="font-bold 2xl:text-lg">Title</div>
                                <div className="text-gray-600 truncate font-semibold 2xl:text-lg text-[10px]">
                                    About the project, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore dolore.
                                </div>            
                            </div>
                            <div className="cursor-pointer w-[500px] flex flex-col justify-center">
                                <img className="saturate-0 hover:saturate-100 transition duration-300
                                                2xl:scale-[.9] pb-1"
                                                src={laptop} alt="" 
                                />
                                <div className="font-bold 2xl:text-lg">Title</div>
                                <div className="text-gray-600 truncate font-semibold 2xl:text-lg text-[10px]">
                                    About the project, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore dolore.
                                </div>            
                            </div>
                            <div className="cursor-pointer w-[500px] flex flex-col justify-center">
                                <img className="saturate-0 hover:saturate-100 transition duration-300
                                                2xl:scale-[.9] pb-1"
                                                src={laptop} alt="" 
                                />
                                <div className="font-bold 2xl:text-lg">Title</div>
                                <div className="text-gray-600 truncate font-semibold 2xl:text-lg text-[10px]">
                                    About the project, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore dolore.
                                </div>            
                            </div>
                        </div>
                        <div className="flex items-center cursor-pointer opacity-50 hover:opacity-100" ><MdChevronRight onClick={slideRight} size={40} /></div>
                    </div>
                </div>
                <div className="2xl:ml-[450px] 2xl:mr-[450px] p-4">
                    <h1 className="font-semibold 2xl:text-xl">HEALTHCARE INDUSTRY</h1>
                    <div className="shadow-sm shadow-blackk/10 pt-1"></div>
                    <div className="grid grid-cols-3 gap-12 pt-2">
                        <div className="cursor-pointer">
                            <img className="saturate-0 hover:saturate-100 transition duration-300 
                                            2xl:scale-[0.9] pb-1"
                                            src={laptop} alt="" 
                            />
                            <div className="font-bold 2xl:text-lg">Title</div>
                            <div className="text-gray-600 font-semibold 2xl:text-lg text-[10px]">About the project, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore dolore.</div>
                        </div>
                        <div className="cursor-pointer">
                            <img className="saturate-0 hover:saturate-100 transition duration-300 
                                            2xl:scale-[0.9] pb-1"
                                            src={laptop} alt="" 
                            />
                            <div className="font-bold 2xl:text-lg">Title</div>
                            <div className="text-gray-600 font-semibold 2xl:text-lg text-[10px]">About the project, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore dolore.</div>
                        </div>
                        <div className="cursor-pointer">
                            <img className="saturate-0 hover:saturate-100 transition duration-300 
                                            2xl:scale-[0.9] pb-1"
                                            src={laptop} alt="" 
                            />
                            <div className="font-bold 2xl:text-lg">Title</div>
                            <div className="text-gray-600 font-semibold 2xl:text-lg text-[10px]">About the project, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore dolore.</div>
                        </div>
                    </div>
                </div>
                <div className="2xl:ml-[450px] 2xl:mr-[450px] p-4">
                    <h1 className="font-semibold 2xl:text-xl">OIL AND GAS INDUSTRY</h1>
                    <div className="shadow-sm shadow-blackk/10 pt-1"></div>
                    <div className="grid grid-cols-3 gap-12 pt-2">
                        <div className="cursor-pointer">
                            <img className="saturate-0 hover:saturate-100 transition duration-300 
                                            2xl:scale-[0.9] pb-1"
                                            src={laptop} alt="" 
                            />
                            <div className="font-bold 2xl:text-lg">Title</div>
                            <div className="text-gray-600 font-semibold 2xl:text-lg text-[10px]">About the project, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore dolore.</div>
                        </div>
                        <div className="cursor-pointer">
                            <img className="saturate-0 hover:saturate-100 transition duration-300 
                                            2xl:scale-[0.9] pb-1"
                                            src={laptop} alt="" 
                            />
                            <div className="font-bold 2xl:text-lg">Title</div>
                            <div className="text-gray-600 font-semibold 2xl:text-lg text-[10px]">About the project, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore dolore.</div>
                        </div>
                        <div className="cursor-pointer">
                            <img className="saturate-0 hover:saturate-100 transition duration-300 
                                            2xl:scale-[0.9] pb-1"
                                            src={laptop} alt="" 
                            />
                            <div className="font-bold 2xl:text-lg">Title</div>
                            <div className="text-gray-600 font-semibold 2xl:text-lg text-[10px]">About the project, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore dolore.</div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="shadow-sm shadow-blackk/10 pt-1 mt-16"></div>
        </div>
    )
}

export default Cstdmain;