import React from "react";
function Clientele()
{
     return (
        <div className="bg-map 2xl:bg-cover bg-blend-overlay 2xl:bg-white/50 bg-white/75 shadow-sm shadow-blackk/20 justify-center font-manrope text-blackk
                        2xl:p-44
                        pt-10 pb-16">
            <div className="flex flex-col">
                <h1 className="text-bloo text-center 2xl:bg-transparent bg-white/50
                                2xl:text-3xl 2xl:p-2 2xl:font-extrabold 
                                text-xl font-bold pt-16">
                                    Journey so far
                </h1>
                <h1 className="2xl:font-bold text-center 2xl:bg-transparent bg-white/50
                                2xl:text-5xl 2xl:p-2
                                font-extrabold text-[28px] pt-4">
                                    Milestones and achievements
                </h1>
                

                <div className="flex flex-col items-center justify-center text-center gap-4
                                2xl:pt-8
                                pt-4 pl-20 pr-20">
                    <div className="2xl:grid 2xl:grid-cols-3 
                                    2xl:gap-32 
                                    gap-12">
                        <div className="grid grid-cols-1 text-right 
                                            2xl:p-0 pt-6
                                            ">
                                <div className="flex flex-col text-start font-semibold 2xl:text-2xl text-sm">
                                    <span className="text-bloo font-bold 
                                                    2xl:text-8xl 2xl:text-start text-center
                                                    text-7xl">
                                        10+
                                    </span>
                                    <span className="2xl:pl-2 2xl:text-start text-xl font-light text-center">Years <span className="2xl:hidden">Of Experience</span></span>
                                
                                {/* <div className="text-3xl font-extrabold relative right-3">Years</div> */}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 font-semibold 2xl:text-2xl text-xm
                                            2xl:p-0 pt-12
                                            ">
                                <div className="flex flex-col text-start"><span className="text-bloo font-bold
                                                                                2xl:text-8xl 2xl:text-start text-center
                                                                                text-7xl">
                                    150+
                                    </span>
                                    <span className="2xl:pl-2 2xl:text-start text-xl font-light text-center">Projects <span className="2xl:hidden">Delivered Successfully</span></span>
                                </div>
                                {/* <div className="text-bloo text-8xl font-bold">150+</div>
                                <div className="text-3xl font-extrabold">Projects</div> */}
                            </div>
                            <div className="grid grid-cols-1 font-semibold 2xl:text-2xl text-sm
                                            2xl:p-0 pt-12
                                            ">
                                <div className="flex flex-col text-start"><span className="text-bloo font-bold 
                                                                                2xl:text-8xl 2xl:text-start text-center
                                                                                text-7xl">
                                        60+
                                    </span>
                                    <span className="2xl:pl-2 2xl:text-start text-xl font-light text-center"><span className="2xl:hidden">Global</span> Clients</span>
                                </div>
                                {/* <div className="text-bloo text-8xl font-bold">60+</div>
                                <div className="text-3xl font-extrabold pl-2">Clients</div> */}
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Clientele;
