import React, { useRef } from "react";
import tata from "../assets/Compressed/tata.png";
import indianoil from "../assets/Compressed/indianoil.png";
import pandg from "../assets/Compressed/pandg.png";
import halli from "../assets/Compressed/halli.png";
import NIC from '../assets/Compressed/NIC.png';
import IIC from '../assets/Compressed/IIC.png';
import salesvu from '../assets/Compressed/salesvu.png';
import wapcos from '../assets/Compressed/wapcos.png';
import geologix from '../assets/Compressed/geologix.png';
import dgh from '../assets/Compressed/dgh.png';
import nrf from '../assets/Compressed/nrf.png';
import slb from '../assets/Compressed/slb.png';

function Clients() {
    const clients = [
        { src: IIC, width: 120, height: 120, link:"https://iicdelhi.in" },
        { src: tata, width: 150, height: 150, link:"https://tata.com"},
        { src: indianoil, width: 110, height: 120, link:"https://iocl.com"},
        { src: pandg, width: 130, height: 65, link:"https://in.pg.com" },
        { src: halli, width: 120, height: 120, link:"https://halliburton.com" },
        { src: NIC, width: 100, height: 90, link:"https://nic.in" },
        { src: geologix, width: 120, height: 100, link:"https://geologix.com" },
        { src: salesvu, width: 120, height: 100, link:"https://salesvu.com" },
        { src: slb, width: 120, height: 120, link:"https://slb.com" },
        { src: nrf, width: 120, height: 100, link:"https://nortonrosefulbright.com" },
        { src: dgh, width: 150, height: 120, link:"https://dghindia.gov.in" },
        { src: wapcos, width: 130, height: 130, link:"https://wapcos.co.in" }
    ];

    const containerRef = useRef(null);

    return (
        <div className="font-manrope bg-zinc-50 flex flex-col items-center justify-center pb-8 sm:pb-16 lg:pb-16 pt-20 sm:pt-28 lg:pt-32">
            <div className="max-w-7xl mx-2 px-4 sm:px-6 lg:px-8">
                <h1 className="text-center text-black font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 sm:mb-12 lg:mb-16">
                    Proudly serving <br className="sm:hidden"/>
                    <span className="text-bloo font-semibold"> Global Clients </span>
                     with excellence
                </h1>
                
                <div className="relative w-full woverflow-hidden">
                    <div className="sm:w-full w-screen px-6">
                    <div ref={containerRef} className=" rounded-xl py-8 sm:py-12 overflow-x-auto hide-scrollbar">
                    {/* <div ref={containerRef} className="bg-white rounded-xl py-8 sm:py-12 overflow-x-auto hide-scrollbar"> */}
                        <div className="flex flex-nowrap gap-8 items-center px-4 sm:px-0 min-w-max sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:min-w-0 justify-center">
                            {clients.map((client, index) => (
                                <ClientLogo 
                                    key={index} 
                                    src={client.src} 
                                    width={client.width} 
                                    height={client.height}
                                    link={client.link}
                                />
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ClientLogo({ src, width, height, link }) {
    return (
        <div className="flex items-center justify-center p-4 flex-shrink-0 sm:flex-shrink">
            <a href={link} className="cursor-pointer">
                <img 
                    src={src} 
                    alt="Client Logo" 
                    style={{ width: `${width}px`, height: `${height}px` }}
                    className="object-contain transition-all duration-300 filter saturate-0 hover:saturate-100" 
                />
            </a>
        </div>
    );
}

export default Clients;
