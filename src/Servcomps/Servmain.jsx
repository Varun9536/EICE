import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Offers from "../Homecomps/Offers";

import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiPieChart,
} from "react-icons/fi";
import {
  FaAndroid,
  FaArrowRight,
  FaAppStoreIos,
  FaLaptopCode,
  FaPeopleArrows,
  FaPencilRuler,
} from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { FaCediSign, FaComputer, FaFileCircleCheck } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { MdOutlineAppRegistration } from "react-icons/md";
import { CiMobile1, CiUser, CiCircleQuestion } from "react-icons/ci";
import { IoIosBuild, IoIosChatboxes } from "react-icons/io";
import { LuBrainCircuit, LuCircuitBoard, LuCloudCog } from "react-icons/lu";
import { SiBlockchaindotcom } from "react-icons/si";
import { FiCheckCircle } from "react-icons/fi";
import { TbLetterA, TbLetterI } from "react-icons/tb";

import consultancy from "../assets/Compressed/consultancy.jpg";
import uiuxdesign from "../assets/Compressed/uiuxdesign.jpg";
import { Link } from "react-router-dom";
function Servmain() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const scrollTo = searchParams.get("scrollTo");

    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="">
      <div className=" relative font-manrope mx-auto px-1 sm:max-w-7xl w-screen pb-8">
        <div className="2xl:pt-12 pt-36"></div>
        <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
          Our Services
        </h1>
        <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
          Explore what we offer
        </h2>
        <div className="w-full rounded-xl scale-[.65] max-w-screen-2xl mx-auto ">
          <div className="bg-indusbanner w-full h-0 pb-[40%] sm:pb-[30%] lg:pb-[25%] -my-10 bg-cover bg-center bg-no-repeat rounded-full"></div>
        </div>
        <h2 className="text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-4 text-2xl sm:leading-tight leading-snug text-center">
          At EICE, we offer a comprehensive suite of tech services designed to
          propel your business into the digital future. From cutting-edge app
          development to strategic consultancy, we're here to transform your
          ideas into reality.
        </h2>
      </div>
      <Offers />

      <div className="py-">
        <div id="flagshipServices"></div>
        <div className="bg-zinc-50">
          <div className="py-20 relative font-manrope mx-auto px-1 sm:max-w-7xl w-screen">
            <div>
              <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                Our Flagship Services
              </h1>
              <h2 className="text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-4 text-2xl sm:leading-tight leading-snug text-center">
                Discover EICE's core offerings that drive innovation and
                efficiency across industries. Our flagship services are designed
                to give your business a competitive edge in the digital
                landscape.
              </h2>
            </div>
            <div>
              <div className="grid lg:grid-cols-3 px-4 grid-cols-1 gap-6 pt-12">
                <Link
                  to="/services-digitaltransformation"
                  className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 "
                >
                  <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
                    <div className="w-full h-full items-center justify-start px-2 pb-2">
                      <LuCloudCog size={50} className="text-bloo" />
                    </div>
                    <div>
                      <div className="flex flex-col p-2 text-start justify-end">
                        <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl">
                          DIGITAL TRANSFORMATION
                        </h1>
                        <p className="z-20 font-medium text-blackk/60 sm:text-xl text-lg">
                          Revolutionize your business with EICE's digital
                          transformation services. We help you leverage
                          cutting-edge technologies to streamline operations,
                          enhance customer experiences, and drive growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/services-devops"
                  className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 "
                >
                  <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
                    <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                      <IoIosBuild size={50} className="text-bloo" />
                    </div>
                    <div>
                      <div className="flex flex-col p-2 text-start justify-end ">
                        <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl">
                          DEVOPS
                        </h1>
                        <p className="z-20 font-medium text-blackk/60 sm:text-xl text-lg">
                          Accelerate your software delivery with EICE's DevOps
                          solutions. We integrate development and operations to
                          improve collaboration, increase efficiency, and
                          deliver high-quality software faster.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/services-aiml"
                  className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 "
                >
                  <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
                    <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                      <div className="grid grid-cols-2 gap-0">
                        <TbLetterA size={50} className="text-bloo" />
                        <TbLetterI size={50} className="text-bloo -ml-8" />
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col p-2 text-start">
                        <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl">
                          GENERATIVE AI
                        </h1>
                        <p className="z-20 font-medium text-blackk/60 sm:text-xl text-lg">
                          Harness the power of AI with EICE's generative AI
                          solutions. We develop custom AI models that can create
                          content, generate ideas, and solve complex problems,
                          giving your business a significant competitive
                          advantage.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12 pt-6">
        <div id="emergingTechnologies" className="py-4"></div>
        <div className=" relative font-manrope mx-auto px-1 sm:max-w-7xl w-screen">
          <div>
            <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              Emerging Technologies
            </h1>
            <h2 className="text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-4 text-2xl sm:leading-tight leading-snug text-center">
              Stay ahead of the curve with EICE's expertise in cutting-edge
              technologies. We help businesses leverage the latest innovations
              to create new opportunities and drive unprecedented growth.
            </h2>
            <h2 className="text-blackk font-bold sm:text-4xl text-2xl sm:leading-tight leading-snug text-center"></h2>
          </div>
          <div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
              <Link
                to="/services-aiml"
                className="group cursor-pointer p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 "
              >
                <div className="rounded-full py-2 px-4">
                  <LuBrainCircuit size={60} className="text-bloo" />
                </div>
                <div className="pt-6 h-full text-left">
                  <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl px-4">
                    AI & ML
                  </h1>
                  <p className="font-medium text-blackk/60 sm:text-xl text-lg text-left px-4">
                    Unlock the potential of your data with our AI and Machine
                    Learning solutions. EICE helps you implement intelligent
                    systems that learn and improve over time.
                  </p>
                </div>
              </Link>
              <Link
                to="/services-iot"
                className="group cursor-pointer p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 "
              >
                <div className=" rounded-full py-2 px-4">
                  <GiCircuitry size={60} className="text-bloo" />
                </div>
                <div className="pt-6 h-full ">
                  <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl px-4">
                    INTERNET OF THINGS
                  </h1>
                  <p className="font-medium text-blackk/60 sm:text-xl text-lg text-left px-4">
                    Connect your devices and gather valuable data with EICE's
                    IoT solutions. We help you create smart, interconnected
                    systems that drive efficiency and innovation.
                  </p>
                </div>
              </Link>
              <Link
                to="/services-blockchain"
                className="group cursor-pointer p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 "
              >
                <div className=" rounded-full py-2 px-4">
                  <SiBlockchaindotcom size={60} className="text-bloo" />
                </div>
                <div className="pt-6 h-full text-left">
                  <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl px-4">
                    BLOCKCHAIN DEVELOPMENT
                  </h1>
                  <p className="font-medium text-blackk/60 sm:text-xl text-lg text-left px-4">
                    Enhance security and transparency with EICE's blockchain
                    solutions. We develop decentralized applications and smart
                    contracts tailored to your business needs.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50" id="appDevelopment">
        <div className="py-16 relative font-manrope mx-auto px-1 sm:max-w-7xl w-screen">
          <div>
            <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              App Development Services
            </h1>
            <h2 className="text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-4 text-2xl sm:leading-tight leading-snug text-center">
              From mobile apps to complex enterprise solutions, EICE delivers
              cutting-edge software tailored to your unique business needs. Our
              expert developers use the latest technologies to create powerful,
              user-friendly applications.
            </h2>
            <h2 className="text-blackk font-bold sm:text-4xl text-2xl sm:leading-tight leading-snug text-center"></h2>
          </div>
          <div className="">
            <div className="px-4 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-16">
              <Link
                to="/services-saas"
                className="group cursor-pointer p-8 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200"
              >
                <div className="flex px-4 rounded-full ">
                  <GrCloudSoftware
                    size={60}
                    className=" rounded-full text-bloo"
                  />
                </div>
                <div className="pt-6 h-full text-left">
                  <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl px-4">
                    SAAS DEVELOPMENT
                  </h1>
                  <p className="font-medium text-blackk/60 sm:text-xl text-lg text-left px-4">
                    Transform your software into a scalable service with EICE's
                    SAAS development. We build cloud-based applications that
                    offer flexibility and accessibility to your customers.
                  </p>
                </div>
              </Link>
              <Link
                to="/services-webdevelopment"
                className="group cursor-pointer p-8 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200"
              >
                <div className="flex px-4 rounded-full ">
                  <FaLaptopCode size={60} className=" text-bloo" />
                </div>
                <div className="pt-6 h-full text-left ">
                  <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl px-4">
                    WEB APP DEVELOPMENT
                  </h1>
                  <p className="font-medium text-blackk/60 sm:text-xl text-lg text-left px-4">
                    Create powerful web applications with EICE. We develop
                    responsive, feature-rich web apps that work seamlessly
                    across all devices and platforms.
                  </p>
                </div>
              </Link>
              <Link
                to="/services-chatbot"
                className="group cursor-pointer p-8 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200"
              >
                <div className="flex px-4 rounded-full ">
                  <IoIosChatboxes size={60} className="text-bloo" />
                </div>
                <div className="pt-6 h-full text-left">
                  <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl px-4">
                    CHAT BOT DEVELOPMENT
                  </h1>
                  <p className="font-medium text-blackk/60 sm:text-xl text-lg text-left px-4">
                    Enhance customer service with EICE's chatbot solutions. We
                    create intelligent, conversational AI bots that can handle
                    queries, automate tasks, and improve user engagement.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 pb-8">
        <div>
          <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
            Consultancy Services
          </h1>
        </div>
      </div>
      <div
        id="consultancy"
        className="px-4 pb-12 max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10"
      >
        <Link
          to="/services-techconsultancy"
          className="relative cursor-pointer group "
        >
          <div className="">
            <img
              src={consultancy}
              alt=""
              className="inset-0 object-cover w-full h-full rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 from-30% via-stone-800/95 via-30% to-transparent rounded-lg flex flex-col justify-end p-4"></div>
            <div className="absolute inset-0 flex flex-col gap-6 text-white font-extrabold text-4xl lg:text-6xl text-left p-4 lg:p-8">
              <div className="h-3/4"></div>
              <div className="">
                <FaPeopleArrows
                  size={50}
                  className="text-white lg:hidden pr-2 "
                />
                <FaPeopleArrows
                  size={60}
                  className="text-white hidden lg:block pr-2"
                />
                <div>
                  <h1 className="py-2 text-3xl font-bold">App Consulting</h1>
                  <p className="text-wrap h-32 text-base font-medium lg:text-lg">
                    EICE provides expert guidance on app strategy, development,
                    and optimization. Our consultants help you make informed
                    decisions about technology stack, user experience, and
                    market positioning to ensure your app's success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/services-uiuxconsulting" className="relative">
          <img
            src={uiuxdesign}
            alt=""
            className="inset-0 object-cover w-full h-full rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 from-30% via-stone-800/95 via-30% to-transparent rounded-lg flex flex-col justify-end p-4"></div>
          <div className="absolute inset-0 flex flex-col gap-6 text-white font-extrabold text-4xl lg:text-6xl text-left p-4 lg:p-8">
            <div className="h-3/4"></div>
            <div className="">
              <FaPencilRuler size={50} className="text-white lg:hidden pr-2 " />
              <FaPencilRuler
                size={60}
                className="text-white hidden lg:block pr-2"
              />
              <div>
                <h1 className="py-2 text-3xl font-bold">UI/UX Consulting</h1>
                <p className="text-wrap h-32 text-base font-medium lg:text-lg">
                  EICE offers specialized UI/UX consulting services to enhance
                  your digital products. Our experts provide insights on user
                  interface design and user experience. We help you create
                  ensure your product stands out in the market and delivers
                  exceptional user satisfaction.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div>{/* Technical Services */}</div>
    </div>
  );
}
export default Servmain;
