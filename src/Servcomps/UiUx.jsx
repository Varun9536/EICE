// import React from "react";
// import Footer from "../Othercomps/Footer";
// import Copyright from "../Othercomps/Copyright";




import React, { useState, useRef } from "react";
import laptop from "../assets/Compressed/Laptop.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import dtransbanner from "../assets/Compressed/dtransbanner.jpg";
import servicebannerpattern from "../assets/Compressed/servicebannerpattern.png";

import { FaArrowRight } from "react-icons/fa";

import dtdigital from "../assets/Compressed/dtdigital.svg";
import dtdesign from "../assets/Compressed/dtdesign.svg";
import dtconsulting from "../assets/Compressed/dtconsulting.svg";

import Footer from '../Othercomps/Footer.jsx';
import Copyright from '../Othercomps/Copyright.jsx';
import TalkToUs from '../Othercomps/Talktous';
import Reviews from '../Homecomps/Reviews';
import Clients from '../Homecomps/Clients';
import Clientele from '../Homecomps/Clientele';
import { BsAndroid } from "react-icons/bs";

import { FaApple, FaAndroid, FaReact } from 'react-icons/fa';
import { IoMdReturnLeft } from 'react-icons/io';

import { SiApachecordova, SiFlutter, SiIonic, SiSwift, SiKotlin, SiApple, SiJavascript, SiPhp, SiVuedotjs, SiAngular, SiJquery, SiTypescript, SiMysql, SiPostgresql, SiApache, SiOracle, SiDjango, SiMongodb, SiAmazondynamodb, SiNodedotjs, SiRubyonrails, SiLaravel, SiExpress, SiFlask, SiFirebase, SiDocker, SiGit, SiKubernetes, SiJira, SiAnsible, SiAmazonaws, SiMicrosoftazure } from 'react-icons/si';
import { FaJava } from "react-icons/fa6";
import { IoLogoElectron } from "react-icons/io5";
import { DiDotnet } from "react-icons/di";
import { PiFileCSharp } from "react-icons/pi";

