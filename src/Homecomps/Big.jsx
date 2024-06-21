import React, { useRef, useState, useEffect } from "react";
import hexagon from "../assets/HEXAGON.png";
import abstract from "../assets/abstract.mp4";
import genai from "../assets/genai.png";
import iot from "../assets/iot.png";
import devops from "../assets/devops.png";
import cloud from '../assets/cloud.png';
import uiux from '../assets/uiux.png';
import digitrans from '../assets/digitrans.png';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


function Big() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8; // Slow down the video playback to half speed
        }
    }, []);

    const slides = [
        {
            content: (
                <div className="flex flex-col">
                    <div className="2xl:grid 2xl:grid-cols-2 flex flex-col">
                        <div className="2xl:pl-32 2xl:pt-0 flex flex-col items-start justify-start">
                            <div>
                                <div className="font-bold 2xl:text-[64px] 2xl:h-[210px] 2xl:leading-[4.5rem] sm:text-7xl text-5xl">
                                    <h1 className="pb-2">Transforming your Business through</h1>
                                    <div className="">
                                        <div className="2xl:text-[80px] pb-6 pt-6 ">
                                            <span className="text-nowrap border-2 text-bloo border-blackk/60 shadow-md shadow-blackk/30 rounded-md px-4"> Generative AI </span>
                                        </div>
                                        <div className="2xl:pl-1 2xl:pt-2 2xl:text-[20px] text-blackk font-light leading-8">
                                            <p>{`Integrating our Generative AI tools into your businesses enhances efficiency and innovation by automating tasks and personalizing customer experience. 
                                                Our AI solutions generate analyze data for valuable insights, optimizing logistics, 
                                                and accelerating time-to-market.`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="p-0 w-[30rem] h-[30rem] border-2 border-bloo/10 shadow-xl shadow-bloo/90 flex justify-center items-center">
                                <div className="w-full h-full">
                                    <img className="w-[30rem] h-[30rem] object-cover" src={genai} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div className="flex flex-col">
                    <div className="2xl:grid 2xl:grid-cols-2 flex flex-col">
                        <div className="2xl:pl-32 2xl:pt-0 flex flex-col items-start justify-start">
                            <div>
                                <div className="font-bold 2xl:text-[64px] 2xl:h-[210px] 2xl:leading-[4.5rem] sm:text-7xl text-5xl">
                                    <h1 className="pb-2">Scaling Your Company With</h1>
                                    <div className="">
                                        <div className="2xl:text-[80px] pb-6 pt-6 ">
                                            <span className="border-2 text-nowrap text-bloo border-blackk/60 shadow-md shadow-blackk/30 rounded-md px-4"> Cloud Services </span>
                                        </div>
                                        <div className="2xl:pl-1 2xl:pt-2 2xl:text-[20px] text-blackk font-light leading-8">
                                            <p>{`With our Cloud solutions we help you increase your operational scalablility, reduce tech expenditure and accelerate your growth. 
                                            Enhance your business agility and ensure seamless integration with our innovative cloud services`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="p-0 w-[30rem] h-[30rem] border-2 border-bloo/10 shadow-xl shadow-bloo/90 flex justify-center items-center">
                                <div className="w-full h-full">
                                    <img className="w-[30rem] h-[30rem] object-cover" src={cloud} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                
                    <div className="flex flex-col">
                        <div className="2xl:grid 2xl:grid-cols-2 flex flex-col">
                            <div className="2xl:pl-32 2xl:pt-0 flex flex-col items-start justify-start">
                                <div>
                                    <div className="font-bold 2xl:text-[64px] 2xl:h-[210px] 2xl:leading-[4.5rem] sm:text-7xl text-5xl">
                                        <h1 className="pb-2">Improving your Efficiency with</h1>
                                        <div className="">
                                            <div className="2xl:text-[80px] pb-6 pt-6 ">
                                                <span className="border-2 text-bloo text-nowrap border-blackk/60 shadow-md shadow-blackk/30 rounded-md px-4"> DevOps </span>
                                            </div>
                                            <div className="2xl:pl-1 2xl:pt-2 2xl:text-[20px] text-blackk font-light leading-8">
                                                <p>{`Use our DevOps services to automate your manual deployment process. Achieve greater MMTR (Mean Time to Recovery), 
                                                discover true reliability and increase the frequency of your software releases with DevOps.`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="p-0 w-[30rem] h-[30rem] border-2 border-bloo/10 shadow-xl shadow-bloo/90 flex justify-center items-center">
                                    <div className="w-full h-full">
                                        <img className="w-[30rem] h-[30rem] object-cover" src={devops} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            ),
        },
        {
            content: (
                <div className="flex flex-col">
                        <div className="2xl:grid 2xl:grid-cols-2 flex flex-col">
                            <div className="2xl:pl-32 2xl:pt-0 flex flex-col items-start justify-start">
                                <div>
                                    <div className="font-bold 2xl:text-[64px] 2xl:h-[210px] 2xl:leading-[4.5rem] sm:text-7xl text-5xl">
                                        <h1 className="pb-2">Increasing your Revenue with</h1>
                                        <div className="">
                                            <div className="2xl:text-[80px] pb-6 pt-6 ">
                                                <span className="border-2 text-nowrap text-bloo border-blackk/60 shadow-md shadow-blackk/30 rounded-md px-4"> IOT </span>
                                            </div>
                                            <div className="2xl:pl-1 2xl:pt-2 2xl:text-[20px] text-blackk font-light leading-8">
                                                <p>{`Automate processes, develop new product lines, generate new revenue streams
                                                 reduce labor costs, and cut waste with IOT technology. Enhance your customer experience, Predictive maintenance and Manufacturing with our IOT technology.`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="p-0 w-[30rem] h-[30rem] border-2 border-bloo/10 shadow-xl shadow-bloo/90 flex justify-center items-center">
                                    <div className="w-full h-full">
                                        <img className="w-[30rem] h-[30rem] object-cover" src={iot} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ),
        },
        {
            content: (
                <div className="flex flex-col">
                    <div className="2xl:grid 2xl:grid-cols-2 flex flex-col">
                        <div className="2xl:pl-32 2xl:pt-0 flex flex-col items-start justify-start">
                            <div>
                                <div className="font-bold 2xl:text-[64px] 2xl:h-[210px] 2xl:leading-[4.5rem] sm:text-7xl text-5xl">
                                    <h1 className="pb-2">Driving Business Growth with</h1>
                                    <div className="">
                                        <div className="2xl:text-[80px] pb-6 pt-6 ">
                                            <div className="grid grid-cols-1 gap-4 p-4 border-2 text-bloo border-blackk/60 shadow-md shadow-blackk/30 rounded-md px-4"> 
                                            <div>
                                                Digital
                                            </div>
                                            <div>
                                                Transformation
                                            </div>
                                            </div>
                                        </div>
                                        <div className="2xl:pl-1 2xl:pt-2 2xl:text-[20px] text-blackk font-light leading-8">
                                            <p>{`Integrate digital technology into all areas of your business, fundamentally changing how you operate
                                            and deliver value to customers.`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="p-0 w-[30rem] h-[30rem] border-2 bg-bloo/5 border-bloo/10 shadow-xl shadow-bloo/90 flex justify-center items-center">
                                <div className="w-full h-full">
                                    <img className="w-[30rem] h-[30rem] object-cover" src={digitrans} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div className="flex flex-col">
                <div className="2xl:grid 2xl:grid-cols-2 flex flex-col">
                    <div className="2xl:pl-32 2xl:pt-0 flex flex-col items-start justify-start">
                        <div>
                            <div className="font-bold 2xl:text-[64px] 2xl:h-[210px] 2xl:leading-[4.5rem] sm:text-7xl text-5xl">
                                <h1 className="pb-2">Creating gorgeous Designs with</h1>
                                <div className="">
                                    <div className="2xl:text-[80px] pb-6 pt-6 ">
                                        <span className="border-2 text-bloo border-blackk/60 shadow-md shadow-blackk/30 rounded-md px-4"> UI / UX </span>
                                    </div>
                                    <div className="2xl:pl-1 2xl:pt-2 2xl:text-[20px] text-blackk font-light leading-8">
                                        <p>{`Employ our highly experienced UI/UX developers to get high end designs for your app
                                        made with your customers as our utmost priority.`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="p-0 w-[30rem] h-[30rem] border-2 border-bloo/10 shadow-xl shadow-bloo/90 flex justify-center items-center">
                            <div className="w-full h-full">
                                <img className="w-[30rem] h-[30rem] object-cover" src={uiux} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ),
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        let newIndex;
        if (isFirstSlide) {
            newIndex = slides.length - 1;
        } else {
            newIndex = currentIndex - 1;
        }
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        let newIndex;
        if (isLastSlide) {
            newIndex = 0;
        } else {
            newIndex = currentIndex + 1;
        }

        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex])

    return (
        <div className="relative overflow-hidden font-manrope flex text-blackk 2xl:pr-64 2xl:pl-64 2xl:py-40 max-h-[1000px] xl:pr-64 xl:pl-64 xl:pt-32 xl:pb-32 items-center justify-center pb-24 pt-44 pl-4 pr-4">
            <div className="absolute inset-0">
                <video ref={videoRef} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                    <source src={abstract} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="absolute inset-0 bg-white/90 z-10"></div>
            <div className="z-10 overflow-hidden h-auto absolute bottom-0 left-0 2xl:scale-100 2xl:w-1/2 2xl:h-auto 2xl:-ml-60 2xl:-mb-48 2xl:1/2 2xl:block xl:scale-100 xl:w-1/2 xl:h-auto xl:-ml-60 xl:-mb-48 2xl:1/2 xl:block sm:-ml-24 sm:-mb-20 -mb-48 -ml-48 scale-75 hidden">
                <img className="w-1/2 h-auto object-top-right animate-spin-slow" src={hexagon} alt="" />
            </div>
            <div className="z-10 overflow-hidden h-auto absolute top-0 right-0 2xl:scale-100 2xl:w-1/2 2xl:h-auto 2xl:-mr-[44rem] 2xl:-mt-64 2xl:block xl:scale-100 xl:w-1/2 xl:h-auto xl:-mr-[32rem] xl:-mt-64 xl:block sm:-mr-80 sm:-mt-24 -mr-[34rem] -mt-[9.5rem] scale-[.6] hidden">
                <img className="w-1/2 h-auto object-left-bottom animate-spin-slow" src={hexagon} alt="" />
            </div>

            <div className='z-20 flex flex-row max-h-[1000px] w-screen px-4 relative group items-center'>
                <div className="justify-self-start w-4 pr-32">
                        <div className='absolute text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
                            <BsChevronCompactLeft onClick={prevSlide} size={30} />
                        </div>
                </div>
                <TransitionGroup className='scale-110 w-[1600px] h-full rounded-2xl bg-center bg-cover transition duration-500'>
                    <CSSTransition
                        key={currentIndex}
                        timeout={500}
                        classNames="fade"
                        exit={false}
                    >
                        {slides[currentIndex].content}
                    </CSSTransition>
                </TransitionGroup>
                <div className="justify-self-end w-4">
                        <div className='absolute text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
                            <BsChevronCompactRight onClick={nextSlide} size={30} />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Big;

{/* 
    
    ALTERNATE MEANS OF ADDING BUTTONS, TO ADD, REMOVE THE CURRENT BUTTONS AND PUT THIS BELOW THE 
    SLIDE DIV IN ITS OWN DIV

    <div className="pt-8 grid grid-cols-3 items-center justify-center w-full ">
                    <div className="flex flex-row items-center justify-end">
                        <div className='absolute text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
                            <BsChevronCompactLeft onClick={prevSlide} size={30} />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className=' text-2xl cursor-pointer'
                            >
                                <RxDotFilled className={currentIndex === slideIndex ? 'text-blue-500' : ''} />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row items-center">
                        <div className='absolute text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
                            <BsChevronCompactRight onClick={nextSlide} size={30} />
                        </div>
                    </div>
                </div> */}