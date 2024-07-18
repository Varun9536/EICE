import React from "react";
import Reviews from "../Homecomps/Reviews";
import Talktous from "../Othercomps/Talktous";
import Clients from '../Homecomps/Clients';
import Clientele from '../Homecomps/Clientele';

import { GoLaw } from "react-icons/go";
import { FaBusinessTime, FaOilCan, FaSyringe } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import { SiEducative } from "react-icons/si";
import { BiPencil } from "react-icons/bi";
import { MdPermMedia } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { Link } from 'react-router-dom';

const IndustryCard = ({ to, color, Icon, title, description }) => (
  <Link to={to} className={`group cursor-pointer p-4 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200`}>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 group-hover:scale-[.98] transition duration-300">
      <div className="flex items-center justify-center">
        <div className={`p-4 rounded-full bg-${color}-400/20`}>
          <Icon size={40} className="text-blackk"/>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-xl sm:text-2xl py-2">{title}</h3>
        <p className="font-medium text-blackk/60 sm:text-xl text-lg">{description}</p>
      </div>
    </div>
  </Link>
);

function Indusmain() {
  const industries = [
    { color: "blue", Icon: FaOilCan, title: "Oil and Gas", to:"/", description: "Pioneering the Future of Oil and Gas with State-of-the-Art Solutions." },
    { color: "purple", Icon: BiPencil, title: "Education", to:"/", description: "Empowering Education Through Innovative Technology Solutions." },
    { color: "emerald", Icon: GoLaw, title: "Legal", to:"/", description: "Innovative Legal Software Solutions for a Modern Legal Practice." },
    { color: "amber", Icon: FaSyringe, title: "Healthcare", to:"/", description: "Elevate Your Digital Health Solutions with Our Expert Software Development Services." },
    { color: "pink", Icon: MdPermMedia, title: "Digital Media", to:"/", description: "Transforming the Media Landscape with Innovative Technology Solutions." },
    { color: "rose", Icon: IoIosCash, title: "Financial Services", to:"/", description: "Revolutionizing Financial Services Through Advanced Technology Solutions." },
    { color: "amber", Icon: BsTruck, title: "Logistics", to:"/", description: "Driving Logistics Excellence with Intelligent Software Solutions." },
    { color: "rose", Icon: FaBusinessTime, title: "Enterprise", to:"/", description: "Driving Enterprise Excellence with Intelligent Software Solutions." },
  ];

  return (
    <div>
        <div className="font-manrope max-w-7xl mx-auto px-4  pt-32 sm:pt-32 2xl:pt-8">
            <section className="text-center">
                <h1 className="text-blackk font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-7xl py-1">
                Driving <span className="text-bloo">Digital Transformation</span> Across Industries
                </h1>
                <p className="text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-4 text-2xl sm:leading-tight leading-snug text-center">
                EICE empowers businesses to thrive in the digital age by leveraging cutting-edge technologies and innovative strategies, revolutionizing operations and enhancing competitiveness.
                </p>
            </section>

            <div className="w-full -my-6 scale-[.7] max-w-screen-2xl mx-auto">
                <div className="bg-indusbanner w-full h-0 pb-[40%] sm:pb-[30%] lg:pb-[25%] bg-cover bg-center bg-no-repeat rounded-full"></div>
            </div>

            <section className="text-center py-8">
                <h2 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">Industry Solutions</h2>
                <h3 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-7xl py-1">Transforming Sectors Through Digital Innovation</h3>
            </section>

            <div className="grid sm:grid-cols-2 gap-6 ">
                {industries.map((industry, index) => (
                <IndustryCard
                    key={index}
                    to={industry.to}
                    color={industry.color}
                    Icon={industry.Icon}
                    title={industry.title}
                    description={industry.description}
                />
                ))}
            </div>

            <div className="pt-24 pb-4 grid lg:grid-cols-2 grid-cols-1 gap-20">
                <h1 className="text-bloo font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 flex items-center justify-center">
                    Why Choose EICE
                </h1>
                <h1 className="text-blackk font-bold text-xl sm:t ext-2xl lg:text-3xl mb-4">
                    <span className="">Partner with EICE</span> to accelerate your digital transformation journey. 
                    Our expertise in emerging technologies and industry-specific solutions will help you 
                    <span className="text-bloo"> innovate, optimize, and lead</span> in the digital era.
                </h1>
            </div>

        </div>
        <Reviews />
        <Talktous />
    </div>
  );
}

export default Indusmain;