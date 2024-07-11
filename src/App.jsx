/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// import Withsplashscreen from './Splashcomponents/Withsplashscreen';
import logo from './assets/logo.svg';


import {Routes, Route, Outlet, NavLink, Link, BrowserRouter } from 'react-router-dom';

import Big from './Homecomps/Big';
import Offers from './Homecomps/Offers';
import Solutions from './Homecomps/Solutions';
import Clientele from './Homecomps/Clientele';
import Clients from './Homecomps/Clients';
import Footer from './Othercomps/Footer';
import Reviews from './Homecomps/Reviews';
import Casestudies from './Homecomps/Casestudies';
import Techs from './Homecomps/Techs';
import Process from './Homecomps/Process';

import Copyright from './Othercomps/Copyright';

import Company from './Aboutcomponents/Company';
import Workflow from './Aboutcomponents/Workflow';
import Scopes from './Aboutcomponents/Scopes';

import Cstdmain from './Cstudies/Cstdmain';
import AutoOne from './Cstudies/AutoOne';
import AutoTwo from './Cstudies/AutoTwo';
import AutoThree from './Cstudies/AutoThree';
import AutoFour from './Cstudies/AutoFour';

import Servmain from './Servcomps/Servmain'; 
import Aiml from './Servcomps/Aiml';
import Cloud from './Servcomps/Cloud';
import Dataanalytics from './Servcomps/Dataanalytics';
import Gis from './Servcomps/Gis';
import Devops from './Servcomps/Devops';
import Digitrans from './Servcomps/Digitrans';
import Entpappdev from './Servcomps/Entpappdev';
import Iot from './Servcomps/Iot';
import Techconsult from './Servcomps/Techconsult';
import Reactnative from './Servcomps/Reactnative';
import Reactservice from './Servcomps/Reactservice';
import Flutter from './Servcomps/Flutter';
import Ios from './Servcomps/Ios';
import Android from './Servcomps/Android';
import Kotlin from './Servcomps/Kotlin';
import Ionic from './Servcomps/Ionic';
import Objectivec from './Servcomps/Objectivec';
import Swift from './Servcomps/Swift';
import Vue from './Servcomps/Vue';
import Angular from './Servcomps/Angular';
import Jquery from './Servcomps/Jquery';
import Typescript from './Servcomps/Typescript';
import Php from './Servcomps/Php';
import Django from './Servcomps/Django';
import Oracle from './Servcomps/Oracle';
import Apache from './Servcomps/Apache';
import Mongodb from './Servcomps/Mongodb';
import Dynamo from './Servcomps/Dynamo';
import Postgresql from './Servcomps/Postgresql';
import Mysql from './Servcomps/Mysql';
import Rubyonrails from './Servcomps/Rubyonrails';
import Aspdotnet from './Servcomps/Aspdotnet';
import Express from './Servcomps/Express';
import Laravel from './Servcomps/Laravel';
import Docker from './Servcomps/Docker';
import Firebase from './Servcomps/Firebase';
import Nodejs from './Servcomps/Nodejs';
import Git from './Servcomps/Git';
import Kubernetes from './Servcomps/Kubernetes';
import Jira from './Servcomps/Jira';
import Aws from './Servcomps/Aws';
import Azure from './Servcomps/Azure';
import Ansible from './Servcomps/Ansible';


import Indusmain from './Allindus/Indusmain';
import Healthcare from './Allindus/Healthcare';
import Financial from './Allindus/Financial';
import Educational from './Allindus/Educational';
import Digitalmedia from './Allindus/Digitalmedia';

import Careerform from './Othercomps/Careerform';
import Contactform from './Othercomps/Contactform';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Menu as BaseMenu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
import { useTheme } from '@mui/system';
import menu from "./assets/menu.svg"

import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiPieChart,
} from "react-icons/fi";
import { FaAndroid, FaAppStoreIos, FaLaptopCode, FaPeopleArrows } from "react-icons/fa";
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

