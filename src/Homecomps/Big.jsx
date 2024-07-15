import React, { useRef, useState, useEffect } from "react";
import genai from "../assets/Compressed/genai.png";
import devops from "../assets/Compressed/devops.png";
import digitrans from '../assets/Compressed/digitrans.png';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import hexagon from '../assets/hexagon.svg';
import {Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';


function Big() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1; // Slow down the video playback to half speed
        }
    }, []);

    const slides = [
        {
            content: (
                <div className="container mx-auto my-auto px-1 pt-0 sm:pt-0 sm:max-w-[1300px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col space-y-6">
                    <h1 className="text-blackk text-5xl sm:text-5xl 2xl:text-6xl font-base leading-tight">
                      Transforming your Business through
                      <span className="text-bloo font-bold block mt-2">Generative AI</span>
                    </h1>
                    <p className="text-blackk/80 text-xl sm:text-xl">
                    As a specialized artificial intelligence development company, we focus on creating cutting-edge Generative AI software solutions. 
                    Our expert team of AI developers excels in deploying generative models such as GPT-3, GANs, and variational autoencoders.
                    </p>
                    <div className="pt-4 flex flex-row lg:flex-nowrap flex-wrap gap-4">
                      <Link to="/contact">
                        <button className="text-nowrap py-6 px-24 font-semibold rounded transition duration-200 border-2 border-blue-900  hover:bg-blue-900/95 bg-blue-900 text-white hover:shadow-md hover:shadow-blue-900/30 text-lg 2xl:text-xl">
                          Let's Connect
                        </button>
                      </Link>
                      <Link to="/services-aiml">
                        <button className="text-nowrap py-6 px-24 font-semibold rounded transition duration-200  border-2 border-blue-900 text-blue-900 hover:shadow-md hover:shadow-blue-900/30 text-lg 2xl:text-xl">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center 2xl:justify-end 2xl:scale-[1.15] 2xl:pl-2 scale-100">
                    <div className="w-[30rem] h-[30rem] rounded-lg  overflow-hidden">
                      <img className="w-full h-full rounded-lg " src={genai} alt="Generative AI" />
                    </div>
                  </div>
                </div>
              </div>
            ),
        },   
        {
            content: (
                <div className="container mx-auto my-auto pt-0 px-1 sm:pt-0 sm:max-w-[1300px]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col space-y-6">
                      <h1 className="text-blackk text-5xl sm:text-5xl 2xl:text-6xl font-base leading-tight">
                        Improving your Efficiency with
                        <span className="text-bloo font-bold block mt-2">DevOps</span>
                      </h1>
                      <p className="text-blackk/80 text-xl sm:text-xl">
                      Being a top DevOps development firm, we specialize in optimizing your business's infrastructure and development operations. Maximize your business potential with our customized DevOps solutions. 
                      Whether you're a visionary business owner striving to lead, our array of DevOps development services enables you to thrive and innovate in the digital age.
                      </p>
                      <div className="pt-4 flex flex-row lg:flex-nowrap flex-wrap gap-4">
                        <Link to="/contact">
                          <button className="text-nowrap py-6 px-24 font-semibold rounded transition duration-200 border-2 border-blue-900 hover:bg-blue-900/95 bg-blue-900 text-white hover:shadow-md hover:shadow-blue-900/30 text-lg 2xl:text-xl">
                            Let's Connect
                          </button>
                        </Link>
                        <Link to="/services-devops">
                          <button className="text-nowrap py-6 px-24 font-semibold rounded transition duration-200  border-2 border-blue-900 text-blue-900 hover:shadow-md hover:shadow-blue-900/30 text-lg 2xl:text-xl">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className=" flex justify-center 2xl:justify-end 2xl:scale-[1] scale-100">
                      <div className="w-[30rem] h-[30rem] rounded-lg  overflow-hidden">
                        <img className="w-full h-full scale-90 rounded-lg" src={devops} alt="DevOps" />
                      </div>
                    </div>
                  </div>
                </div>

            ),
        },
        {
            content: (
             
                <div className="container mx-auto my-auto pt-0 px-1 sm:p-0 sm:max-w-[1300px]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col space-y-6">
                      <h1 className="text-blackk text-5xl sm:text-5xl 2xl:text-6xl font-base leading-tight">
                        Driving business Growth with
                        <span className="text-bloo font-bold block mt-2 2xl:text-nowrap text-wrap">Digital Transformation</span>
                      </h1>
                      <p className="text-blackk/80 text-xl sm:text-xl">
                      As the digital landscape gains significance, businesses are adopting digital strategies and consulting to meet evolving consumer preferences. Offers tailored digital transformation services, 
                      leveraging expertise to foster innovation and enhance operational efficiency, capabilities, processes, and customer experiences. 
                      </p>
                      <div className="pt-4 flex flex-row lg:flex-nowrap flex-wrap gap-4">
                        <Link to="/services-aiml">
                          <button className="text-nowrap py-6 px-24 font-semibold rounded transition duration-200 border-2 border-blue-900  hover:bg-blue-900/95 bg-blue-900 text-white hover:shadow-md hover:shadow-blue-900/30 text-lg 2xl:text-xl">
                            Let's Connect
                          </button>
                        </Link>
                        <Link to="/services-digitaltransformation">
                          <button className="text-nowrap py-6 px-24 font-semibold rounded transition duration-200  border-2 border-blue-900 text-blue-900 hover:shadow-md hover:shadow-blue-900/30 text-lg 2xl:text-xl">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="flex justify-center 2xl:justify-end 2xl:scale-[1.15] overflow-visible scale-100">
                      <div className="w-[30rem] h-[30rem] rounded-lg overflow-visible">
                        <img className="w-full h-full pb-12 rounded-lg overflow-visible scale-110" src={digitrans} alt="Digital Transformation" />
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
        <div>
          <div className="relative overflow-hidden font-manrope flex text-blackk 2xl:pb-40 2xl:pt-20 2xl:max-h-[1200px] h-full xl:px-16 xl:pt-32 xl:pb-32 items-center justify-center pb-24 pt-32 pl-4 pr-4">
            <div className="">
                {/* <div className="absolute inset-0 z-10 backdrop-filter backdrop-blur-[30px] bg-white/50"></div>     */}
            </div>
            <div className='z-20 2xl:flex 2xl:flex-row 2xl:max-h-[1000px] h-full  w-screen relative group 2xl:items-center 2xl:text-balance text-left'>
                <div className="bg-blend-overlay bg-cover bg-bannerbg w-full h-full absolute inset-0 lg:scale-110 lg:rotate-0 rotate-90"></div>
                <div className="absolute lg:block hidden left-0 top-1/2 transform -translate-y-1/2 z-30 ">
                    <div onClick={prevSlide} className='rounded-full text-blackk/50 cursor-pointer'>
                        <BsChevronLeft size={30} />
                    </div>
                </div>
                <div className="w-full sm:px-16 px-4 2xl:h-[500px] h-full flex items-center justify-center"> {/* Added padding here */}
                    <TransitionGroup className='scale-100 rounded-2xl bg-center bg-cover transition duration-500 2xl:h-full flex items-center'>
                        <CSSTransition
                            key={currentIndex}
                            timeout={500}
                            classNames="fade"
                            exit={false}
                        >
                            {slides[currentIndex].content}
                        </CSSTransition>
                    </TransitionGroup>
                    
                </div>
                <div className="absolute lg:block hidden right-0 top-1/2 transform -translate-y-1/2 z-30 ">
                    <div onClick={nextSlide} className='rounded-full text-blackk/50 cursor-pointer '>
                        <BsChevronRight size={30} />
                    </div>
                </div>
                <div className="cursor-pointer absolute -bottom-[20%] left-1/2 transform -translate-x-1/2 flex space-x-6 z-30">
                  {slides.map((slide, slideIndex) => (
                      <div  
                          size={40}
                          key={slideIndex}
                          className={ `${currentIndex === slideIndex ? 'px-3 py-1 rounded-xl bg-blue-900' : 'px-3 py-1 rounded-xl bg-blue-900/30'}`}
                          onClick={() => goToSlide(slideIndex)} 
                      />
                  ))}
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