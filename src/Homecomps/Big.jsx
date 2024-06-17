import React, {useRef, useEffect} from "react";
import hexagon from "../assets/HEXAGON.png";
import abstract from "../assets/abstract.mp4";
import bannerbig from "../assets/bannerbig.png";
import arrow from '../assets/arrow.svg';

function Big() {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8; // Slow down the video playback to half speed
        }
    }, []);

    return (
        <div className="relative overflow-hidden font-manrope flex text-blackk
                        2xl:pr-64 2xl:pl-64 2xl:pt-56 2xl:pb-56
                        xl:pr-64 xl:pl-64 xl:pt-32 xl:pb-32
                        
                        pb-24 pt-44
                        pl-4 pr-4
                        ">
            <div className="absolute inset-0">  
                <video ref={videoRef} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                    <source src={abstract} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* <div className="absolute inset-0 z-20 overflow-hidden w-1/2 h-auto -ml-12 -mb-12 2xl:w-1/2 2xl:h-auto 2xl:-ml-60 2xl:-mb-48 absolute bottom-0 left-0">
                <img 
                    className="w-1/2 h-auto object-top-right animate-spin-slow" 
                    src={hexagon} 
                    alt="" 
                />
            </div>  
            <div className="absolute inset-0 z-20 overflow-hidden w-1/2 h-auto -mr-20 -mt-14 2xl:w-1/2 2xl:h-auto 2xl:-mr-[32rem] 2xl:-mt-64 absolute top-0 right-0">
                <img
                    className="w-1/2 h-auto object-left-bottom animate-spin-slow"
                    src={hexagon}
                    alt=""
                />
            </div> */}
            <div className="absolute inset-0 bg-white opacity-[0.93] z-10"></div>
            <div className="z-10 overflow-hidden h-auto absolute bottom-0 left-0 
                            2xl:scale-100 2xl:w-1/2 2xl:h-auto 2xl:-ml-60 2xl:-mb-48 2xl:1/2 2xl:block 
                            xl:scale-100 xl:w-1/2 xl:h-auto xl:-ml-60 xl:-mb-48 2xl:1/2 xl:block 
                            sm:-ml-24 sm:-mb-20
                            -mb-48 -ml-48 scale-75 hidden">
                <img 
                    className="w-1/2 h-auto object-top-right animate-spin-slow" 
                    src={hexagon} 
                    alt="" 
                />
            </div>  
            <div className="z-10 overflow-hidden h-auto absolute top-0 right-0
                            2xl:scale-100 2xl:w-1/2 2xl:h-auto 2xl:-mr-[32rem] 2xl:-mt-64 2xl:block
                            xl:scale-100 xl:w-1/2 xl:h-auto xl:-mr-[32rem] xl:-mt-64 xl:block

                            sm:-mr-80 sm:-mt-24
                            -mr-[34rem] -mt-[9.5rem] scale-[.6] hidden">
                <img
                    className="w-1/2 h-auto object-left-bottom animate-spin-slow"
                    src={hexagon}
                    alt=""
                />
            </div>
            <div className="flex flex-row items-center justify-center z-20 
                            2xl:scale-[1.15] 2xl:pb-28 2xl:pt-0 2xl:ml-[40px] 2xl:mr-[40px] 2xl:text-center  
                            sm:scale-[1] sm:ml-0 sm:mr-0 sm:pt-24 sm:pb-24
                            ">
                <div className="relative flex flex-col z-20 2xl:w-3/4 2xl:h-3/4">
                    <div className="w-full">
                        <h1 className=" font-bold 
                                        2xl:text-[72px] 2xl:leading-[4.5rem] 2xl:mb-2 
                                        sm:text-7xl
                                        text-6xl
                                        leading-[4.2rem]            
                                        ">
                            Driving technology Solutions,
                        </h1>
                        <h1 className="font-bold 
                                        2xl:text-[72px] 2xl:-mt-6 2xl:pt-1 2xl:leading-[4.5rem]
                                        sm:text-7xl
                                        text-6xl
                                        leading-[4.2rem]
                                        ">
                            your partner for <span className="text-bloo">Success</span>
                        </h1>
                        <p className="font-base 
                                    2xl:text-2xl 2xl:pt-8 2xl:px-3
                                    pt-4 text-xl">
                            Empowering industry leaders, forward-thinking enterprises and global law firms with cutting-edge technology solutions. We shape the future of IT.
                        </p>     
                    </div>
                    <div className="flex items-center 
                                    2xl:scale-[1.4] 2xl:pt-16 2xl:justify-center  
                                    pt-8">
                        <a href="About">
                            {/* <button className="transition duration-200 h-[56px] w-56 border-[3px] border-bloo hover:border-bloo hover:border-[3px] hover:bg-bloo hover:text-white text-bloo text-xl font-extrabold py-2 px-4 rounded"> */}
                            <button className="flex flex-row font-semibold items-center py-2 px-4 rounded justify-center bg-blend-overlay transition duration-200 hover:bg-bloo/90 hover:shadow-md hover:shadow-bloo/30 bg-bloo text-white
                                                2xl:h-[56px] 2xl:w-56 2xl:text-xl 
                                                scale-90 -ml-4 h-[72px] w-[256px] text-2xl"> 
                                {'LEARN MORE '} <span className="bg-cover scale-[0.9] pl-1"><img src={arrow} alt="" /></span>
                            </button>
                        </a>
                    </div>     
                </div>
                {/* <div className="z-20"><img src={bannerbig} alt="" /></div> */}
            </div>
        </div>
    )
}

export default Big;