import ScrollToTop from './ScrollToTop.jsx';
import Talktous from './Othercomps/Talktous.jsx';
const App = () => {
  return (
    <BrowserRouter>
    <NavLayout/>
    <ScrollToTop />
      <Routes>
      {/* <Route element={<NavLayout />}> */}
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services  />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/INDUSTRIES" element={<Allindus />} />
        <Route path="/industries-financial" element={<Financial />} />
        <Route path="/industries-education" element={<Educational />} />
        <Route path="/industries-digitalmedia" element={<Digitalmedia />} />
        <Route path="/industries-healthcare" element={<Healthcare />} />
        <Route path="services-digitaltransformation" element={<Digitrans />} />
        <Route path="services-aiml" element={<Aiml />} />
        <Route path="services-cloud" element={<Cloud />} />
        <Route path="services-dataanalytics" element={<Dataanalytics />} />
        <Route path="services-enterpriseappdev" element={<Entpappdev />} />
        <Route path="services-gis" element={<Gis />} />
        <Route path="services-devops" element={<Devops />} />
        <Route path="services-iot" element={<Iot />} />
        <Route path="services-techconsultancy" element={<Techconsult />} />
        <Route path="services-android" element={<Android />} />
        <Route path="services-ios" element={<Ios />} />
        <Route path="services-flutter" element={<Flutter />} />
        <Route path="services-swift" element={<Swift />} />
        <Route path="services-ionic" element={<Ionic />} />
        <Route path="services-kotlin" element={<Kotlin />} />
        <Route path="services-objectivec" element={<Objectivec />} />
        <Route path="services-react" element={<Reactservice />} />
        <Route path="services-reactnative" element={<Reactnative />} />
        <Route path="services-vue" element={<Vue />} />
        <Route path="services-Angular" element={<Angular />} />
        <Route path="services-jquery" element={<Jquery />} />
        <Route path="services-php" element={<Php />} />
        <Route path="services-typescript" element={<Typescript />} />
        <Route path="services-mysql" element={<Mysql />} />
        <Route path="services-postgresql" element={<Postgresql />} />
        <Route path="services-mongodb" element={<Mongodb />} />
        <Route path="services-django" element={<Django />} />
        <Route path="services-apache" element={<Apache />} />
        <Route path="services-oracle" element={<Oracle />} />
        <Route path="services-dynamo" element={<Dynamo />} />
        <Route path="services-Rubyonrails" element={<Rubyonrails />} />
        <Route path="services-Aspdotnet" element={<Aspdotnet />} />
        <Route path="services-Express" element={<Express />} />
        <Route path="services-Laravel" element={<Laravel />} />
        <Route path="services-Docker" element={<Docker />} />
        <Route path="services-Firebase" element={<Firebase />} />
        <Route path="services-Nodejs" element={<Nodejs />} />
        <Route path="services-Git" element={<Git />} />
        <Route path="services-kubernetes" element={<Kubernetes />} />
        <Route path="services-jira" element={<Jira />} />
        <Route path="services-ansible" element={<Ansible />} />
        <Route path="services-azure" element={<Azure />} />
        <Route path="services-aws" element={<Aws />} />
        <Route path="casestudies" element={<Cstudiescomp />} />
        <Route path="resources/casestudies/AutoOne" element={<AutoOne />} />
        <Route path="resources/casestudies/AutoTwo" element={<AutoTwo />} />
        <Route path="resources/casestudies/AutoThree" element={<AutoThree />} />
        <Route path="resources/casestudies/AutoFour" element={<AutoFour />} />
        <Route path="*" element={<div className='font-manrope font-base text-3xl'><p>{`There's nothing here: 404`}</p></div>} />
      {/* </Route> */}
    </Routes>
    </BrowserRouter>
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
      <div className='relative overflow-hidden'>
        {/* laptop navbar */}
        <nav
  className='overflow-visible fixed w-full top-0 left-0 z-30 shadow-md shadow-blackk/20 font-manrope bg-white font-semibold items-center justify-center 
             2xl:block xl:block hidden'
>
  <div className='grid grid-cols-3 items-center justify-center text-lg 2xl:scale-100 xl:scale-90 scale-[.65]'>
    <div className='cursor-pointer justify-self-end pr-52'>
      <Link to="/">
        <img src={logo} alt="" className='h-8 w-auto'/>
      </Link>
    </div>
    <div className='flex flex-row items-center justify-center overflow-visible'>
      <NavLink to="/" className="px-4 py-1">
        <div className='group hover:text-bloo transition duration-300 ease-in-out'>
          <div>HOME</div>
          <div className='bg-bloo h-0.5 rounded-full w-0 group-hover:w-full transition-width duration-300'></div>
        </div>
      </NavLink>
      <div className='relative px-2'>
        <Tabs className='absolute' />
      </div>
    </div>
    <div className='justify-self-start pl-48'>
      <NavLink to="/contact" className="px-4 py-1">
        <div className='transition duration-300 ease-in-out'>
          <Link to="/contact">
            <button className="flex flex-row items-center justify-center bg-blend-overlay transition duration-200 h-10 w-28 hover:bg-blue-900/90 hover:shadow-md hover:shadow-bloo/30 bg-blue-900 text-white text-sm font-semibold py-1 px-3 rounded"> 
              Contact Us
            </button>
          </Link>
        </div>
      </NavLink>
    </div>
  </div>
</nav>
      <div className='bg-black'></div>

      {/* phone navbar */}
      <nav className='2xl:hidden xl:hidden  flex p-4 fixed w-full top-0 left-0 z-30 shadow-md shadow-blackk/20 font-manrope bg-white font-semibold items-center overflow-hidden'>
        <div className='curosr-pointer pl-3'>
          <Link to="/">
            {/* <h1 className="text-3xl w-[120px] text-start font-extrabold text-blue-950">E<span className="text-bloo">IC</span>E</h1> */}
            <img src={logo} alt="" className='scale-[1.15]' />
          </Link>
        </div>  
        <div className='w-full'>
          <div className='flex flex-row items-center justify-end'>
            <Dropdown>
              <MenuButton className='scale-[0.6] -mr-1'>
                <div ><span><img src={menu} alt="" className='' /></span></div>
              </MenuButton>
              <Menu className='font-semibold z-50'>
                <MenuItem onClick={createHandleMenuClick('Home')}><Link className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' to="/">Home</Link></MenuItem>
                <MenuItem onClick={createHandleMenuClick('About Us')}><Link className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' to='/about'>About Us</Link></MenuItem>
                <MenuItem onClick={createHandleMenuClick('Services')}><Link className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' to="/services">Services</Link></MenuItem>
                <MenuItem onClick={createHandleMenuClick('Services')}><Link className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' to="/INDUSTRIES">Industries</Link> </MenuItem>
                <MenuItem onClick={createHandleMenuClick('Contact Us')}> <Link className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' to="/resources">Resources</Link> </MenuItem>
                {/* <MenuItem onClick={createHandleMenuClick('Contact Us')}> <a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/careers">Careers</a> </MenuItem> */}
                <MenuItem onClick={createHandleMenuClick('Resources')}> <Link className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' to="/contact">Contact Us</Link></MenuItem>
              </Menu>
            </Dropdown>
          </div>
        </div>
      </nav>

      <main className=' 
                       2xl:mt-28 2xl:w-full 2xl:scale-100 w-screen scale-100'>
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
            className=''
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence className=''>
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
        selected === tab
          ? ""
          : ""
      }`}
    >
      <div className='group overflow-visible hover:text-bloo  transition duration-300 ease-in-out'>
        <div className='flex flex-row items-center justify-center'>
          <Link className='flex items-center justify-center' to={`${children}`}>
            <span className='pr-2'>{children}</span>
            <FiChevronDown 
                className={`transition-transform ${
                  selected === tab ? "rotate-180" : ""
                }`}
              />
          </Link>
        </div>
        <div className='bg-bloo h-0.5 rounded-full w-0 group-hover:w-full transition-width duration-300'></div>  
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
      className="absolute overflow-visible z-50 left-0 transform -translate-x-1/2 top-16 w-[90vw] max-w-[729px] rounded-lg border border-blackk/50 shadow-md shadow-blackk/20 bg-white p-4"
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
    <div className='w-11/12 flex flex-col items-center justify-center text-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-wrap'>
        <div className='w-full'>
          <h1>Who We Are</h1>
          <p className='text-wrap font-medium text-blackk/80 text-left text-[15px]'>
          We are a global IT services and consulting firm that has grown from a small, passionate team to over 200 professional technologists.
          We specialize in innovative strategies that bridge technology solutions with business concepts.</p>  
        </div>
        <div className='w-full'>
          <h1>What We Do</h1>
          <p className='text-wrap font-medium text-blackk/80 text-left text-[15px]'>We partner with both global industry leaders and startups to turn innovative ideas into reality using exceptional custom software and integrated models, delivering cutting-edge IT solutions.</p>  
        </div>
        <div className='w-full'>
          Mission and Vision
        <p className='text-wrap font-medium text-blackk/80 text-left text-[15px]'> Client Satisfaction is our primary mission, we empower them with innovative technology solutions that drive growth and ensure sustainable success.
        Our vision is to be a global leader in IT services, offering top-tier software development.
        </p>  
        </div>
      </div>
      <div>
        <Link to="/about">
          <button className="mt-4 flex items-center gap-1 text-md hover:underline text-bloo">
            <span>Learn more</span>
            <FiArrowRight />
          </button>
        </Link>
      </div>
    </div>

  );
};

const OurServices = () => {
  return (
<div className="p-2 h-[65vh] overflow-y-auto no-scrollbar">
  <div className="grid grid-cols-2 gap-4 items-start justify-start">
    
    <div className="flex flex-col items-start justify-start text-nowrap">
      <div className="items-start justify-start py-1 text-neutral-400 transition-colors hover:text-neutral-50">
        <MdOutlineAppRegistration size={40} className="mb-2 text-bloo" />
        <div className="text-md text-left font-bold text-blackk">App Development</div>
      </div>
      <div className='flex flex-col font-light text-md w-full justify-left'>
        <Link to='services-android' className='group flex flex-wrap gap-2 items-center justify-left cursor-pointer'>
          {/* <FaAndroid size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">Andriod App Development</p>
        </Link>
        <Link to='services-ios' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <FaAppStoreIos size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">iOS App Development</p>
        </Link>
        <Link to='services-enterpriseappdev' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <FaLaptopCode size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">Web App Development</p>
        </Link>
        <Link to='services-saas' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">SAAS Development</p>
        </Link>
        <Link to='services-reactnative' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">React Native</p>
        </Link>
        <Link to='services-react' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">React Development</p>
        </Link>
        <Link to='services-flutter' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">Flutter Development</p>
        </Link >
        <Link to='services-kotlin' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">Kotlin Development</p>
        </Link>
        <Link to='services-objectivec' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">ObjectiveC development</p>
        </Link >
        <Link to='services-vue' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">VueJS development</p>
        </Link>
        <Link to='services-angular' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">AngularJs</p>
        </Link>
        <Link to='services-ionic' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">Ionic development</p>
        </Link>
        <Link to='services-typescript' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">Typescript development</p>
        </Link>
        <Link to='services-php' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">PHP development</p>
        </Link>
        <Link to='services-mysql' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">MySQL development</p>
        </Link >
        <Link to='services-mongodb' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">MongoDB development</p>
        </Link >
        <Link to='services-oracle' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">Oracle development</p>
        </Link >
        <Link to='services-aspdotnet' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">ASP.NET development</p>
        </Link >
        <Link to='services-laravel' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
          <p className="group-hover:text-bloo font-medium text-blackk/80">Laravel development</p>
        </Link>
        

      </div>
    </div>
    
    <div className='flex flex-col gap-6'>
      <div className="flex flex-col items-start justify-start text-nowrap">
        <div className="items-start justify-start py-1 text-neutral-400 transition-colors hover:text-neutral-50">
          <div className=''><LuCircuitBoard size={40} className="mb-2 text-bloo" /></div>
          <div className="text-md text-center font-bold text-blackk">Emerginng Technologies</div>
        </div>
        <div className='flex flex-col font-light text-md w-full justify-left'>
          <Link to='services-aiml' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
            {/* <LuBrainCircuit size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
            <p className="group-hover:text-bloo font-medium text-blackk/80">AI & ML</p>
          </Link>
          <Link to='services-iot' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
            {/* <GiCircuitry size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
            <p className="group-hover:text-bloo font-medium text-blackk/80">Internet Of Things</p>
          </Link >
          <Link to='services-blockchain' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
            {/* <SiBlockchaindotcom size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
            <p className="group-hover:text-bloo font-medium text-blackk/80">Blockchain Development</p>
          </Link >
          <Link to='services-gis' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
            {/* <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
            <p className="group-hover:text-bloo font-medium text-blackk/80">Oil and Gas</p>
          </Link >
          
        </div>
      </div>
      <div className="flex flex-col items-start justify-start text-nowrap">
        <div className="items-start justify-start pt-2 text-neutral-400 transition-colors hover:text-neutral-50">
          <FaPeopleArrows size={40} className=" mb-2 text-bloo" />
          <div className="text-md text-center font-bold text-blackk">Consultancy Services</div>
        </div>
        <div className='gap-2 font-light text-md w-full justify-left'>
          <Link to='services-enterpriseappdev' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
            {/* <FaComputer size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
            <p className="group-hover:text-bloo font-medium text-blackk/80">App Consulting</p>
          </Link >
          <Link to='services-uiux' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
            {/* <MdDesignServices  size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
            <p className="group-hover:text-bloo font-medium text-blackk/80">Design & UI / UX Consulting</p>
          </Link >
          <Link to='/services-digitaltransformation' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
            {/* <MdDesignServices  size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
            <p className="group-hover:text-bloo font-medium text-blackk/80">Digital Transformation</p>
          </Link >
        </div>
      </div>
      <div className="flex flex-col items-start justify-start text-nowrap">
        <div className="items-start justify-start py-1 text-neutral-400 transition-colors hover:text-neutral-50">
          <IoIosBuild size={40} className=" mb-2 text-bloo" />
          <div className="text-md text-center font-bold text-blackk">Technical Services</div>
        </div>
        <div className='flex flex-col font-light text-md w-full justify-left'>
          <Link to='services-devops' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
            {/* <IoIosBuild size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
            <p className="group-hover:text-bloo font-medium text-blackk/80">DevOps Services</p>
          </Link >
          <Link to='services-docker' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
            {/* <FaFileCircleCheck  size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
            <p className="group-hover:text-bloo font-medium text-blackk/80">Docker</p>
          </Link >
          <Link to='/services-azure' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
            {/* <FaFileCircleCheck  size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
            <p className="group-hover:text-bloo font-medium text-blackk/80">Azure</p>
          </Link>
          <Link to='services-testing' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
            {/* <FaFileCircleCheck  size={20} className="group-hover:text-bloo text-blackk transition duration-200" /> */}
            <p className="group-hover:text-bloo font-medium text-blackk/80">Software Testing</p>
          </Link >
        </div>
      </div>
    </div>
   
  </div>
</div>
  );
};

const OurResources = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-6">
        <Link to="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover text-blackk"
            src=""
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium text-bloo">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </Link >
        <Link to="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover text-blackk"
            src=""
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium text-bloo">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </Link>
      </div>
      <button className="mt-4 flex items-center gap-1 text-sm text-bloo">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const OurIndustries=()=>{
  return(
    <div>
      nothing here.
    </div>
  )
}

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
      {/* <Separator /> */}
      <div className="flex flex-col items-center justify-center pt-28 mb-4 sm:mb-8 md:mb-12">
        <p className="text-bloo font-bold text-xl sm:text-2xl lg:text-3xl mb-4 py-1">
            Core Services
        </p>
        <h2 className="text-blackk font-extrabold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[36px] max-w-4xl py-1">
            Unlocking Innovation: <br className="sm:hidden"/>Explore Our Suite of Solutions for Your Digital Evolution
        </h2>
      </div>
      <Offers />
      {/* <Separatorr /> */}
      <Techs />
      <Solutions />
      {/* <Separatorrr /> */}
      <Casestudies />
      <Reviews />
      <Talktous /> 
      <Clients />
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
  return(
    <>
      <h1>Resources</h1>
      <h2><Link to="/casestudies">casestudies</Link></h2>
      <Footer />
      <Copyright />
    </>
  )
}

const Cstudiescomp = () => {
  return(
    <>
      <Cstdmain />
      <Footer />
      <Copyright />
    </>
  )
}

const Allindus = () => {
  return (
    <>
      <Indusmain />
      <Footer />
      <Copyright />
    </>
  )
}

const resolveSlotProps = (fn, args) => (typeof fn === 'function' ? fn(args) : fn);

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
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              
              resolvedSlotProps?.className,
            ),
          };
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              'w-screen h-screen text-2xl box-border font-sans p-1.5 my-3 mx-0 rounded-xl overflow-auto outline-0 bg-white  border border-solid border-slate-200 text-slate-900 min-w-listbox shadow-md',
              resolvedSlotProps?.className,
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
        'cursor-pointer text-sm font-sans box-border rounded-lg font-semibold px-4 py-2 bg-bloo text-white',
        className,
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
        'list-none pt-2 pb-2 mt-2 grid rounded-lg cursor-default select-none last-of-type:border-b-0 disabled:text-slate-400  disabled:hover:text-slate-400',
        className,
      )}
      {...other}
    />
  );
});

MenuItem.propTypes = {
  className: PropTypes.string,
}

export default App;