/* eslint-disable react/display-name */
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// import Withsplashscreen from './Splashcomponents/Withsplashscreen';
import logo from "./assets/logo.svg";

import {
  Routes,
  Route,
  Outlet,
  NavLink,
  Link,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";

import Big from "./Homecomps/Big";
import Offers from "./Homecomps/Offers";
import Solutions from "./Homecomps/Solutions";
import Clientele from "./Homecomps/Clientele";
import Clients from "./Homecomps/Clients";
import Footer from "./Othercomps/Footer";
import Reviews from "./Homecomps/Reviews";
import Casestudies from "./Homecomps/Casestudies";
import Techs from "./Homecomps/Techs";
import Process from "./Homecomps/Process";

import Copyright from "./Othercomps/Copyright";

import Company from "./Aboutcomponents/Company";
import Workflow from "./Aboutcomponents/Workflow";
import Scopes from "./Aboutcomponents/Scopes";

import Cstdmain from "./Cstudies/Cstdmain";
import Relimonitor from "./Cstudies/Relimonitor.jsx";
import EspctQuote from "./Cstudies/EspctQuote.jsx";
import PetroSIM from "./Cstudies/PertroSIM.jsx";
import CityGasAdani from './Cstudies/CityGasAdani.jsx';

import Servmain from "./Servcomps/Servmain";
import Aiml from "./Servcomps/Aiml";
import Cloud from "./Servcomps/Cloud";
import Dataanalytics from "./Servcomps/Dataanalytics";
import Gis from "./Servcomps/Gis";
import Devops from "./Servcomps/Devops";
import Digitrans from "./Servcomps/Digitrans";
import Entpappdev from "./Servcomps/Entpappdev";
import Iot from "./Servcomps/Iot";
import Techconsult from "./Servcomps/Techconsult";

import Blockchain from "./Servcomps/Blockchain.jsx";
import Webdeveopment from "./Servcomps/Webdevelopment.jsx";
import Softwaretesting from "./Servcomps/Softwaretesting.jsx";
import UiUx from "./Servcomps/UiUx.jsx";
import Android from './Servcomps/Android';


import Indusmain from "./Allindus/Indusmain";
import Healthcare from "./Allindus/Healthcare";
import Financial from "./Allindus/Financial";
import Educational from "./Allindus/Educational";
import Digitalmedia from "./Allindus/Digitalmedia";
import Logistics from "./Allindus/Logistics.jsx";
import Enterprise from "./Allindus/Enterprise.jsx";
import Legal from "./Allindus/Legal.jsx";
import Oilandgas from "./Allindus/Oilandgas.jsx";


import { GoLaw } from "react-icons/go";
import { FaBusinessTime, FaOilCan, FaSyringe } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import { SiEducative } from "react-icons/si";
import { BiPencil } from "react-icons/bi";
import { MdPermMedia } from "react-icons/md";
import { BsTruck } from "react-icons/bs";

import Resourcesmain from './Othercomps/Resourcesmain';

import Careerform from "./Othercomps/Careerform";
import Contactform from "./Othercomps/Contactform";

import PropTypes from "prop-types";
import clsx from "clsx";
import { Menu as BaseMenu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";
import { useTheme } from "@mui/system";
import menu from "./assets/menu.svg";

import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiPieChart,
} from "react-icons/fi";
import {
  FaAndroid,
  FaAppStoreIos,
  FaLaptopCode,
  FaPeopleArrows,
} from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { FaComputer, FaFileCircleCheck } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { MdOutlineAppRegistration } from "react-icons/md";
import { CiMobile1, CiUser, CiCircleQuestion } from "react-icons/ci";
import { IoIosBuild } from "react-icons/io";
import { LuBrainCircuit, LuCircuitBoard } from "react-icons/lu";
import { SiBlockchaindotcom } from "react-icons/si";

// import Separator from './Othercomps/Separator';
// import Separatorr from './Othercomps/Separatorr';
// import Separatorrr from './Othercomps/Separatorrr';

import ScrollToTop from "./ScrollToTop.jsx";
import Talktous from "./Othercomps/Talktous.jsx";
import Saas from "./Servcomps/Saas.jsx";
import Chatbot from './Servcomps/Chatbot.jsx';

const App = () => {
  return (
    <HashRouter>
      <NavLayout />
      <ScrollToTop />
      <Routes>
        {/* <Route element={<NavLayout />}> */}
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Industries" element={<Allindus />} />
        <Route path="/Industries-financial" element={<Financial />} />
        <Route path="/Industries-education" element={<Educational />} />
        <Route path="/Industries-digitalmedia" element={<Digitalmedia />} />
        <Route path="/Industries-healthcare" element={<Healthcare />} />
        <Route path="/Industries-logistics" element={<Logistics />} />
        <Route path="/Industries-enterprise" element={<Enterprise />} />
        <Route path="/Industries-legal" element={<Legal />} />
        <Route path="/Industries-oilandgas" element={<Oilandgas />} />
        <Route path="Services-digitaltransformation" element={<Digitrans />} />
        <Route path="Services-aiml" element={<Aiml />} />
        <Route path="Services-cloud" element={<Cloud />} />
        <Route path="Services-dataanalytics" element={<Dataanalytics />} />
        <Route path="Services-enterpriseappdev" element={<Entpappdev />} />
        <Route path="Services-gis" element={<Gis />} />
        <Route path="Services-devops" element={<Devops />} />
        <Route path="Services-iot" element={<Iot />} />
        <Route path="Services-techconsultancy" element={<Techconsult />} />
        <Route path="Services-saas" element={<Saas />} />
        <Route path="Services-android" element={<Android />} />
        <Route path="Services-blockchain" element={<Blockchain />} />
        <Route path="Services-webdevelopment" element={<Webdeveopment />} />
        <Route path="Services-softwaretesting" element={<Softwaretesting />} />
        <Route path="Services-uiuxconsulting" element={<UiUx />} />
        <Route path="Services-chatbot" element={<Chatbot />} />
        <Route path="Casestudies" element={<Cstudiescomp />} />
        <Route path="Casestudy-Relimonitor" element={<Relimonitor />} />
        <Route path="Casestudy-PetroSIM" element={<PetroSIM />} />
        <Route path="Casestudy-EspctQuote" element={<EspctQuote />} />
        <Route path="Casestudy-CityGasAdani" element={<CityGasAdani />} />

        <Route
          path="*"
          element={
            <div className="font-manrope font-base text-3xl">
              <p>{`There's nothing here: 404`}</p>
            </div>
          }
        />
        {/* </Route> */}
      </Routes>
    </HashRouter>
  );
};

const NavLayout = () => {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <>
      <div className="relative overflow-visible">
        {/* laptop navbar */}
        <nav
          className="overflow-visible fixed w-full top-0 left-0 z-30 shadow-md shadow-blackk/20 font-manrope bg-white font-semibold items-center justify-center 
             2xl:block xl:block hidden"
        >
          <div className="grid grid-cols-3 max-w-7xl mx-auto items-center justify-center text-lg 2xl:scale-100 xl:scale-90 scale-[.65]">
            <div className="cursor-pointer px-4">
              <Link to="/">
                <img src={logo} alt="" className="h-8 w-auto" />
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center overflow-visible">
              <NavLink to="/" className="px-6 py-1">
                <div className="group hover:text-bloo transition duration-300 ease-in-out">
                  <div>HOME</div>
                  <div className="bg-bloo h-0.5 rounded-full w-0 group-hover:w-full transition-width duration-300"></div>
                </div>
              </NavLink>
              <div className="relative px-2">
                <Tabs className="absolute" />
              </div>
            </div>
            <div className="justify-self-end px-4">
              <NavLink to="/Contact" className="px-4 py-1">
                <div className="transition duration-300 ease-in-out">
                  <Link to="/Contact">
                    <button className="flex flex-row items-center justify-center bg-blend-overlay transition duration-200 py-2 w-28 hover:bg-blue-900/90 hover:shadow-md hover:shadow-blue-900/30 bg-blue-900 text-white text-sm font-semibold  px-3 rounded">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="bg-black"></div>

        {/* phone navbar */}
        <nav className="2xl:hidden xl:hidden flex p-4 fixed w-full top-0 left-0 z-30 shadow-md shadow-blackk/20 font-manrope bg-white font-semibold items-center overflow-hidden">
          <div className="curosr-pointer pl-3">
            <Link to="/">
              {/* <h1 className="text-3xl w-[120px] text-start font-extrabold text-blue-950">E<span className="text-bloo">IC</span>E</h1> */}
              <img src={logo} alt="" className="scale-[1.15]" />
            </Link>
          </div>
          <div className="w-full">
            <div className="flex flex-row items-center justify-end">
              <Dropdown>
                <MenuButton className="scale-[0.6] -mr-1">
                  <div>
                    <span>
                      <img src={menu} alt="" className="" />
                    </span>
                  </div>
                </MenuButton>
                <Menu className="font-semibold z-50">
                  <MenuItem onClick={createHandleMenuClick("Home")}>
                    <Link
                      className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]"
                      to="/"
                    >
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={createHandleMenuClick("About Us")}>
                    <Link
                      className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]"
                      to="/about"
                    >
                      About Us
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={createHandleMenuClick("Services")}>
                    <Link
                      className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]"
                      to="/services"
                    >
                      Services
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={createHandleMenuClick("Services")}>
                    <Link
                      className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]"
                      to="/INDUSTRIES"
                    >
                      Industries
                    </Link>{" "}
                  </MenuItem>
                  <MenuItem onClick={createHandleMenuClick("Contact Us")}>
                    {" "}
                    <Link
                      className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]"
                      to="/resources"
                    >
                      Resources
                    </Link>{" "}
                  </MenuItem>
                  {/* <MenuItem onClick={createHandleMenuClick('Contact Us')}> <a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/careers">Careers</a> </MenuItem> */}
                  <MenuItem onClick={createHandleMenuClick("Resources")}>
                    {" "}
                    <Link
                      className="w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]"
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </MenuItem>
                </Menu>
              </Dropdown>
            </div>
          </div>
        </nav>

        <main
          className=" 
                       2xl:mt-28 2xl:w-full 2xl:scale-100 w-screen scale-100"
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative overflow-visible flex h-fit gap-4"
    >
      {TABS.map((t) => {
        return (
          <Tab
            className=""
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence className="">
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`h-full flex items-center gap-1 rounded-full px-3 py-1.5 text-md transition-colors ${
        selected === tab ? "" : ""
      }`}
    >
      <div className="group overflow-visible hover:text-bloo  transition duration-300 ease-in-out">
        <div className="flex flex-row items-center justify-center">
          <Link className="flex items-center justify-center" to={`${children}`}>
            <span className="pr-2">{children}</span>
            <FiChevronDown
              className={`transition-transform ${
                selected === tab ? "rotate-180" : ""
              }`}
            />
          </Link>
        </div>
        <div className="bg-bloo h-0.5 rounded-full w-0 group-hover:w-full transition-width duration-300"></div>
      </div>
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      // style={'z-offset:1000'}
      // give width down here for standard sizing, 450px was older one, rn 729
      className="absolute overflow-visible z-50 left-0 transform -translate-x-1/2 top-16 w-[90vw] max-w-[790px] rounded-lg border border-blackk/50 shadow-md shadow-blackk/20 bg-white p-4"
      // className="absolute overflow-visible z-50 left-0 top-16 w-[729px] rounded-lg border border-blackk/50 shadow-md shadow-blackk/20 bg-white p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute overflow-visible -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute overflow-visible left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl bg-bloo"
    />
  );
};

const Aboutus = () => {
  return (
    <div className="grid grid-cols-3 p-1 gap-4">
      <div>
        <div className="h-full justify-center items-center">
          <div className="bg-bloo w-full h-full rounded-md">
            <div className="text-white grid grid-cols-2 p-1">
              <div className="p-2">
                <h1>Since</h1>
                <h2 className="font-extrabold text-3xl">2010</h2>
              </div>
              <div className="p-2">
                <h1>Projects</h1>
                <h2 className="font-extrabold text-3xl">150+</h2>
              </div>
              <div className="p-2">
                <h1>Clients</h1>
                <h2 className="font-extrabold text-3xl">60+</h2>
              </div>
              <div className="p-2">
                <h1>Countries</h1>
                <h2 className="font-extrabold text-3xl">10+</h2>
              </div>
            </div>
            <div className="p-1 text-white text-sm px-4">
              <h1>
                Our experience in more than 150 projects accross 10+ countries
                has helped us bring immediate impact Learn more about us and
                contact u
              </h1>
            </div>
            <div className="p-3">
              <Link
                to="/contact"
                className="py-1 px-2 cursor-pointer rounded-full bg-white text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <div className=" flex flex-col items-center justify-center">
            <div className="flex flex-col text-justify gap-6 text-wrap">
              <div className="w-full">
                <h1>Who We Are</h1>
                <p className="text-wrap text-justify font-semibold text-blackk/60 text-sm ">
                  We are a global IT services and consulting firm with over 200
                  professional technologists, specializing in innovative
                  strategies that bridge technology and business solutions.
                </p>
              </div>
              <div className="w-full">
                <h1>What We Do</h1>
                <p className="text-wrap text-justify font-semibold text-blackk/60 text-sm">
                  We partner with global leaders and startups to turn ideas into
                  reality through custom software and integrated models,
                  delivering cutting-edge IT solutions.
                </p>
              </div>
              <div className="w-full">
                Mission and Vision
                <p className="text-wrap text-justify font-semibold text-blackk/60 text-sm">
                  {" "}
                  Our mission is to ensure client satisfaction through
                  innovative technology solutions that drive growth. Our vision
                  is to be a global leader in IT services and software
                  development.
                </p>
              </div>
            </div>
            <div>
              <Link to="/About">
                <button className="mt-4 flex items-center gap-1 text-md hover:underline text-bloo">
                  <span>Learn more</span>
                  <FiArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <div className="p-1">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="h-full justify-center items-center">
            <div className="bg-bloo w-full h-full rounded-md">
              <div className="text-white grid grid-cols-2 p-1">
                <div className="p-2">
                  <h1>Since</h1>
                  <h2 className="font-extrabold text-3xl">2010</h2>
                </div>
                <div className="p-2">
                  <h1>Projects</h1>
                  <h2 className="font-extrabold text-3xl">150+</h2>
                </div>
                <div className="p-2">
                  <h1>Clients</h1>
                  <h2 className="font-extrabold text-3xl">60+</h2>
                </div>
                <div className="p-2">
                  <h1>Countries</h1>
                  <h2 className="font-extrabold text-3xl">10+</h2>
                </div>
              </div>
              <div className="p-1 text-white text-sm px-4">
                <h1>
                  Our experience in more than 150 projects accross 10+ countries
                  has helped us bring immediate impact Explore what we offer in
                  the IT sector and how we transform our clients' businesses
                  helping them grow to newer heights
                </h1>
              </div>
              <div className="p-3">
                <Link
                  to="/contact"
                  className="py-1 px-2 cursor-pointer rounded-full bg-white text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-8 items-start justify-start">
            <Link
              to="/Services?scrollTo=appDevelopment"
              className="group cursor-pointer  py-1 text-blackk/60 transition-colors"
            >
              <MdOutlineAppRegistration size={40} className="mb-2 text-bloo" />
              <div className="text-md text-left font-bold text-blackk">
                App Development
              </div>

              <div className="h-0.5 rounded-full group-hover:w-full w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
              <h1 className="text-sm pt-1">
                Leveraging 15+ years of expertise, EICE has delivered over 150
                innovative app projects across 10+ countries, enhancing digital
                experiences for 60+ clients.
              </h1>
            </Link>
            <Link
              to="/Services?scrollTo=emergingTechnologies"
              className="group cursor-pointer py-1 text-blackk/60 transition-colors "
            >
              <div className="">
                <LuCircuitBoard size={40} className="mb-2 text-bloo" />
              </div>
              <div className="text-md text-left font-bold text-blackk">
                Emerginng Technologies
              </div>

              <div className="h-0.5 rounded-full group-hover:w-full w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
              <h1 className="text-sm pt-1">
                EICE pioneers in integrating emerging technologies, backed by a
                wealth of experience and a global reach of over 10 countries,
                transforming industries and driving growth.
              </h1>
            </Link>
            <Link
              to="/Services?scrollTo=consultancy"
              className="group cursor-pointer  pt-2 text-blackk/60 transition-colors "
            >
              <FaPeopleArrows size={40} className=" mb-2 text-bloo" />
              <div className="text-md text-left font-bold text-blackk">
                Consultancy Services
              </div>

              <div className="h-0.5 rounded-full group-hover:w-full w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
              <h1 className="text-sm pt-1">
                Our consultancy services at EICE draw on 15+ years of industry
                insight, assisting 60+ clients in successfully navigating
                complex projects across 10+ countries.
              </h1>
            </Link>
            <Link
              to="/Services?scrollTo=flagshipServices"
              className="group cursor-pointer  py-1 text-blackk/60 transition-colors "
            >
              <IoIosBuild size={40} className=" mb-2 text-bloo" />
              <div className="text-md text-left font-bold text-blackk">
                Flagship Services
              </div>

              <div className="h-0.5 rounded-full group-hover:w-full w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
              <h1 className="text-sm pt-1">
                EICE provides robust technical services with a proven track
                record of 150+ projects, ensuring operational excellence for
                clients in over 10 countries.
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurResources = () => {
  return (
    <div className="p-1 grid-cols-2 grid gap-4">
      <Link
        to="/Casestudies"
        className="group cursor-pointer grid grid-rows-3 order-last  rounded-md"
      >
        <div className="row-span-2 w-full h-full bg-laptopcstudy bg-contain bg-no-repeat saturate-0 group-hover:saturate-100 transition duration-500"></div>
        <div className="">
          <h1 className="text-center">Case Studies</h1>
          <h1 className="w-0 group-hover:w-1/2 transition duration-500 mx-auto group-hover:bg-bloo h-0.5 bg-white"></h1>
          <h1 className="text-sm pt-2 text-blackk/50">
            Take a look at our track record and explore our detailed case
            studies and learn how we transform other people's businesses.
          </h1>
        </div>
      </Link>
      <div>
        <div className="h-full justify-center items-center">
          <div className="bg-bloo w-full h-full rounded-md">
            <div className="text-white grid grid-cols-2 p-1">
              <div className="p-2">
                <h1>Since</h1>
                <h2 className="font-extrabold text-3xl">2010</h2>
              </div>
              <div className="p-2">
                <h1>Projects</h1>
                <h2 className="font-extrabold text-3xl">150+</h2>
              </div>
              <div className="p-2">
                <h1>Clients</h1>
                <h2 className="font-extrabold text-3xl">60+</h2>
              </div>
              <div className="p-2">
                <h1>Countries</h1>
                <h2 className="font-extrabold text-3xl">10+</h2>
              </div>
            </div>
            <div className="p-1 text-white text-sm px-4">
              <h1>
                Our experience in more than 150 projects accross 10+ countries
                has helped us bring immediate impact Explore what we offer in
                the IT sector and how we transform our clients' businesses
                helping them grow to newer heights
              </h1>
            </div>
            <div className="p-3">
              <Link
                to="/Contact"
                className="py-1 px-2 cursor-pointer rounded-full bg-white text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurIndustries = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="">
        <div className="bg-bloo w-full h-full rounded-md">
          <div className="text-white grid grid-cols-2 p-1">
            <div className="p-2">
              <h1>Since</h1>
              <h2 className="font-extrabold text-3xl">2010</h2>
            </div>
            <div className="p-2">
              <h1>Projects</h1>
              <h2 className="font-extrabold text-3xl">150+</h2>
            </div>
            <div className="p-2">
              <h1>Clients</h1>
              <h2 className="font-extrabold text-3xl">60+</h2>
            </div>
            <div className="p-2">
              <h1>Countries</h1>
              <h2 className="font-extrabold text-3xl">10+</h2>
            </div>
          </div>
          <div className="p-1 text-white text-sm px-4">
            <h1>
              Our experience in more than 150 projects accross 10+ countries has
              helped us bring immediate impact
            </h1>
          </div>
          <div className="p-3">
            <Link
              to="/contact"
              className="py-1 px-2 cursor-pointer rounded-full bg-white text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-8 p-6">
          <div className="group flex flex-col gap-1">
            <Link to="/Industries-Oilandgas" className="flex flex-row gap-4 items-center">
              <div className="icon-wrapper">
                <FaOilCan
                  size={30}
                  className="group-hover:text-bloo transition duration-300"
                />
              </div>
              <span className="group-hover:text-bloo transition duration-300">
                Oil and Gas
              </span>
            </Link>
            <div className="h-0.5 rounded-full group-hover:w-4/5 w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
          </div>
          <div className="group flex flex-col gap-1">
            <Link
              to="/Industries-Healthcare"
              className="flex flex-row gap-4 items-center"
            >
              <div className="icon-wrapper">
                <FaSyringe
                  size={30}
                  className="group-hover:text-bloo transition duration-300"
                />
              </div>
              <span className="group-hover:text-bloo transition duration-300">
                Healthcare
              </span>
            </Link>
            <div className="h-0.5 rounded-full group-hover:w-4/5 w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
          </div>
          <div className="group flex flex-col gap-1">
            <Link to="/Industries-Legal" className="flex flex-row gap-4 items-center">
              <div className="icon-wrapper">
                <GoLaw
                  size={30}
                  className="group-hover:text-bloo transition duration-300"
                />
              </div>
              <span className="group-hover:text-bloo transition duration-300">
                Legal
              </span>
            </Link>
            <div className="h-0.5 rounded-full group-hover:w-4/5 w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
          </div>
          <div className="group flex flex-col gap-1">
            <Link to="/Industries-Education" className="flex flex-row gap-4 items-center">
              <div className="icon-wrapper">
                <BiPencil
                  size={30}
                  className="group-hover:text-bloo transition duration-300"
                />
              </div>
              <span className="group-hover:text-bloo transition duration-300">
                Education
              </span>
            </Link>
            <div className="h-0.5 rounded-full group-hover:w-4/5 w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
          </div>
          <div className="group flex flex-col gap-1">
            <Link to="/Industries-Financial" className="flex flex-row gap-4 items-center">
              <div className="icon-wrapper">
                <IoIosCash
                  size={30}
                  className="group-hover:text-bloo transition duration-300"
                />
              </div>
              <span className="group-hover:text-bloo transition duration-300">
                Financial
              </span>
            </Link>
            <div className="h-0.5 rounded-full group-hover:w-4/5 w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
          </div>
          <div className="group flex flex-col gap-1">
            <Link to="/Industries-Digitalmedia" className="flex flex-row gap-4 items-center">
              <div className="icon-wrapper">
                <MdPermMedia
                  size={30}
                  className="group-hover:text-bloo transition duration-300"
                />
              </div>
              <span className="group-hover:text-bloo transition duration-300">
                Digital Media
              </span>
            </Link>
            <div className="h-0.5 rounded-full group-hover:w-4/5 w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
          </div>
          <div className="group flex flex-col gap-1">
            <Link to="/Industries-Logistics" className="flex flex-row gap-4 items-center">
              <div className="icon-wrapper">
                <BsTruck
                  size={30}
                  className="group-hover:text-bloo transition duration-300"
                />
              </div>
              <span className="group-hover:text-bloo transition duration-300">
                Logistics
              </span>
            </Link>
            <div className="h-0.5 rounded-full group-hover:w-4/5 w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
          </div>
          <div className="group flex flex-col gap-1">
            <Link to="/Industries-Enterprise" className="flex flex-row gap-4 items-center">
              <div className="icon-wrapper">
                <FaBusinessTime
                  size={30}
                  className="group-hover:text-bloo transition duration-300"
                />
              </div>
              <span className="group-hover:text-bloo transition duration-300">
                Enterprise
              </span>
            </Link>
            <div className="h-0.5 rounded-full group-hover:w-4/5 w-0 group-hover:bg-bloo bg-white transition-width duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: "ABOUT",
    Component: Aboutus,
  },
  {
    title: "SERVICES",
    Component: OurServices,
  },
  {
    title: "INDUSTRIES",
    Component: OurIndustries,
  },
  {
    title: "RESOURCES",
    Component: OurResources,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

const Home = () => {
  return (
    <>
      {/* <div className="w-[10000px] h-[10000px] bg-bloo/15 -rotate-45 absolute  blur-[300px]">     </div> */}
      {/* <div className="bg-gradient-to-b from-bloo/[.01] via-bloo/[.06] to-bloo/[.01]"> */}

      {/* <Temp /> */}
      <Big />
      <Clients />

      {/* <Separator /> */}
      <div className="flex flex-col gap-0.5 items-center justify-center xl:pt-16 pt-12 w-screen px-2 mb-4 sm:mb-8 md:mb-12">
        <p className="text-bloo font-bold text-xl sm:text-xl lg:text-2xl  py-2">
          Core Services
        </p>
        <h2 className="text-blackk font-bold text-center text-2xl sm:text-3xl md:text-3xl lg:text-[32px] max-w-4xl py-1">
          Unlocking Innovation: <br className="sm:hidden" />
          Explore Our Suite of Solutions for Your Digital Evolution
        </h2>
      </div>
      <div className="mx-auto px-2">
        <Offers />
      </div>
      {/* <Separatorr /> */}
      <Techs />
      <Solutions />
      {/* <Separatorrr /> */}
      <Casestudies />
      <Reviews />
      <Clientele />
      <Footer />
      <Copyright />
    </>
  );
};

const About = () => {
  return (
    <>
      <Company />
      <Workflow />
      <Scopes />
      <Footer />
      <Copyright />
    </>
  );
};

const Services = () => {
  return (
    <>
      <Servmain />
      <Footer />
      <Copyright />
    </>
  );
};

const Careers = () => {
  return (
    <>
      <h2>Careers Page</h2>
      <Careerform />
      <Footer />
      <Copyright />
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Contactform />
      <Footer />
      <Copyright />
    </>
  );
};

const Resources = () => {
  return (
    <>
      <Resourcesmain />
      <Footer />
      <Copyright />
    </>
  );
};

const Cstudiescomp = () => {
  return (
    <>
      <Cstdmain />
      <Footer />
      <Copyright />
    </>
  );
};

const Allindus = () => {
  return (
    <>
      <Indusmain />
      <Footer />
      <Copyright />
    </>
  );
};

const resolveSlotProps = (fn, args) =>
  typeof fn === "function" ? fn(args) : fn;

const Menu = React.forwardRef((props, ref) => {
  return (
    <BaseMenu
      ref={ref}
      {...props}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(resolvedSlotProps?.className),
          };
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              "w-screen h-screen text-2xl box-border font-sans p-1.5 my-3 mx-0 rounded-xl overflow-auto outline-0 bg-white  border border-solid border-slate-200 text-slate-900 min-w-listbox shadow-md",
              resolvedSlotProps?.className
            ),
          };
        },
      }}
    />
  );
});

Menu.propTypes = {
  /**
   * The props used for each slot inside the Menu.
   * @default {}
   */
  slotProps: PropTypes.shape({
    listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};

const MenuButton = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseMenuButton
      ref={ref}
      className={clsx(
        "cursor-pointer text-sm font-sans box-border rounded-lg font-semibold px-4 py-2 bg-bloo text-white",
        className
      )}
      {...other}
    />
  );
});

MenuButton.propTypes = {
  /**
   * Class name applied to the root element.
   */
  className: PropTypes.string,
};

// eslint-disable-next-line react/display-name
const MenuItem = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseMenuItem
      ref={ref}
      className={clsx(
        "list-none pt-2 pb-2 mt-2 grid rounded-lg cursor-default select-none last-of-type:border-b-0 disabled:text-slate-400  disabled:hover:text-slate-400",
        className
      )}
      {...other}
    />
  );
});

MenuItem.propTypes = {
  className: PropTypes.string,
};

export default App;
