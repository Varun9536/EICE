
import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { CgLayoutGridSmall } from "react-icons/cg";

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
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= testimonials.length - 2 ? 0 : prevIndex + 2));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-zinc-50 relative text-blackk py-24 px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-center text-bloo font-bold text-3xl md:text-4xl mb-12">
                    Testimonials
                </h1>
                <div className="relative">
                    <div className="flex flex-col md:flex-row gap-8 px-16">
                        {[currentIndex, currentIndex + 1].map((index) => (
                            <div key={index} className="flex-1 bg-white p-6 rounded-lg shadow-md">
                                <p className="font-semibold italic text-lg mb-6">
                                    "{testimonials[index].quote}"
                                </p>
                                <div className="font-semibold">
                                    <p className="font-bold text-xl mb-1">{testimonials[index].name}</p>
                                    <p className="text-bloo italic">{testimonials[index].title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

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

                <div className="flex justify-center pt-8 space-x-2">
                    {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                        <div  
                                size={40}
                                key={index}
                                className={ `${currentIndex === (index*2) ? 'px-3 py-1 rounded-xl bg-blue-900' : 'px-3 py-1 rounded-xl bg-blue-900/30'}`}
                                onClick={() => setCurrentIndex(index * 2)} 
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reviews;