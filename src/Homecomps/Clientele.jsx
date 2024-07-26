import React from "react";

function Clientele() {
    return (
        <div className="relative font-manrope text-blackk py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 w-full h-full -z-10">
                <div className="bg-map bg-no-repeat bg-cover bg-center h-full w-full opacity-70"></div>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
                <h2 className="text-bloo text-center text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
                    Journey so far
                </h2>
                <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16">
                    Milestones and achievements
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12">
                    <Milestone number="14+" text="Years" smallText="Of Experience" />
                    <Milestone number="150+" text="Projects" smallText="Delivered Successfully" />
                    <Milestone number="60+" text="Clients" smallText="Globally" />
                </div>
            </div>
        </div>
    )
}

function Milestone({ number, text, smallText }) {
    return (
        <div className="text-center">
            <div className="text-bloo font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-2">
                {number}
            </div>
            <div className="font-semibold text-base sm:text-lg lg:text-xl mb-1">
                {text}
            </div>
            <div className="text-sm lg:text-base text-gray-600">
                {smallText}
            </div>
        </div>
    )
}

export default Clientele;