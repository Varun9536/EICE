import React from "react";
import dtransbanner from "../assets/Compressed/dtransbanner.jpg";
import servicebannerpattern from "../assets/Compressed/servicebannerpattern.png";

import { FiCheckCircle } from "react-icons/fi";

import dtdigital from "../assets/Compressed/dtdigital.svg";
import dtdesign from "../assets/Compressed/dtdesign.svg";
import dtconsulting from "../assets/Compressed/dtconsulting.svg";

import Footer from '../Othercomps/Footer.jsx';
import Copyright from '../Othercomps/Copyright.jsx';

function Digitrans()
{
    
    return (
       <div>
            <div className="bg-gradient-to-r from-transparent via-bloo/5 to-bloo/10 2xl:pt-2 pt-16">
                <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen ">
                <div className="absolute inset-0 left-[10%]">
                        <img src={servicebannerpattern} alt="" />
                </div>
                    <div className="flex lg:flex-row flex-col py-20 items-center">
                        <div className="w-full">
                            <h1 className="text-blackk font-bold sm:text-6xl text-4xl sm:leading-tight leading-snug">Digital Transformation</h1>
                            <h2 className="text-blackk font-light sm:text-3xl text-2xl pb-4 pt-2">
                                {`"Embrace the Digital Era: Transform Your Business Strategy 
                                for a Competitive Edge"`}
                            </h2>
                        </div>
                        <div className="flex items-center justify-end">
                            <div className="w-7/12">
                                <img src={dtransbanner} alt="" className="rounded-full"/>
                            </div>
                        </div>
                    </div>       
                </div>    
            </div>
            <div>
                <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen py-20">
                    <div className="grid grid-cols-2 gap-12 items-center justify-center">
                        <div>
                            <h1 className="text-blackk font-bold sm:text-5xl text-3xl sm:leading-tight leading-snug">
                                Meet Your Customers Where They Are: 
                                <span className="text-bloo"> Digital Transformation </span>
                                for a New Age
                            </h1>
                        </div>
                        <div>
                            <p className="font-medium text-justify text-lg">
                                As your customers embrace digital, your business processes must align with their needs and expectations. At Flexsin, we offer specialized digital transformation services to drive your organization forward. <br /><br />
                                Our clear, structured roadmap ensures alignment with your business goals. Our experts use deep industry knowledge and innovative thinking to introduce solutions that bring meaningful change. <br /><br />
                                We create strategies that meet your objectives while enhancing operational excellence, capabilities, and customer experiences. Partner with Flexsin to confidently navigate the digital landscape and achieve sustainable success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen py-20">
                <h1 className="text-bloo font-bold sm:text-3xl text-2xl pb-4 text-center">Key Areas</h1>
                <h2 className="text-blackk font-bold sm:text-4xl text-2xl sm:leading-tight leading-snug text-center">The Expertise we bring to the table</h2>
                <div className="grid grid-cols-3 gap-6 pt-16">
                    <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
                        <div className="h-1/2 rounded-full bg-bloo/10">
                            <img src={dtdigital} alt="" />
                        </div>
                        <div className="pt-6 h-full text-center">
                            <h1 className="font-semibold pb-2 text-xl">INNOVATION CONSULTING</h1>
                            <p> Our consulting services are focused on identifying innovation opportunities and executing the right initiatives that deliver market success. </p>
                        </div>
                    </div>
                    <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
                        <div className="h-1/2 rounded-full bg-bloo/10">
                            <img src={dtconsulting} alt="" className="scale-[0.85]"/>
                        </div>
                        <div className="pt-6 h-full text-center">
                            <h1 className="font-semibold pb-2 text-xl">CUSTOMER EXPERIENCE</h1>
                            <p>We leverage socially informed understanding,
                            cross-channel coherence and analytics-based knowledge to deliver customer delights.</p>
                        </div>
                    </div>
                    <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
                        <div className="h-1/2 rounded-full bg-bloo/10">
                            <img src={dtdesign} alt="" className="scale-[0.8]"/>
                        </div>
                        <div className="pt-6 h-full text-center">
                            <h1 className="font-semibold pb-2 text-xl">EXPERIENCE DESIGN</h1>
                            <p>We offer delighting digital designing solutions to businesses that serve well across devices for the convenience of a modern-day user.</p>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-20">
                <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen pt-24 pb-8">
                    <h1 className="text-bloo font-bold sm:text-3xl text-2xl pb-4 text-center">Why Choose Us</h1>
                    <h2 className="text-blackk font-bold sm:text-4xl text-2xl sm:leading-tight leading-snug text-center">Take a quick look at the key reasons why you should choose us for your digital transformation journey</h2>
                </div>    
                <div className="bg-zinc-50">
                    <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen py-8">
                        <div className="py-4 flex flex-row gap-10 items-center justify-center">
                            <FiCheckCircle size={30} className="text-emerald-500"/>
                            <p className="text-wrap text-2xl">
                                <span className="text-2xl font-semibold">Seamless Integration: </span>We integrate open technology development tools with innovative systems to ensure a seamless digital transformation.
                            </p>
                        </div>
                        <div className="py-4 flex flex-row gap-10 items-center justify-center">
                            <FiCheckCircle size={30} className="text-emerald-500"/>
                            <p className="text-wrap text-2xl">
                                <span className="text-2xl font-semibold">Agile Methodologies: </span>
                                Our use of agile development and project management methodologies enhances engagement and delivers timely results.
                            </p>
                        </div>
                        <div className="py-4 flex flex-row gap-10 items-center justify-center">
                            <FiCheckCircle size={30} className="text-emerald-500"/>
                            <p className="text-wrap text-2xl">
                                <span className="text-2xl font-semibold">Collaborative Communication: </span>
                                We leverage a collaborative and communicative approach, working closely with clients to meet their unique needs.
                            </p>
                        </div>
                        <div className="py-4 flex flex-row gap-10 items-center justify-center">
                            <FiCheckCircle size={30} className="text-emerald-500"/>
                            <p className="text-wrap text-2xl">
                                <span className="text-2xl font-semibold">Global Expertise: </span>
                            Our cross-functional teams, comprising over 300 experts, are strategically based in North America, Europe, and Asia to provide global support.
                            </p>
                        </div>
                        <div className="py-4 flex flex-row gap-10 items-center justify-center">
                            <FiCheckCircle size={30} className="text-emerald-500"/>
                            <p className="text-wrap text-2xl">
                                <span className="text-2xl font-semibold">In-House Specialists: </span>
                                We harness the skills of our in-house front-end experts, including business analysts, UX/UI specialists, and designers, to create user-centric solutions.
                            </p>
                        </div>
                        <div className="py-4 flex flex-row gap-10 items-center justify-center">
                            <FiCheckCircle size={30} className="text-emerald-500"/>
                            <p className="text-wrap text-2xl">
                                <span className="text-2xl font-semibold">Proven Success: </span>
                                We have a proven track record of successfully delivering open technology projects, ensuring reliability and excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Copyright />
       </div>
    )
}

export default Digitrans;