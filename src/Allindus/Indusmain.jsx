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
  <Link to={to} className={`cursor-pointer hover:border-bloo/50 hover:shadow-lg hover:shadow-bloo/30 w-full rounded-md p-4 group hover:bg-bloo/5 transition duration-500`}>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 group-hover:scale-[.98] transition duration-300">
      <div className="flex items-center justify-center">
        <div className={`p-4 rounded-full bg-${color}-400/20`}>
          <Icon size={40} className="text-blackk"/>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-xl sm:text-2xl py-2">{title}</h3>
        <p className="font-medium text-blackk/60 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  </Link>
);

function Indusmain() {
  const industries = [
    { color: "blue", Icon: FaOilCan, title: "Oil and Gas", to:"/", description: "Revolutionizing operations with IoT and data analytics for improved efficiency and sustainability." },
    { color: "purple", Icon: BiPencil, title: "Education", to:"/", description: "Enhancing learning experiences through e-learning platforms and AI-driven personalized education." },
    { color: "emerald", Icon: GoLaw, title: "Legal", to:"/", description: "Streamlining processes with digital case management and AI-powered legal research tools." },
    { color: "amber", Icon: FaSyringe, title: "Healthcare", to:"/", description: "Improving patient care with telemedicine, electronic health records, and AI diagnostics." },
    { color: "pink", Icon: MdPermMedia, title: "Digital Media", to:"/", description: "Innovating content delivery and user engagement through AI-driven personalization and VR/AR technologies." },
    { color: "rose", Icon: IoIosCash, title: "Financial Services", to:"/", description: "Transforming banking with blockchain, AI-powered risk assessment, and digital payment solutions." },
    { color: "amber", Icon: BsTruck, title: "Logistics", to:"/", description: "Optimizing supply chains with IoT tracking, predictive analytics, and autonomous vehicles." },
    { color: "rose", Icon: FaBusinessTime, title: "Enterprise", to:"/", description: "Boosting productivity and innovation with cloud computing, AI, and digital workflow solutions." },
  ];

  return (
    <div>
        <div className="font-manrope max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <section className="text-center mb-4 sm:mb-6">
                <h1 className="text-blackk font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
                Driving <span className="text-bloo">Digital Transformation</span> Across Industries
                </h1>
                <p className="text-blackk/70 font-medium text-base sm:text-lg max-w-3xl mx-auto">
                EICE empowers businesses to thrive in the digital age by leveraging cutting-edge technologies and innovative strategies, revolutionizing operations and enhancing competitiveness.
                </p>
            </section>

            <div className="w-full scale-[.7] max-w-screen-2xl mx-auto mb-4 sm:mb-6">
                <div className="bg-indusbanner w-full h-0 pb-[40%] sm:pb-[30%] lg:pb-[25%] bg-cover bg-center bg-no-repeat rounded-lg"></div>
            </div>

            <section className="text-center py-20">
                <h2 className="text-bloo font-bold text-2xl sm:text-3xl mb-2">Industry Solutions</h2>
                <h3 className="text-blackk font-bold text-xl sm:text-2xl lg:text-3xl">Transforming Sectors Through Digital Innovation</h3>
            </section>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
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

            <div className="pt-32 grid lg:grid-cols-2 grid-cols-1 gap-20">
                <h1 className="text-bloo font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 flex items-center justify-center">
                    Why Choose EICE
                </h1>
                <h1 className="text-blackk font-bold text-xl sm:t ext-2xl lg:text-3xl mb-4">
                    <span className="text-bloo">Partner with EICE</span> to accelerate your digital transformation journey. 
                    Our expertise in emerging technologies and industry-specific solutions will help you 
                    <span className="text-bloo"> innovate, optimize, and lead</span> in the digital era.
                </h1>
            </div>

        </div>
        <Reviews />
        <Talktous />
        <Clients />
        <Clientele />
    </div>
  );
}

export default Indusmain;