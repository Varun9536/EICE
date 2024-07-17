import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

// Import all client logos
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

const clients = [
    { src: IIC, link: "https://iicdelhi.in" },
    { src: tata, link: "https://tata.com" },
    { src: indianoil, link: "https://iocl.com" },
    { src: pandg, link: "https://in.pg.com" },
    { src: halli, link: "https://halliburton.com" },
    { src: NIC, link: "https://nic.in" },
    { src: geologix, link: "https://geologix.com" },
    { src: salesvu, link: "https://salesvu.com" },
    { src: slb, link: "https://slb.com" },
    { src: nrf, link: "https://nortonrosefulbright.com" },
    { src: dgh, link: "https://dghindia.gov.in" },
    { src: wapcos, link: "https://wapcos.co.in" }
];

function Clients() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };

    return (
        <div className="bg-bloo/5 py-3 w-screen overflow-hidden">
            <Slider {...settings}>
                {clients.map((client, index) => (
                    <ClientLogo
                        key={index} 
                        link={client.link}
                        src={client.src} 
                    />
                ))}
            </Slider>
        </div>
    )
}

function ClientLogo({ src, link }) {
    return (
        <div className="px-2">
            <Link to={link} target="_blank" rel="noopener noreferrer" className="block">
                <img 
                    src={src}
                    alt="Client Logo"
                    className="h-16 w-auto mx-auto object-contain transition-all duration-300 filter grayscale hover:grayscale-0"
                />
            </Link>
        </div>
    );
}

export default Clients;