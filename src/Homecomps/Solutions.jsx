import React from "react";
import arrow from '../assets/arrow.svg';

function Solutions() {
    const industries = [
        { link: "industries-healthcare", name: "HEALTHCARE", description: "Innovative solutions to improve patient care and streamline healthcare operations", bgClass: "bg-healthcare" },
        { link: "industries-financial", name: "FINANCIAL", description: "Secure software to streamline solutions and enhance customer experience", bgClass: "bg-finance" },
        { link: "industries-digitalmedia", name: "DIGITAL MEDIA", description: "Advanced solutions for content creation, distribution and monetization", bgClass: "bg-digimedia" },
        { link: "industries-education", name: "EDUCATION", description: "Digital tools that enhance learning and administrative efficiency", bgClass: "bg-education" }
    ];

    return (
        <div className="font-manrope py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-bloo font-bold text-xl sm:text-2xl lg:text-3xl text-center mb-2 py-2">
                    Industries We Serve
                </h2>
                <h1 className="text-blackk font-extrabold text-2xl sm:text-3xl lg:text-4xl text-center mb-12 py-2">
                    IT & Software Development Solutions for Industries
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 py-6">
                    {industries.map((industry, index) => (
                        <IndustryCard key={index} {...industry} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <a href="/industries" className="inline-flex items-center justify-center py-4 px-24  border border-bloo bg-bloo text-white font-semibold rounded-md text-lg transition duration-200 hover:bg-bloo/90 hover:shadow-md hover:shadow-bloo/30">
                        See All <img src={arrow} alt="" className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    )
}

function IndustryCard({ name, description, bgClass, link }) {
    return (
        <div className={`relative ${bgClass} bg-cover rounded-lg cursor-pointer transition duration-200 hover:shadow-lg hover:shadow-blackk h-64 sm:h-80 lg:h-96`}>
            <a href={`/${link}`} className="absolute inset-0 bg-gradient-to-t from-stone-900/90 from-20% via-stone-800/95 via-20% to-transparent rounded-lg flex flex-col justify-end p-4">
                <h3 className="text-stone-100 font-extrabold text-2xl sm:text-3xl mb-2">
                    {name}
                </h3>
                <p className="text-white font-semibold text-sm sm:text-base">
                    {description}
                </p>
            </a>
        </div>
    )
}

export default Solutions;