import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Reviews() {
    const testimonials = [
        {
            quote: "The app was created as desired, although a few bugs had made it through the QA team but EICE's communication was great and all issues and bugs were resolved on time.",
            name: "Nathan Foreman",
            title: "IT Professional"
        },
        {
            quote: "EICE completed my project on time and correctly. Even when we had multiple contracts ongoing at the same time, EICE ensured that the product was correctly made without fault.",
            name: "AoGe He",
            title: "CEO - Yidian Internet Technology"
        },
        {
            quote: "EICE developers did a good job developing this project, some issues had come but were resolved satisfactorily. EICE were polite and helpful in their communication.",
            name: "Weston Argo",
            title: "Owner - Groundwork Systems"
        },
        {
            quote: "Great work on digging into an existing project. Understanding the underlying tech and business issues and then fixing it up into something we're proud to have. Good Work!",
            name: "Uzis Rozkalns",
            title: "Delivery lead - HSBC"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-blackk bg-testimonial bg-blend-overlay bg-white/30 bg-cover py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-center text-bloo font-bold text-3xl md:text-4xl mb-8">
                    Testimonials
                </h1>
                
                <div className="relative">
                    <TransitionGroup>
                        <CSSTransition
                            key={currentIndex}
                            timeout={500}
                            classNames="fade"
                            exit={false}
                        >
                            <div className="text-center">
                                <p className="font-semibold italic text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 max-w-4xl mx-auto">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <div className="font-semibold">
                                    <p className="text-lg md:text-xl mb-1">{testimonials[currentIndex].name}</p>
                                    <p className="text-bloo italic text-md md:text-lg">{testimonials[currentIndex].title}</p>
                                </div>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>

                    <button 
                        onClick={prevSlide} 
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 shadow-md hover:bg-white/75 transition duration-300"
                    >
                        <BsChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={nextSlide} 
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 shadow-md hover:bg-white/75 transition duration-300"
                    >
                        <BsChevronRight size={24} />
                    </button>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, index) => (
                        <RxDotFilled 
                            key={index}
                            size={24}
                            className={`cursor-pointer ${currentIndex === index ? 'text-bloo' : 'text-gray-300'}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reviews;