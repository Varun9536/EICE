import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Import all client logos
import tata from "../assets/Compressed/tata.png";
import indianoil from "../assets/Compressed/indianoil.png";
import pandg from "../assets/Compressed/pandg.png";
import halli from "../assets/Compressed/halli.png";
import NIC from "../assets/Compressed/NIC.png";
import IIC from "../assets/Compressed/IIC.png";
import salesvu from "../assets/Compressed/salesvu.png";
import wapcos from "../assets/Compressed/wapcos.png";
import geologix from "../assets/Compressed/geologix.png";
import dgh from "../assets/Compressed/dgh.png";
import nrf from "../assets/Compressed/nrf.png";
import slb from "../assets/Compressed/slb.png";

const scaleClasses = {
  1: "scale-100",
  1.1: "scale-[1.1]",
  1.2: "scale-[1.2]",
  1.3: "scale-[1.3]",
  1.4: "scale-[1.4]",
  1.5: "scale-[1.5]",
  1.6: "scale-[1.6]",
  1.7: "scale-[1.7]",
};

const clients = [
  { src: IIC, link: "https://iicdelhi.in", scale: 1.2 },
  { src: tata, link: "https://tata.com", scale: 1.1 },
  { src: indianoil, link: "https://iocl.com", scale: 1.5 },
  { src: pandg, link: "https://in.pg.com", scale: 1.5 },
  { src: halli, link: "https://halliburton.com", scale: 1.1 },
  { src: geologix, link: "https://geologix.com", scale: 1.2 },
  { src: salesvu, link: "https://salesvu.com", scale: 1.1 },
  { src: slb, link: "https://slb.com", scale: 1.2 },
  { src: nrf, link: "https://nortonrosefulbright.com", scale: 1.7 },
  { src: dgh, link: "https://dghindia.gov.in", scale: 1.5 },
  { src: wapcos, link: "https://wapcos.co.in", scale: 1.6 },
];

function Clients() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
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
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="py-3 w-screen overflow-hidden">
      <Slider {...settings}>
        {clients.map((client, index) => (
          <ClientLogo
            key={index}
            link={client.link}
            src={client.src}
            scale={client.scale}
          />
        ))}
      </Slider>
    </div>
  );
}

function ClientLogo({ src, link, scale }) {
  const scaleClass = scaleClasses[scale] || "scale-100";

  return (
    <div className="px-2">
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={src}
          alt="Client Logo"
          className={`h-16 w-auto mx-auto object-contain transition-all duration-300 filter grayscale hover:grayscale-0 ${scaleClass}`}
        />
      </Link>
    </div>
  );
}

export default Clients;
