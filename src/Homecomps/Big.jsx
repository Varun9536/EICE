import React, { useState, useEffect } from "react";
import genai from "../assets/Compressed/genai.png";
import devops from "../assets/Compressed/devops.png";
import digitrans from '../assets/Compressed/digitrans.png';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

function Big() {
    const slides = [
        {
            content: (
                <div className="container mx-auto px-4 sm:px-12 lg:px-0 xl:px-12 2xl:px-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-col space-y-4 ">
                            <h1 className="text-blackk text-3xl sm:text-4xl lg:text-5xl font-semibold lg:leading-[3.7rem]">
                                Unlock Creativity with <span className="text-bloo">Generative AI</span>

                                {/* Transforming your Business through */}

                                {/* <span className="text-bloo font-semibold block mt-2">Generative AI</span> */}
                            </h1>
                            <p className="font-medium text-blackk/60 sm:text-xl text-lg">
                                As a focused AI development company, we leverage models like GANs and GPT-3. Our expertise transforms data into innovative solutions, enhancing business capabilities and driving technological advancements.
                            </p>
                            <div className="flex flex-row sm:flex-row gap-4 ">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                                        Let's Connect
                                    </button>
                                </Link>
                                <Link to="/services-aiml">
                                    <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 text-blue-900 hover:bg-blue-100 text-sm sm:text-base">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex lg:order-last order-first xl:justify-end justify-center mt-8 lg:mt-0">
                            <img className="w-full max-w-md rounded-lg" src={genai} alt="Generative AI" />
                        </div>
                    </div>
                </div>
            ),
        },
        {
          content: (
              <div className="container mx-auto px-4 sm:px-12 lg:px-0 xl:px-12 2xl:px-28">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="flex flex-col space-y-4">
                          <h1 className="text-blackk text-3xl sm:text-4xl lg:text-5xl font-semibold lg:leading-[3.7rem]">
                              {/* Improving your Efficiency with
                              <span className="text-bloo font-semibold block mt-2">DevOps</span> */}
                              Accelerate innovation with <span className="text-bloo">DevOps</span>
                          </h1>
                          <p className="font-medium text-blackk/60 sm:text-xl text-lg">
                          As a top DevOps development firm, we specialize in optimizing your business's infrastructure and operations. Our customized DevOps solutions empower business owners to lead, thrive, and innovate in the digital age.    
                          </p>
                          <div className="flex flex-row sm:flex-row gap-4">
                              <Link to="/contact">
                                  <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                                      Let's Connect
                                  </button>
                              </Link>
                              <Link to="/services-devops">
                                  <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 text-blue-900 hover:bg-blue-100 text-sm sm:text-base">
                                      Learn More
                                  </button>
                              </Link>
                          </div>
                      </div>
                      <div className="flex lg:order-last order-first xl:justify-end justify-center mt-8 lg:mt-0">
                          <img className="w-full max-w-md rounded-lg scale-[.8]" src={devops} alt="Generative AI" />
                      </div>
                  </div>
              </div>
          ),
      },
      {
        content: (
            <div className="container mx-auto px-4 sm:px-12 lg:px-0 xl:px-12 2xl:px-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-blackk text-3xl sm:text-4xl lg:text-5xl font-semibold lg:leading-[3.7rem]">
                            {/* Driving business Growth with
                            <span className="text-bloo font-semibold block mt-2 2xl:text-nowrap text-wrap">Digital Transformation</span> */}
                            Transform your Business with <span className="text-bloo">Digital Solutions</span>
                        </h1>
                        <p className="font-medium text-blackk/60 sm:text-xl text-lg">
                        As the digital landscape evolves, businesses need effective strategies. We offer tailored digital transformation services, using our expertise to drive innovation, enhance efficiency, and improve processes and customer experiences.    
                        </p>
                        <div className="flex flex-row sm:flex-row gap-4">
                            <Link to="/contact">
                                <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 bg-blue-900 text-white hover:bg-blue-800 text-sm sm:text-base">
                                    Let's Connect
                                </button>
                            </Link>
                            <Link to="/services-digitaltransformation">
                                <button className="w-full sm:w-auto py-3 px-6 font-semibold rounded transition duration-200 border-2 border-blue-900 text-blue-900 hover:bg-blue-100 text-sm sm:text-base">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex lg:order-last order-first xl:justify-end justify-center mt-8 lg:mt-0">
                        <img className="w-full max-w-md rounded-lg" src={digitrans} alt="Generative AI" />
                    </div>
                </div>
            </div>
        ),
    },
        // ... Similar structure for other slides ...
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    }, );

    return (
        <div className="relative overflow-hidden font-manrope text-blackk pb-4">
            <div className="absolute inset-0 bg-bannerbg bg-cover bg-center bg-blend-overlay"></div>
            <div className="relative z-10 py-16 sm:py-24 2xl:py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <TransitionGroup className="h-[450px]">
                        <CSSTransition key={currentIndex} timeout={500} classNames=""
                        exit={false}
                        >
                            {slides[currentIndex].content}
                        </CSSTransition>
                    </TransitionGroup>
                    <div className="flex justify-center mt-8">
                        <div className="flex space-x-4">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-6 h-2 rounded-full ${
                                        currentIndex === index ? 'bg-blue-900' : 'bg-bloo/20'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="absolute xl:block hidden top-1/2 left-4 transform -translate-y-1/2">
                        <button onClick={prevSlide} className="text-blackk/50 hover:text-blackk">
                            <BsChevronLeft size={30} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-4 xl:block hidden transform -translate-y-1/2">
                        <button onClick={nextSlide} className="text-blackk/50 hover:text-blackk">
                            <BsChevronRight size={30} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Big;