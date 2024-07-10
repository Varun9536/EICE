import React from "react";
import Reviews from "../Homecomps/Reviews";

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
    { color: "blue", Icon: FaOilCan, title: "Oil and Gas", to:"/" },
    { color: "purple", Icon: BiPencil, title: "Educational", to:"/" },
    { color: "emerald", Icon: GoLaw, title: "Legal", to:"/" },
    { color: "amber", Icon: FaSyringe, title: "Healthcare", to:"/" },
    { color: "pink", Icon: MdPermMedia, title: "Digital Media", to:"/" },
    { color: "rose", Icon: IoIosCash, title: "Financial", to:"/" },
    { color: "amber", Icon: BsTruck, title: "Logistics", to:"/" },
    { color: "rose", Icon: FaBusinessTime, title: "Enterprise", to:"/" },
  ];

  return (
    <div>
        <div className="font-manrope max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <section className="text-center mb-12 sm:mb-16">
                <h1 className="text-blackk font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
                Empowering Industries With <span className="text-bloo">Digital Excellence</span>
                </h1>
                <p className="text-blackk/70 font-medium text-base sm:text-lg max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit, nostrum minima suscipit quidem corporis eos assumenda animi perspiciatis.
                </p>
            </section>

            <div className="w-full max-w-screen-2xl mx-auto mb-12 sm:mb-16">
                <div className="bg-indusbanner w-full h-0 pb-[40%] sm:pb-[30%] lg:pb-[25%] bg-cover bg-center bg-no-repeat rounded-lg"></div>
            </div>

            <section className="text-center py-20">
                <h2 className="text-bloo font-bold text-2xl sm:text-3xl mb-2">Core Industries</h2>
                <h3 className="text-blackk font-bold text-xl sm:text-2xl lg:text-3xl">How we affect the world with our work</h3>
            </section>

            <div className=" grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                {industries.map((industry, index) => (
                <IndustryCard
                    key={index}
                    to={industry.to}
                    color={industry.color}
                    Icon={industry.Icon}
                    title={industry.title}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo quibusdam aspernatur qui reiciendis et voluptatum distinctio!"
                />
                ))}
            </div>

            <div className="pt-32 grid lg:grid-cols-2 grid-cols-1 gap-20">
                <h1 className="text-bloo font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 flex items-center justify-center">
                    Why Choose EICE
                </h1>
                <h1 className="text-blackk font-bold text-xl sm:text-2xl lg:text-3xl mb-4">
                    <span className="text-bloo">Partner With EICE</span> to transform your business
                    and stay ahead in your industry. Our expertise, dedication, and innovative solutions
                    will help you <span className="text-bloo">achieve your goals</span> and drive sustained success.
                </h1>
            </div>

        </div>
        <Reviews />
    </div>

  );
}

export default Indusmain;