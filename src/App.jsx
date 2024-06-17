/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
// import Withsplashscreen from './Splashcomponents/Withsplashscreen';
import logo from './assets/logo.svg';

import { Routes, Route, Outlet, NavLink } from 'react-router-dom';

import Big from './Homecomps/Big';
import Offers from './Homecomps/Offers';
import Solutions from './Homecomps/Solutions';
import Clientele from './Homecomps/Clientele';
import Clients from './Homecomps/Clients';
import Footer from './Othercomps/Footer';
import Reviews from './Homecomps/Reviews';
import Casestudies from './Homecomps/Casestudies';
import Copyright from './Othercomps/Copyright';

import Company from './Aboutcomponents/Company';
import Misvis from './Aboutcomponents/Misvis';
import Keyteam from './Aboutcomponents/Keyteam';

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
        <Route path="Allindus" element={<Allindus />} />
        <Route path="services/Aiml" element={<Aiml />} />
        <Route path="services/Cloud" element={<Cloud />} />
        <Route path="services/Dataanalytics" element={<Dataanalytics />} />
        <Route path="services/Datatrans" element={<Datatrans />} />
        <Route path="services/Devops" element={<Devops />} />
        <Route path="services/Digitrans" element={<Digitrans />} />
        <Route path="services/Entpappdev" element={<Entpappdev />} />
        <Route path="services/Iot" element={<Iot />} />
        <Route path="services/Techconsult" element={<Techconsult />} />
        <Route path="resources/casestudies" element={<Cstudiescomp />} />
        <Route path="resources/casestudies/AutoOne" element={<AutoOne />} />
        <Route path="resources/casestudies/AutoTwo" element={<AutoTwo />} />
        <Route path="resources/casestudies/AutoThree" element={<AutoThree />} />
        <Route path="resources/casestudies/AutoFour" element={<AutoFour />} />
        
        <Route path="*" element={<div className='font-manrope font-thin text-3xl'><p>There's nothing here: 404</p></div>} />
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

      <div className='overflow-hidden'>
        {/* laptop navbar */}
        <nav
        className='fixed w-full top-0 left-0 z-30 shadow-md shadow-blackk/20 font-manrope bg-white font-semibold items-center justify-center overflow-hidden
                   2xl:block hidden'
        >
        <div className='bg-white grid grid-cols-3  items-center justify-center text-lg 2xl:scale-100 scale-[0.65]'>
          <div className='cursor-pointer justify-self-end pr-44'>
            <a href="/home">
              {/* <h1 className="text-[50px] w-[120px] text-center font-extrabold text-blue-950">E<span className="text-bloo">IC</span>E</h1> */}
              <img src={logo} alt="" className='scale-150'/>
            </a>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <NavLink to="/home" className="p-6">
              <div className='group hover:text-bloo hover:scale-125 transition duration-300 ease-in-out'>
                <div>HOME</div>
                  <div className='bg-bloo h-1 rounded-full w-0 group-hover:w-full transition-width duration-300'>
                </div>
              </div>
            </NavLink>
            <NavLink to="/about" className="p-6 ">
              <div className='group hover:text-bloo hover:scale-125 transition duration-300 ease-in-out'>
                <div>ABOUT</div>
                  <div className='bg-bloo h-1 rounded-full w-0 group-hover:w-full transition-width duration-300'>
                </div>
              </div>
            </NavLink>
            <NavLink to="/services" className="p-6">
              <div className='group hover:text-bloo hover:scale-125 transition duration-300 ease-in-out'>
                <button type='button' id='servicesbutton' aria-expanded='false' aria-haspopup='true'>SERVICES</button>
                  <div className='bg-bloo h-1 rounded-full w-0 group-hover:w-full transition-width duration-300'>
                </div>
              </div>
              {/* <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">License</a>
                  <form method="POST" action="#" role="none">
                    <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                  </form>
                </div>
              </div> */}
            </NavLink>
            <NavLink to="/resources" className="p-6 ">
              <div className='group hover:text-bloo hover:scale-125 transition duration-300 ease-in-out'>
                <div>RESOURCES</div>
                  <div className='bg-bloo h-1 rounded-full w-0 group-hover:w-full transition-width duration-300'>
                </div>
              </div>
            </NavLink>
            <NavLink to="/careers" className="p-6 ">
              <div className='group hover:text-bloo hover:scale-125 transition duration-300 ease-in-out'>
                <div>CAREERS</div>
                  <div className='bg-bloo h-1 rounded-full w-0 group-hover:w-full transition-width duration-300'>
                </div>
              </div>  
            </NavLink>
          </div>
          <div className='justify-self-start pl-36'>
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
      <nav className='2xl:hidden flex p-4 fixed w-full top-0 left-0 z-30 shadow-md shadow-blackk/20 font-manrope bg-white font-semibold items-center overflow-hidden'>
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
                <span><img src={menu} alt="" className='' /></span>
              </MenuButton>
              <Menu className='font-semibold'>
                <MenuItem onClick={createHandleMenuClick('Home')}><a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/home">Home</a></MenuItem>
                <MenuItem onClick={createHandleMenuClick('About Us')}><a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href='/about'>About Us</a></MenuItem>
                <MenuItem onClick={createHandleMenuClick('Services')}><a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/services">Services</a> </MenuItem>
                <MenuItem onClick={createHandleMenuClick('Services')}><a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/allindus">Industries</a> </MenuItem>
                <MenuItem onClick={createHandleMenuClick('Contact Us')}> <a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/resources">Resources</a> </MenuItem>
                <MenuItem onClick={createHandleMenuClick('Contact Us')}> <a className='w-screen overflow-hidden shadow-sm p-2 pl-4 text-[20px]' href="/careers">Careers</a> </MenuItem>
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

const Home = () => {
  return (
    <>
      <Big />
      {/* <Separator /> */}
      <Offers />
      {/* <Separatorr /> */}
      <Casestudies />
      <Solutions />
      {/* <Separatorrr /> */}
      <Reviews />
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
      <h2>About Us</h2>
      <Company />
      <Misvis />
      <Keyteam />
      <Footer />
      <Copyright />
    </>
  );
};

const Services = () => {
  return (
    <>
      <h2>Services</h2>
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
      <h2>Contact Us</h2>
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
      <h2><a href="resources/casestudies">casestudies</a></h2>
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
      <h2>All industries</h2>
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