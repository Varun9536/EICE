import React from "react";
import Reviews from "../Homecomps/Reviews";
import Talktous from "../Othercomps/Talktous";
import Clients from '../Homecomps/Clients';
import Clientele from '../Homecomps/Clientele';

import indus_oilandgas from '../assets/Compressed/indus-oilandgas.png';
import indus_education from '../assets/Compressed/indus-education.png';
import indus_law from '../assets/Compressed/indus-law.png';
import indus_healthcare from '../assets/Compressed/indus-healthcare.png';
import indus_digimedia from '../assets/Compressed/indus-digimedia.png';
import indus_financial from '../assets/Compressed/indus-financial.png';
import indus_logistics from '../assets/Compressed/indus-logistics.png';
import indus_enterprise from '../assets/Compressed/indus-enterprise.png';

import { Link } from 'react-router-dom';

const IndustryCard = ({ to, color, Icon, title, description }) => (
  <Link to={to} className={`group cursor-pointer p-4 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200`}>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 group-hover:scale-[.98] transition duration-300">
      <div className="flex items-center justify-center">
        <div className={`p-1 rounded-full bg-${color}-400/20`}>
          <img src={Icon} className="text-blackk"/>
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
    { color: "blue", Icon: indus_oilandgas, title: "Oil and Gas", to:"/industries-oilandgas", description: "Pioneering the Future of Oil and Gas with State-of-the-Art Solutions." },
    { color: "purple", Icon: indus_education, title: "Education", to:"/industries-education", description: "Empowering Education Through Innovative Technology Solutions." },
    { color: "emerald", Icon: indus_law, title: "Legal", to:"/industries-legal", description: "Innovative Legal Software Solutions for a Modern Legal Practice." },
    { color: "amber", Icon: indus_healthcare, title: "Healthcare", to:"/industries-healthcare", description: "Elevate Your Digital Health Solutions with Our Expert Software Development Services." },
    { color: "pink", Icon: indus_digimedia, title: "Digital Media", to:"/industries-digimedia", description: "Transforming the Media Landscape with Innovative Technology Solutions." },
    { color: "rose", Icon: indus_financial, title: "Financial Services", to:"/industries-financial", description: "Revolutionizing Financial Services Through Advanced Technology Solutions." },
    { color: "amber", Icon: indus_logistics, title: "Logistics", to:"/industries-logistics", description: "Driving Logistics Excellence with Intelligent Software Solutions." },
    { color: "rose", Icon: indus_enterprise, title: "Enterprise", to:"/industries-enterprise", description: "Driving Enterprise Excellence with Intelligent Software Solutions." },
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