import { useHref } from 'react-router-dom';
import { Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';




const tech_app = [{ tech: "Android", id: "android_tech" }, { tech: "iOS", id: "ios_tech" }, { tech: "Desktop App", id: "desktop_tech" }]

const iconComponents = {
    "apple-icon": FaApple,
    "android-icon": FaAndroid,
    "react-icon": FaReact,
    "flutter-icon": SiFlutter,
    "ionic-icon": SiIonic,
    "swift-icon": SiSwift,
    "kotlin-icon": SiKotlin,
    "java-icon": SiJavascript,
    "php-icon": SiPhp,
    "objectivec-icon": SiApple,
    "vue-icon": SiVuedotjs,
    "angular-icon": SiAngular,
    "Ionic-icon": SiIonic,
    "jquery-icon": SiJquery,
    "typescript-icon": SiTypescript,
    "mysql-icon": SiMysql,
    "postgresql-icon": SiPostgresql,
    "apache-icon": SiApache,
    "oracle-icon": SiOracle,
    "django-icon": SiDjango,
    "mongodb-icon": SiMongodb,
    "dynamo-icon": SiAmazondynamodb,
    "node-icon": SiNodedotjs,
    "rubyonrails-icon": SiRubyonrails,
    "laravel-icon": SiLaravel,
    "express-icon": SiExpress,
    "aspdotnet-icon": DiDotnet,
    "firebase-icon": SiFirebase,
    "docker-icon": SiDocker,
    "git-icon": SiGit,
    "kubernetes-icon": SiKubernetes,
    "jira-icon": SiJira,
    "ansible-icon": SiAnsible,
    "aws-icon": SiAmazonaws,
    "azure-icon": SiMicrosoftazure,
    "cordova-icon": SiApachecordova,
    "corejava-icon": FaJava,
    "electronjs-icon": IoLogoElectron,
    "csharp-icon": PiFileCSharp

};

const technologies = {
    mobile: [
        { name: "React Native", icon: "react-icon", link: "services-reactnative" },
        { name: "Ionic", icon: "ionic-icon", link: "services-ionic" },
        { name: "Kotlin", icon: "kotlin-icon", link: "services-kotlin" },
        { name: "Java", icon: "corejava-icon", link: "services-reactnative" },
        { name: "Flutter", icon: "flutter-icon", link: "services-kotlin" },
        { name: "Cordova", icon: "cordova-icon", link: "services-kotlin" }

    ],

    ios: [
        { name: "React Native", icon: "react-icon", link: "services-reactnative" },
        { name: "Swift", icon: "swift-icon", link: "services-reactnative" },
        { name: "Flutter", icon: "flutter-icon", link: "services-kotlin" },
        { name: "Objective c", icon: "objectivec-icon", link: "services-kotlin" }

    ],

    desktop: [

        { name: "Electron js", icon: "electronjs-icon", link: "services-reactnative" },
        { name: ".NET MAUI", icon: "csharp-icon", link: "services-reactnative" },
        { name: "Flutter", icon: "flutter-icon", link: "services-kotlin" }
    ]

};


const industries = [
    { name: "OIL AND GAS INDUSTRY", id: "oil" },
    { name: "AUTOMOBILE INDUSTRY", id: "auto" },
    { name: "HEALTHCARE INDUSTRY", id: "health" }
];

const projects = {
    oil: [
        { title: "Offshore Platform Optimization", description: "Improved production efficiency by 25% through advanced AI-driven monitoring systems." },
        { title: "Energy Trading Platform", description: "Built a blockchain-based trading platform, improving transaction security and reducing costs by 20%." }
    ],
    auto: [
        { title: "Autonomous Driving AI", description: "Created a machine learning model improving object detection accuracy by 30% in diverse weather conditions." },
        { title: "Autonomous Driving AI", description: "Created a machine learning model improving object detection accuracy by 30% in diverse weather conditions." },
        { title: "Autonomous Driving AI", description: "Created a machine learning model improving object detection accuracy by 30% in diverse weather conditions." },
        { title: "Connected Car Platform", description: "Designed a cloud-based system enabling OTA updates and predictive maintenance for 100,000+ vehicles." },
        { title: "Manufacturing Process Optimization", description: "Implemented an AI-driven system reducing production line downtime by 40% and improving quality control." }
    ],
    health: [
        { title: "AI-Powered Diagnostic Tool", description: "Developed an AI algorithm for early cancer detection, improving accuracy by 15% over traditional methods." },
        { title: "Telemedicine Platform", description: "Created a secure, HIPAA-compliant telehealth solution, facilitating over 1 million virtual consultations." }
    ]
};

const CaseStudy = ({ title, description, image }) => (
    <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <img
                src={image}
                alt={title}
                className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
            />
            <div className="p-3 md:p-4">
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
            </div>
        </div>
    </div>
);

function Cstdmain() {
    const [activeIndustry, setActiveIndustry] = useState(industries[0].id);

    return (
        <div className="font-manrope px-4 sm:px-6 lg:px-8">
            <h2 className="text-bloo text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 py-1">
                Case Studies
            </h2>
            <h1 className="text-blackk max-w-7xl mx-auto text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 py-1">
                Explore how we digitally transformed other businesses
            </h1>
            <main className="container mx-auto max-w-7xl">
                <nav className="mb-8 sm:mb-12">
                    <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
                        {industries.map((industry) => (
                            <li key={industry.id}>
                                <button
                                    onClick={() => setActiveIndustry(industry.id)}
                                    className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition ${activeIndustry === industry.id
                                        ? "bg-bloo text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                >
                                    {industry.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {industries.map((industry) => (
                    <section
                        key={industry.id}
                        className={`mb-12 px-2 ${activeIndustry === industry.id ? "block" : "hidden"}`}
                    >
                        <h2 className="text-xl px-2 sm:text-2xl font-bold mb-4 sm:mb-6">{industry.name}</h2>
                        <div className="flex flex-wrap -mx-2">
                            {projects[industry.id].map((project, index) => (
                                <CaseStudy
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    image={laptop}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}

function UiUx() {
    const [activeCategory, setActiveCategory] = useState(tech_app[0].id);


    return (
        <div>
            <div className="xl:-mt-8 -mt-4 bg-gradient-to-r from-transparent via-bloo/5 to-bloo/10 pt-16 md:pt-20 lg:pt-12 2xl:pt-0">
                <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen ">
                    <div className="absolute inset-0 -z-20 left-[10%]">
                        <img src={servicebannerpattern} alt="" />
                    </div>
                    <div className="flex lg:flex-row flex-col px-4 py-20 items-center">
                        <div className="w-full">
                            <h1 className="text-blackk font-bold sm:text-6xl text-4xl sm:leading-tight leading-snug">Mobile and Desktop Application Development</h1>

                        </div>
                        <div className="lg:flex hidden items-center justify-end ">
                            <div className="lg:w-7/12 w-1/2">
                                <img src={dtransbanner} alt="" className="rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div>
                    <h1 className="text-blackk font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                        Comprehensive <span className="text-bloo"> App Development</span> Services: Unlocking Your Mobile Potential
                    </h1>
                </div>
                <div>
                    <p className="font-medium text-base sm:text-lg text-justify">
                        In today's mobile-first world, having a robust and user-friendly Android and iOS app is crucial for businesses to stay competitive and engage their audience effectively. At EICE Technology we offer a comprehensive suite of both Android and iOS app development  services designed to meet the diverse needs of businesses across various industries.
                    </p>
                    <p className="font-medium text-base sm:text-lg text-justify mt-4">
                        Our team of experienced developers, designers, and strategists work collaboratively to deliver innovative and high-quality Android and iOS applications that drive business growth and enhance user experiences.
                    </p>
                </div>
            </div>


            <h1 className="text-bloo font-bold sm:text-3xl text-2xl text-center pt-20">Mobile App Services</h1>
            <h2 className="text-blackk font-bold sm:text-4xl text-3xl sm:leading-tight leading-snug text-center py-2">Our Core Competencies in Android and iOS App Development</h2>
            <div className="grid px-4 lg:grid-cols-3 max-w-7xl mx-auto pb-32 pt-12 sm:grid-cols-2 grid-cols-1 gap-6">


                <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
                    <div className="h-1/2 rounded-full ">
                        <BsAndroid size={60} className="text-bloo" />
                    </div>
                    <div className="pt-6 h-full text-center">
                        <h1 className="font-semibold pb-2 text-xl"> Application Consulting</h1>
                        <p>We offer expert guidance on technology selection, app strategy, and implementation, ensuring your project is successful from concept to launch with tailored solutions and insights.</p>
                    </div>
                </div>
                <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
                    <div className="h-1/2 rounded-full ">
                        <BsAndroid size={60} className="text-bloo" />
                    </div>
                    <div className="pt-6 h-full text-center">
                        <h1 className="font-semibold pb-2 text-xl">Application UI/UX Design</h1>
                        <p>We create intuitive, user-friendly interfaces, enhancing user experience and engagement with aesthetically pleasing, and functional design solutions tailored to your App's needs.</p>
                    </div>
                </div>
                <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
                    <div className="h-1/2 rounded-full ">
                        <BsAndroid size={60} className="text-bloo" />
                    </div>
                    <div className="pt-6 h-full text-center">
                        <h1 className="font-semibold pb-2 text-xl">Android and iOS Wearable App Development</h1>
                        <p>We develop specialized Android and iOS apps for wearables like smartwatches and fitness trackers, offering valuable insights and seamless interactions to enhance the user experience.</p>
                    </div>
                </div>
                <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
                    <div className="h-1/2 rounded-full ">
                        <BsAndroid size={60} className="text-bloo" />
                    </div>
                    <div className="pt-6 h-full text-center">
                        <h1 className="font-semibold pb-2 text-xl"> Application Testing</h1>
                        <p>Our testing team ensures app quality and performance through thorough testing across devices and OS, using manual and automated techniques for a bug-free, secure app.</p>
                    </div>
                </div>
                <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
                    <div className="h-1/2 rounded-full ">
                        <BsAndroid size={60} className="text-bloo" />
                    </div>
                    <div className="pt-6 h-full text-center">
                        <h1 className="font-semibold pb-2 text-xl">Application Upgrade & Porting</h1>
                        <p>We deliver  app upgrade and porting solutions to enhance features, improve performance, and ensure compatibility with different devices and platforms for a smooth and modern user experience.</p>
                    </div>
                </div>
                <div className="w-full h-full border-2 border-bloo rounded-lg p-8 py-16 flex flex-col items-center justify-center">
                    <div className="h-1/2 rounded-full ">
                        <BsAndroid size={60} className="text-bloo" />
                    </div>
                    <div className="pt-6 h-full text-center">
                        <h1 className="font-semibold pb-2 text-xl">Application Maintenance</h1>
                        <p>We provide expert app maintenance, focusing on critical bug fixes, performance optimization, and regular updates to ensure your app remains secure, functional, and current with the latest technology advancements.</p>
                    </div>
                </div>
            </div>

            <div className="pb-32 pt-12">
                <h1 className="text-bloo font-bold sm:text-3xl text-2xl text-center pb-8">App Development Technologies We Use</h1>

                <nav className="mb-2">
                    <ul className="flex flex-wrap items-center justify-center gap-4">
                        {tech_app.map((category) => (

                            <button
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-full transition ${activeCategory === category.id
                                    ? "bg-blue-900 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                            >
                                {category.tech}
                            </button>

                        ))}
                    </ul>

                </nav>

                {activeCategory === "android_tech" && (
                    <main className="container mx-auto px-4 pt-4 lg:max-w-7xl w:screen">
                        {/* {tech_app.map((category) => ( */}
                        <section
                        // key={category.id}
                        // className={`${activeCategory === category.id ? "block" : "hidden"}`}
                        >
                            <div className="relative ">
                                <div className="flex items-center justify-center">
                                    <div
                                        className="items-center justify-center md:flex md:flex-wrap grid grid-cols-3"
                                    // className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                                    >

                                        {technologies.mobile.map((tech, index) => (
                                            <Technology
                                                key={index}
                                                name={tech.name}
                                                icon={tech.icon}
                                                link={tech.link}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* ))} */}
                    </main>)}




                {/* ios */}


                {activeCategory === "ios_tech" && (<main className="container mx-auto px-4 pt-4 lg:max-w-7xl w:screen">
                    {/* {tech_app.map((category) => ( */}
                    <section
                    // key={category.id}
                    // className={`${activeCategory === category.id ? "block" : "hidden"}`}
                    >
                        <div className="relative ">
                            <div className="flex items-center justify-center">
                                <div
                                    className="items-center justify-center md:flex md:flex-wrap grid grid-cols-3"
                                // className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                                >

                                    {technologies.ios.map((tech, index) => (
                                        <Technology
                                            key={index}
                                            name={tech.name}
                                            icon={tech.icon}
                                            link={tech.link}
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* ))} */}
                </main>)}



                {activeCategory === "desktop_tech" && (<main className="container mx-auto px-4 pt-4 lg:max-w-7xl w:screen">
                    {/* {tech_app.map((category) => ( */}
                    <section
                    // key={category.id}
                    // className={`${activeCategory === category.id ? "block" : "hidden"}`}
                    >
                        <div className="relative ">
                            <div className="flex items-center justify-center">
                                <div
                                    className="items-center justify-center md:flex md:flex-wrap grid grid-cols-3"
                                // className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                                >

                                    {technologies.desktop.map((tech, index) => (
                                        <Technology
                                            key={index}
                                            name={tech.name}
                                            icon={tech.icon}
                                            link={tech.link}
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* ))} */}
                </main>)}








            </div>







            <Cstdmain />
            <Reviews />
            <TalkToUs />
            <Clients />
            <Clientele />
            <Footer />
            <Copyright />
        </div>
    )
}

const Technology = ({ name, icon, link }) => {
    const IconComponent = iconComponents[icon];

    return (
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="group  cursor-pointer overflow-hidden flex flex-col gap-2 items-center p-3">
                <div className=" mb-2">
                    <IconComponent size={60} className="text-blackk group-hover:text-bloo transition duration-300" />
                </div>
                <span className="group-hover:underline group-hover:text-bloo transition duration-300 text-blackk font-semibold text-sm text-center">{name}</span>
            </div>
        </div>
    );
};

export default UiUx;
