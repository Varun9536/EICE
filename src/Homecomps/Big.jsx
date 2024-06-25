import React, { useRef, useState, useEffect } from "react";
import abstract from "../assets/abstract.mp4";
import genai from "../assets/Compressed/genai.png";
import iot from "../assets/Compressed/iot.png";
import devops from "../assets/Compressed/devops.png";
import cloud from '../assets/Compressed/cloud.png';
import uiux from '../assets/Compressed/uiux.png';
import digitrans from '../assets/Compressed/digitrans.png';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


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
                <div className="container mx-auto px-4 2xl:max-w-[1500px]">
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col space-y-6">
                    <h1 className="text-white text-4xl sm:text-5xl 2xl:text-6xl font-semibold leading-tight">
                      Transforming your Business through
                      <span className="text-bloo font-bold block mt-2">Generative AI</span>
                    </h1>
                    <p className="text-white/80 text-base 2xl:text-xl">
                      Integrating our Generative AI tools into your businesses enhances efficiency and innovation by automating tasks and personalizing customer experience. 
                      Our AI solutions generate analyze data for valuable insights, optimizing logistics, 
                      and accelerating time-to-market.
                    </p>
                    <div className="pt-4">
                      <a href="/resources/casestudies">
                        <button className="py-3 px-6 font-semibold rounded transition duration-200 border-2 border-bloo hover:bg-bloo/90 bg-bloo text-white hover:shadow-md hover:shadow-bloo/30 text-lg 2xl:text-xl">
                          Explore
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center 2xl:justify-end">
                    <div className="w-full max-w-[480px] h-[320px] 2xl:w-[30rem] 2xl:h-[30rem] rounded-lg border-2 border-white/60 shadow-md shadow-white/60 overflow-hidden">
                      <img className="w-full h-full object-cover rounded-lg" src={genai} alt="Generative AI" />
                    </div>
                  </div>
                </div>
              </div>
            ),
        },
        {
            content: (
                <div className="container mx-auto px-4 2xl:max-w-[1500px]">
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col space-y-6">
                    <h1 className="text-white text-4xl sm:text-5xl 2xl:text-6xl font-semibold leading-tight">
                      Scaling Your Company With
                      <span className="text-bloo font-bold block mt-2">Cloud Services</span>
                    </h1>
                    <p className="text-white/80 text-base 2xl:text-xl">
                      With our Cloud solutions we help you increase your operational scalability, reduce tech expenditure, and accelerate your growth.
                      Enhance your business agility and ensure seamless integration with our innovative cloud services.
                    </p>
                    <div className="pt-4">
                      <a href="/resources/casestudies">
                        <button className="py-3 px-6 font-semibold rounded transition duration-200 border-2 border-bloo hover:bg-bloo/90 bg-bloo text-white hover:shadow-md hover:shadow-bloo/30 text-lg 2xl:text-xl">
                          Explore
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center 2xl:justify-end">
                    <div className="w-full max-w-[480px] h-[320px] 2xl:w-[30rem] 2xl:h-[30rem] rounded-lg border-2 border-white/60 shadow-md shadow-white/60 overflow-hidden">
                      <img className="w-full h-full object-cover rounded-lg" src={cloud} alt="Cloud Services" />
                    </div>
                  </div>
                </div>
              </div>
              
            ),
        },
        {
            content: (
                <div className="container mx-auto px-4 2xl:max-w-[1500px]">
  <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 items-center">
    <div className="flex flex-col space-y-6">
      <h1 className="text-white text-4xl sm:text-5xl 2xl:text-6xl font-semibold leading-tight">
        Improving your Efficiency with
        <span className="text-bloo font-bold block mt-2">DevOps</span>
      </h1>
      <p className="text-white/80 text-base 2xl:text-xl">
        Use our DevOps services to automate your manual deployment process. Achieve greater MMTR (Mean Time to Recovery),
        discover true reliability, and increase the frequency of your software releases with DevOps.
      </p>
      <div className="pt-4">
        <a href="/resources/casestudies">
          <button className="py-3 px-6 font-semibold rounded transition duration-200 border-2 border-bloo hover:bg-bloo/90 bg-bloo text-white hover:shadow-md hover:shadow-bloo/30 text-lg 2xl:text-xl">
            Explore
          </button>
        </a>
      </div>
    </div>
    <div className="flex justify-center 2xl:justify-end">
      <div className="w-full max-w-[480px] h-[320px] 2xl:w-[30rem] 2xl:h-[30rem] rounded-lg border-2 border-white/60 shadow-md shadow-white/60 overflow-hidden">
        <img className="w-full h-full object-cover rounded-lg" src={devops} alt="DevOps" />
      </div>
    </div>
  </div>
</div>

            ),
        },
        {
            content: (
                <div className="container mx-auto px-4 2xl:max-w-[1500px]">
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col space-y-6">
                    <h1 className="text-white text-4xl sm:text-5xl 2xl:text-6xl font-semibold leading-tight">
                      Increasing your Revenue with
                      <span className="text-bloo font-bold block mt-2">IoT</span>
                    </h1>
                    <p className="text-white/80 text-base 2xl:text-xl">
                      Automate processes, develop new product lines, generate new revenue streams, reduce labor costs, and cut waste with IoT technology.
                      Enhance your customer experience, predictive maintenance, and manufacturing with our IoT technology.
                    </p>
                    <div className="pt-4">
                      <a href="/resources/casestudies">
                        <button className="py-3 px-6 font-semibold rounded transition duration-200 border-2 border-bloo hover:bg-bloo/90 bg-bloo text-white hover:shadow-md hover:shadow-bloo/30 text-lg 2xl:text-xl">
                          Explore
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center 2xl:justify-end">
                    <div className="w-full max-w-[480px] h-[320px] 2xl:w-[30rem] 2xl:h-[30rem] rounded-lg border-2 border-white/60 shadow-md shadow-white/60 overflow-hidden">
                      <img className="w-full h-full object-cover rounded-lg" src={iot} alt="IoT" />
                    </div>
                  </div>
                </div>
              </div>
              
            ),
        },
        {
            content: (
             
                <div className="container mx-auto px-4 2xl:max-w-[1500px]">
  <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 items-center">
    <div className="flex flex-col space-y-6">
      <h1 className="text-white text-4xl sm:text-5xl 2xl:text-6xl font-semibold leading-tight">
        Driving business Growth with
        <span className="text-bloo font-bold block mt-2">Digital Transformation</span>
      </h1>
      <p className="text-white/80 text-base 2xl:text-xl">
        Integrate digital technology into all areas of your business, fundamentally changing how you operate
        and deliver value to customers.
      </p>
      <div className="pt-4">
        <a href="/resources/casestudies">
          <button className="py-3 px-6 font-semibold rounded transition duration-200 border-2 border-bloo hover:bg-bloo/90 bg-bloo text-white hover:shadow-md hover:shadow-bloo/30 text-lg 2xl:text-xl">
            Explore
          </button>
        </a>
      </div>
    </div>
    <div className="flex justify-center 2xl:justify-end">
      <div className="w-full max-w-[480px] h-[320px] 2xl:w-[30rem] 2xl:h-[30rem] rounded-lg border-2 border-white/60 shadow-md shadow-white/60 overflow-hidden">
        <img className="w-full h-full object-cover rounded-lg" src={digitrans} alt="Digital Transformation" />
      </div>
    </div>
  </div>
</div>

            ),
        },
        {
            content: (
                <div className="container mx-auto px-4 2xl:max-w-[1500px]">
  <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 items-center">
    <div className="flex flex-col space-y-6">
      <h1 className="text-white text-4xl sm:text-5xl 2xl:text-6xl font-semibold leading-tight">
        Creating gorgeous Designs with
        <span className="text-bloo font-bold block mt-2">UI / UX</span>
      </h1>
      <p className="text-white/80 text-base 2xl:text-xl">
        Employ our highly experienced UI/UX developers to get high-end designs for your apps and other developmental needs
        made with your customers as our utmost priority.
      </p>
      <div className="pt-4">
        <a href="/resources/casestudies">
          <button className="py-3 px-6 font-semibold rounded transition duration-200 border-2 border-bloo hover:bg-bloo/90 bg-bloo text-white hover:shadow-md hover:shadow-bloo/30 text-lg 2xl:text-xl">
            Explore
          </button>
        </a>
      </div>
    </div>
    <div className="flex justify-center 2xl:justify-end">
      <div className="w-full max-w-[480px] h-[320px] 2xl:w-[30rem] 2xl:h-[30rem] rounded-lg border-2 border-white/60 shadow-md shadow-white/60 overflow-hidden">
        <img className="w-full h-full object-cover rounded-lg" src={uiux} alt="UI / UX" />
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
            <div className="">
                <div className="absolute inset-0 z-10 backdrop-filter backdrop-blur-[30px] bg-zinc-900/50"></div>    
            </div>
            <div className='z-20 2xl:flex 2xl:flex-row 2xl:max-h-[1000px] w-screen relative group 2xl:items-center 2xl:text-balance text-left'>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 -ml-24">
                    <div onClick={prevSlide} className='rounded-full text-white cursor-pointer'>
                        <BsChevronLeft size={80} />
                    </div>
                </div>
                <div className="w-full px-12 2xl:px-16"> {/* Added padding here */}
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
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 -mr-24">
                    <div onClick={nextSlide} className='rounded-full text-white cursor-pointer'>
                        <BsChevronRight size={80} />
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