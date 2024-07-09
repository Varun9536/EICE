import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';


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
        { src: IIC, height: 100, scale: 1.1, link:"https://iicdelhi.in" },
        { src: tata, height: 100, scale: 0.9, link:"https://tata.com"},
        { src: indianoil, height: 100, scale: 1.2, link:"https://iocl.com"},
        { src: pandg, height: 100, scale: 1.1, link:"https://in.pg.com" },
        { src: halli, height: 100, scale: 0.5, link:"https://halliburton.com" },
        { src: NIC, height: 100, scale: 70, link:"https://nic.in" },
        { src: geologix, height: 100, scale: 1.1, link:"https://geologix.com" },
        { src: salesvu, height: 100, scale: 0.9, link:"https://salesvu.com" },
        { src: slb, height: 100, scale: 1.1, link:"https://slb.com" },
        { src: nrf, height: 100, scale: 1.1, link:"https://nortonrosefulbright.com" },
        { src: dgh, height: 100, scale: 1.1, link:"https://dghindia.gov.in" },
        { src: wapcos, height: 100, scale: 1.1, link:"https://wapcos.co.in" }
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    };

    return (
        <div className="font-manrope flex flex-col items-center justify-centerpy-1">
            <div className="w-screen mx-2 px-4">
                <div className=" relative overflow-hidden">
                    <Slider {...settings}>
                        {clients.map((client, index) => (
                            <ClientLogo 
                                key={index} 
                                link={client.link}
                                // height={client.height}
                                scale={client.scale}
                                src={client.src} 
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

function ClientLogo({ src, width, height, link, scale}) {
    return (
        <div className="flex items-center justify-center p-4">
            <Link to={`/${link}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <img 
                    src={src}
                    alt="Client Logo"
                    style={{ width: `${width}px`, height: `${height}px` }}
                    className={`max-h-20 object-contain transition-all duration-300 filter saturate-0 hover:saturate-100 scale-${scale}`}
                />
            </Link>
        </div>
    );
}

export default Clients;