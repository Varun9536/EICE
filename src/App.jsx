/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// import Withsplashscreen from './Splashcomponents/Withsplashscreen';
import logo from './assets/logo.svg';


import {Routes, Route, Outlet, NavLink } from 'react-router-dom';

import Big from './Homecomps/Big';
import Offers from './Homecomps/Offers';
import Solutions from './Homecomps/Solutions';
import Clientele from './Homecomps/Clientele';
import Clients from './Homecomps/Clients';
import Footer from './Othercomps/Footer';
import Reviews from './Homecomps/Reviews';
import Casestudies from './Homecomps/Casestudies';
import Techs from './Homecomps/Techs';
import Temp from './Homecomps/Temp';

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
import Datatrans from './Servcomps/Datatrans';
import Devops from './Servcomps/Devops';
import Digitrans from './Servcomps/Digitrans';
import Entpappdev from './Servcomps/Entpappdev';
import Iot from './Servcomps/Iot';
import Techconsult from './Servcomps/Techconsult';

import Indusmain from './Allindus/Indusmain';

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

import Servicebutton from './Navcomps/Servicebutton';

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

const App = () => {
  return (
    <Routes>
      <Route element={<NavLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services  />} />
        <Route path="resources" element={<Resources />} />
        <Route path="Careers" element={<Careers />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="INDUSTRIES" element={<Allindus />} />
        <Route path="services/Aiml" element={<Aiml />} />
        <Route path="services/Cloud" element={<Cloud />} />
        <Route path="services/Dataanalytics" element={<Dataanalytics />} />
        <Route path="services/Datatrans" element={<Datatrans />} />
        <Route path="services/Devops" element={<Devops />} />
        <Route path="Digitrans" element={<Digitrans />} />
        <Route path="services/Entpappdev" element={<Entpappdev />} />
        <Route path="services/Iot" element={<Iot />} />
        <Route path="services/Techconsult" element={<Techconsult />} />
        <Route path="casestudies" element={<Cstudiescomp />} />
        <Route path="resources/casestudies/AutoOne" element={<AutoOne />} />
        <Route path="resources/casestudies/AutoTwo" element={<AutoTwo />} />
        <Route path="resources/casestudies/AutoThree" element={<AutoThree />} />
        <Route path="resources/casestudies/AutoFour" element={<AutoFour />} />
        <Route path="*" element={<div className='font-manrope font-base text-3xl'><p>{`There's nothing here: 404`}</p></div>} />
      </Route>
    </Routes>
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
        <div className='bg-white grid grid-cols-3  items-center justify-center text-lg 2xl:scale-100 xl:scale-100 lg:scale-100 scale-[0.65]'>
          <div className='cursor-pointer justify-self-end pr-52'>
            <a href="/home">
              {/* <h1 className="text-[50px] w-[120px] text-center font-extrabold text-blue-950">E<span className="text-bloo">IC</span>E</h1> */}
              <img src={logo} alt="" className='scale-150'/>
            </a>
          </div>
          <div className='flex flex-row items-center justify-center overflow-visible'>
            <NavLink to="/home" className="p-6">
              <div className='group hover:text-bloo  transition duration-300 ease-in-out'>
                <div>HOME</div>
                  <div className='bg-bloo h-1 rounded-full w-0 group-hover:w-full transition-width duration-300'>
                </div>
              </div>
            </NavLink>
            <div className='relative px-2'>
              <Tabs className='absolute' />
            </div>
            {/* <NavLink to="/careers" className="p-6 ">
              <div className='group hover:text-bloo  transition duration-300 ease-in-out'>
                <div>CAREERS</div>
                  <div className='bg-bloo h-1 rounded-full w-0 group-hover:w-full transition-width duration-300'>
                </div>
              </div>  
            </NavLink> */}
          </div>
          <div className='justify-self-start pl-48'>
            <NavLink to="/contact" className="p-6">
              <div className='transition duration-300 ease-in-out'>
                    <a href="Contact">
                        {/* <button className="transition duration-200 h-[56px] w-56 border-[3px] border-bloo hover:border-bloo hover:border-[3px] hover:bg-bloo hover:text-white text-bloo text-xl font-extrabold py-2 px-4 rounded"> */}
                        <button className="flex flex-row items-center justify-center bg-blend-overlay transition duration-200 h-[56px] w-[120px] hover:bg-bloo/90 hover:shadow-md hover:shadow-bloo/30 bg-bloo text-white text-lg font-semibold py-2 px-4 rounded"> 
                            {`Let's Talk`}
                        </button>
                    </a>
                </div>
            </NavLink>
          </div>
        </div>
      </nav>
      <div className='bg-black'></div>

      {/* phone navbar */}
      <nav className='2xl:hidden xl:hidden  flex p-4 fixed w-full top-0 left-0 z-30 shadow-md shadow-blackk/20 font-manrope bg-white font-semibold items-center overflow-hidden'>
        <div className='curosr-pointer pl-3'>
          <a href="/home">
            {/* <h1 className="text-3xl w-[120px] text-start font-extrabold text-blue-950">E<span className="text-bloo">IC</span>E</h1> */}
            <img src={logo} alt="" className='scale-[1.15]' />
          </a>
        </div>  
        <div className='w-full'>
          <div className='flex flex-row items-center justify-end'>
            <Dropdown>
              <MenuButton className='scale-[0.6] -mr-1'>
                <div ><span><img src={menu} alt="" className='' /></span></div>
              </MenuButton>
              <Menu className='font-semibold'>
                <MenuItem onClick={createHandleMenuClick('Home')}><a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/home">Home</a></MenuItem>
                <MenuItem onClick={createHandleMenuClick('About Us')}><a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href='/about'>About Us</a></MenuItem>
                <MenuItem onClick={createHandleMenuClick('Services')}><a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/services">Services</a></MenuItem>
                <MenuItem onClick={createHandleMenuClick('Services')}><a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/allindus">Industries</a> </MenuItem>
                <MenuItem onClick={createHandleMenuClick('Contact Us')}> <a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/resources">Resources</a> </MenuItem>
                {/* <MenuItem onClick={createHandleMenuClick('Contact Us')}> <a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/careers">Careers</a> </MenuItem> */}
                <MenuItem onClick={createHandleMenuClick('Resources')}> <a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/contact">Contact Us</a></MenuItem>
              </Menu>
            </Dropdown>
          </div>
        </div>
      </nav>

      <main className='overflow-hidden 
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
          <a className='flex items-center justify-center' href={`/${children}`}>
            <span className='pr-2'>{children}</span>
            <FiChevronDown 
                className={`transition-transform ${
                  selected === tab ? "rotate-180" : ""
                }`}
              />
          </a>
        </div>
        <div className='bg-bloo h-1 rounded-full w-0 group-hover:w-full transition-width duration-300'></div>  
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
      // give width down here for standard sizing, pref 450px 
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
        <a href="/about">
          <button className="mt-4 flex items-center gap-1 text-md hover:underline text-bloo">
            <span>Learn more</span>
            <FiArrowRight />
          </button>
        </a>
      </div>
    </div>

  );
};

const OurServices = () => {
  return (
<div className="p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start justify-start">
    
    <div className="flex flex-col items-start justify-start text-nowrap">
      <div className="items-start justify-start py-6 text-neutral-400 transition-colors hover:text-neutral-50">
        <MdOutlineAppRegistration size={40} className="mb-2 text-bloo" />
        <div className="text-md text-left text-blackk">App Development</div>
      </div>
      <div className='flex flex-col gap-2 font-light text-md w-full justify-left'>
        <a href='' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          <FaAndroid size={20} className="group-hover:text-bloo text-blackk transition duration-200" />
          <p className="group-hover:text-bloo">Andriod App Development</p>
        </a>
        <a href='' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          <FaAppStoreIos size={20} className="group-hover:text-bloo text-blackk transition duration-200" />
          <p className="group-hover:text-bloo">iOS App Development</p>
        </a>
        <a href='' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          <FaLaptopCode size={20} className="group-hover:text-bloo text-blackk transition duration-200" />
          <p className="group-hover:text-bloo">Web App Development</p>
        </a>
        <a href='' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          <GrCloudSoftware size={20} className="group-hover:text-bloo text-blackk transition duration-200" />
          <p className="group-hover:text-bloo">SAAS Development</p>
        </a>

      </div>
    </div>
    
    <div className="flex flex-col items-start justify-start text-nowrap">
      <div className="items-start justify-start py-6 text-neutral-400 transition-colors hover:text-neutral-50">
        <div className=''><LuCircuitBoard size={40} className="mb-2 text-bloo" /></div>
        <div className="text-md text-center text-blackk">Emerginng Technologies</div>
      </div>
      <div className='flex flex-col gap-2 font-light text-md w-full justify-left'>
        <a href='' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          <LuBrainCircuit size={20} className="group-hover:text-bloo text-blackk transition duration-200" />
          <p className="group-hover:text-bloo">AI & ML</p>
        </a>
        <a href='' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          <GiCircuitry size={20} className="group-hover:text-bloo text-blackk transition duration-200" />
          <p className="group-hover:text-bloo">Internet Of Things</p>
        </a>
        <a href='' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          <SiBlockchaindotcom size={20} className="group-hover:text-bloo text-blackk transition duration-200" />
          <p className="group-hover:text-bloo">Blockchain Development</p>
        </a>
        
      </div>
    </div>

    <div className="flex flex-col items-start justify-start text-nowrap">
      <div className="items-start justify-start py-6 text-neutral-400 transition-colors hover:text-neutral-50">
        <FaPeopleArrows size={40} className=" mb-2 text-bloo" />
        <div className="text-md text-center text-blackk">Consultancy Services</div>
      </div>
      <div className='gap-2 font-light text-md w-full justify-left'>
        <a href='' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          <FaComputer size={20} className="group-hover:text-bloo text-blackk transition duration-200" />
          <p className="group-hover:text-bloo">App Consulting</p>
        </a>
        <a href='' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          <MdDesignServices  size={20} className="group-hover:text-bloo text-blackk transition duration-200" />
          <p className="group-hover:text-bloo">Design & UI / UX Consulting</p>
        </a>
      </div>
    </div>
    
    <div className="flex flex-col items-start justify-start text-nowrap">
      <div className="items-start justify-start py-6 text-neutral-400 transition-colors hover:text-neutral-50">
        <FaPeopleArrows size={40} className=" mb-2 text-bloo" />
        <div className="text-md text-center text-blackk">Technical Services</div>
      </div>
      <div className='flex flex-col gap-2 font-light text-md w-full justify-left'>
        <a href='' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          <IoIosBuild size={20} className="group-hover:text-bloo text-blackk transition duration-200" />
          <p className="group-hover:text-bloo">DevOps Services</p>
        </a>
        <a href='' className='group flex flex-row gap-2 items-center justify-left cursor-pointer'>
          <FaFileCircleCheck  size={20} className="group-hover:text-bloo text-blackk transition duration-200" />
          <p className="group-hover:text-bloo">Software Testing</p>
        </a>
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
        <a href="#">
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
        </a>
        <a href="#">
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
        </a>
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
      kakewfn
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
    title: "RESOURCES",
    Component: OurResources,
  },
  {
    title: "INDUSTRIES",
    Component: OurIndustries,
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
      <Clientele />
      <Offers />
      {/* <Separatorr /> */}
      <Techs />
      <Solutions />
      {/* <Separatorrr /> */}
      <Clients />
      <Casestudies />
      <Reviews />
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
      <h2><a href="casestudies">casestudies</a></h2>
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