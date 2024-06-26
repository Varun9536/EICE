import React from "react";

function Clientele() {
    return (
        <div className="bg-map bg-cover bg-blend-overlay bg-white/25 shadow-sm shadow-blackk/20 font-manrope text-blackk py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 2xl:py-44 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-bloo text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
                    Journey so far
                </h2>
                <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16">
                    Milestones and achievements
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32">
                    <Milestone number="10+" text="Years" smallText="Of Experience" />
                    <Milestone number="150+" text="Projects" smallText="Delivered Successfully" />
                    <Milestone number="60+" text="Clients" smallText="Global" />
                </div>
            </div>
        </div>
    )
}

function Milestone({ number, text, smallText }) {
    return (
        <div className="text-center">
            <div className="text-bloo font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-2">
                {number}
            </div>
            <div className="font-semibold text-lg sm:text-xl lg:text-2xl">
                {text}
            </div>
            <div className="text-sm lg:text-base font-light sm:hidden">
                {smallText}
            </div>
        </div>
    )
}

export default Clientele;