import React from "react";
import x from '../assets/x.svg';
import linkedin from '../assets/linkedin.svg';
import fb from '../assets/fb.svg';
import logo from '../assets/logo.svg';

function Footer()
{
    return (
        <div className="grid text-manrope 
                        2xl:grid-cols-2 2xl:ml-[280px] 2xl:mr-[280px] 2xl:m-0
                        m-4 mb-[30rem]">
            <div className="flex flex-col text-left 
                            2xl:p-12 2xl:pl-44
                            p-4">
                <h1 className="font-extrabold text-blue-950 
                                2xl:text-4xl 2xl:p-0
                                cursor-pointer text-3xl pb-2">
                    <a href="/home">
                        <img src={logo} alt=""  className="scale-100"/>
                        {/* E<span className="text-bloo">IC</span>E */}
                    </a>
                </h1>
                <h2 className="font-semibold text-blackk 
                                2xl:pt-3 2xl:text-lg 2xl:pr-44 2xl:pb-4
                                text-[16px] pb-2">
                    EICE is a global software sevices organization offering high-quality solutions to businesses.
                    It services the IT requirements of multiple fortune 500 companies by utilising speicalized domain knowldege, 
                    best-of-breed technologies, rapidly deployable propeietary frameworks/solutions and flexible mangagement models
                </h2>
                <div className="grid grid-cols-3 gap-1 items-center justify-center 
                                2xl:w-1/2 2xl:scale-[.7] 2xl:-ml-14 2xl:p-0
                                w-1/4 scale-[1.5] -ml-2 pl-6 pt-4">
                    <div>
                        <a href="https://twitter.com/EICE_Int" target="_blank">
                            <img src={x} alt="" className='hover:cursor-pointer 
                                                            2xl:w-full 2xl:h-full 2xl:p-4 2xl:scale-100
                                                            scale-[1]'/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/company/eice-technologies-private-ltd" target="_blank">
                            <img src={linkedin} alt="" className='hover:cursor-pointer 
                                                                    2xl:w-full 2xl:h-full 2xl:p-4'/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/Eicetechnologies" target="_blank">
                            <img src={fb} alt="" className='hover:cursor-pointer 
                                                            2xl:w-full 2xl:h-full 2xl:p-4'/>
                        </a>    
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 items-start
                            
            ">
                <div className="grid 
                                2xl:grid-cols-2 2xl:p-12 2xl:scale-100
                                grid-cols-1 pt-4 pb-4 pl-4">                
                    <div className="flex flex-col text-left text-blackk pt-8">
                        <div className="font-bold 2xl:text-2xl 2xl:pb-4">Company</div>
                        <a href="/xyz"><div><span className=" hover:cursor-pointer underline hover:font-semibold 2xl:pb-1 2xl:text-lg">Mission and Vision</span></div></a>
                        <a href="/xyz"><div><span className=" hover:cursor-pointer underline hover:font-semibold 2xl:pb-1 2xl:text-lg">Careers</span></div></a>
                    </div>
                    <div className="flex flex-col text-left text-blackk pt-8">
                        <div className="font-bold 2xl:text-2xl 2xl:pb-4">Services</div>
                        <a href="/xyz"><div><span className="  hover:cursor-pointer underline hover:font-semibold 2xl:pb-1 2xl:text-lg">Application Services</span></div></a>
                        <a href="/xyz"><div><span className="  hover:cursor-pointer underline hover:font-semibold 2xl:pb-1 2xl:text-lg">Consultancy Services</span></div></a>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden 2xl:px-12 2xl:pb-20 px-3 py-2">
                    <label htmlFor="newsletter" className="font-semibold 2xl:text-2xl 2xl:pb-2 py-1 text-xl">Subscribe to our Newsletter</label>
                    <input placeholder="your-email@provider.com" type="email" name="newsletter" id="newslatter" className="border-gray-300 border-[2px] rounded-md 2xl:text-xl 2xl:w-1/2 2xl:py-2 2xl:px-1 px-1 py-1"/>
                    <div className='transition duration-300 ease-in-out 2xl:pt-3 pt-2'>
                        <a>
                            {/* <button className="transition duration-200 h-[56px] w-56 border-[3px] border-bloo hover:border-bloo hover:border-[3px] hover:bg-bloo hover:text-white text-bloo text-xl font-extrabold py-2 px-4 rounded"> */}
                            <button 
                                className="flex flex-row items-center justify-center bg-blend-overlay transition duration-200 hover:bg-bloo/90 hover:shadow-md hover:shadow-bloo/30 bg-bloo text-white
                                            h-[44px] w-[120px] text-lg font-semibold py-2 px-4 rounded"> 
                                {`Subscribe`}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;