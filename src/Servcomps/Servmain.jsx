import React from "react";
import Offers from "../Homecomps/Offers";

import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiPieChart,
} from "react-icons/fi";
import { FaAndroid, FaArrowRight, FaAppStoreIos, FaLaptopCode, FaPeopleArrows } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { FaComputer, FaFileCircleCheck } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { MdOutlineAppRegistration } from "react-icons/md";
import { CiMobile1, CiUser, CiCircleQuestion } from "react-icons/ci";
import { IoIosBuild, IoIosChatboxes } from "react-icons/io";
import { LuBrainCircuit, LuCircuitBoard, LuCloudCog  } from "react-icons/lu";
import { SiBlockchaindotcom } from "react-icons/si";
import { FiCheckCircle } from "react-icons/fi";
import { TbLetterA, TbLetterI } from "react-icons/tb";


import consultancy from "../assets/Compressed/consultancy.jpg";

function Servmain()
{
    return (
        <div className="">
          <div className="2xl:pt-16 pt-36 relative font-manrope mx-auto px-1 sm:max-w-7xl w-screen">
            <h1 className="text-bloo font-bold sm:text-3xl text-2xl pb-4 text-center">Our Services</h1>
            <h2 className="text-blackk font-bold sm:text-4xl text-3xl sm:leading-tight leading-snug text-center">Explore what we offer</h2>
            <h2 className="text-blackk/60 font-semibold sm:text-3xl py-4 text-2xl sm:leading-tight leading-snug text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quo sunt tenetur rerum eius, dolorem harum expedita? Ullam molestiae consectetur quis inventore vero minima non. Enim suscipit totam nihil?</h2>
          </div>
          <Offers />
          {/* <div className="2xl:pt-32 2xl:pb-20 pt-32 pb-20 relative font-manrope mx-auto px-1 sm:max-w-7xl w-screen">
            <div>
              <h1 className="text-bloo font-light sm:text-5xl text-4xl pb-4 text-center">Our Flagship Services</h1>
              <h2 className="text-blackk/60 font-medium py-4 sm:text-2xl text-xl sm:leading-tight leading-snug text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quo sunt tenetur rerum eius, dolorem harum expedita? Ullam molestiae consectetur quis inventore vero minima non. Enim suscipit totam nihil?</h2>
            </div>
            <div className="flex flex-col gap-12 items-center justify-center sm:pt-20 pt-16">
                    
                    
                    <div className="lg:hidden flex flex-col items-center justify-center w-full h-full">
                      <div className="relative w-11/12 h-[27.5rem] items-center justify-center flex justify-self-start">
                          <div className="flex flex-col p-16 items-center justify-center absolute inset-0 text-center">
                              <h1 className="text-white z-20 font-bold text-4xl pb-4">DevOps</h1>
                              <p className="z-20 text-white/90 text-lg px-2 text-left font-medium">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit laudantium rerum eligendi? Suscipit repudiandae et voluptates cupiditate.
                              </p>
                          </div>
                          <div className="absolute inset-0 bg-slate-800/80"></div>
                      </div>
                      <div className="flex flex-col px-8 py-4">
                          <h1 className="w-full text-center text-blackk/50 font-semibold text-2xl pb-2">Explore our Services in</h1>
                          <h1 className="w-full text-center text-blackk font-semibold text-3xl pb-8">DevOps</h1>

                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Clear, Constrcited scope with requirements that are unlikely to change throughout the project</h2>
                          </div>
                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Long term milestones can be defined irrespective of the chosen development model (ie; Agile, Spiral, etc.)</h2>
                          </div>
                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Clear, Constrcited scope with requirements that are unlikely to change throughout the project</h2>
                          </div>
                      </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-2 hidden items-center justify-center w-full h-full">
                      <div className="flex flex-col px-8 py-4">
                          <h1 className="w-full text-center text-blackk/50 font-semibold text-2xl pb-2">Explore our Services in</h1>
                          <h1 className="w-full text-center text-blackk font-semibold text-3xl pb-8">DevOps</h1>

                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Clear, Constrcited scope with requirements that are unlikely to change throughout the project</h2>
                          </div>
                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Long term milestones can be defined irrespective of the chosen development model (ie; Agile, Spiral, etc.)</h2>
                          </div>
                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Clear, Constrcited scope with requirements that are unlikely to change throughout the project</h2>
                          </div>
                      </div>
                      <div className="relative w-11/12 h-[27.5rem] items-center justify-center flex justify-self-start">
                          <div className="flex flex-col p-16 items-center justify-center absolute inset-0 text-center">
                              <h1 className="text-white z-20 font-bold text-4xl pb-4">DevOps</h1>
                              <p className="z-20 text-white/90 text-lg px-2 text-left font-medium">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit laudantium rerum eligendi? Suscipit repudiandae et voluptates cupiditate.
                              </p>
                          </div>
                          <div className="absolute inset-0 bg-slate-800/80"></div>
                      </div>
                  </div>



                  <div className="lg:grid lg:grid-cols-2 flex flex-col items-center justify-center w-full h-full">
                      <div className="relative w-11/12 h-[27.5rem] items-center justify-center flex justify-self-start">
                          <div className="flex flex-col py-8 px-16 items-center justify-center absolute inset-0 text-center">
                              <h1 className="text-white z-20 font-bold text-4xl pb-4">Digital Transformation</h1>
                              <p className="z-20 text-white/90 text-lg px-2 text-left font-medium">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusantium nam veniam error quas ad quis sapiente reprehenderit illum dolore, nulla itaque, placeat debitis facilis, eaque sunt. Soluta, ab odio.
                              </p>
                          </div>
                          <div className="absolute inset-0 bg-cyan-400/80"></div>
                      </div>
                      <div className="flex flex-col px-8 py-4 h-full">
                          <h1 className="w-full text-center text-blackk/50 font-semibold text-2xl pb-2">Our Accomplishments</h1>
                          <h1 className="w-full text-center text-blackk font-semibold text-3xl pb-8">Explore how we digitally transform businesses</h1>
                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi aperiam est, provident illum ea rerum quo necessitatibus officiis tempora cumque, ratione sit ut ipsum nihil minus quibusdam consequatur labore.</h2>
                          </div>
                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis atque distinctio facere aperiam rem expedita quia optio deleniti cupiditate natus quos tempore nisi labore necessitatibus officia praesentium laborum, totam quis.</h2>
                          </div>
                      </div>
                  </div>
                  
                  
                  
                  <div className="lg:hidden flex flex-col items-center justify-center w-full h-full">
                      <div className="relative w-11/12 h-[27.5rem] items-center justify-center flex justify-self-start">
                          <div className="flex flex-col p-16 items-center justify-center absolute inset-0 text-center">
                              <h1 className="text-white z-20 font-bold text-4xl pb-4">Artificial Intelligence</h1>
                              <p className="z-20 text-white/90 text-lg px-2 text-left font-medium">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit laudantium rerum eligendi? Suscipit repudiandae et voluptates cupiditate.
                              </p>
                          </div>
                          <div className="absolute inset-0 bg-slate-800/80"></div>
                      </div>
                      <div className="flex flex-col px-8 py-4">
                          <h1 className="w-full text-center text-blackk/50 font-semibold text-2xl pb-2">Explore our Services in</h1>
                          <h1 className="w-full text-center text-blackk font-semibold text-3xl pb-8">Aritificial Intelligence</h1>

                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Clear, Constrcited scope with requirements that are unlikely to change throughout the project</h2>
                          </div>
                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Long term milestones can be defined irrespective of the chosen development model (ie; Agile, Spiral, etc.)</h2>
                          </div>
                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Clear, Constrcited scope with requirements that are unlikely to change throughout the project</h2>
                          </div>
                      </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-2 hidden items-center justify-center w-full h-full">
                      <div className="flex flex-col px-8 py-4">
                          <h1 className="w-full text-center text-blackk/50 font-semibold text-2xl pb-2">Explore our Services in</h1>
                          <h1 className="w-full text-center text-blackk font-semibold text-3xl pb-8">Aritificial Intelligence</h1>

                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Clear, Constrcited scope with requirements that are unlikely to change throughout the project</h2>
                          </div>
                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Long term milestones can be defined irrespective of the chosen development model (ie; Agile, Spiral, etc.)</h2>
                          </div>
                          <div className="flex flex-row gap-2 py-2"> 
                              <FaArrowRight size={30} className="text-blackk/70"/>
                              <h2 className="text-lg font-light text-blackk">Clear, Constrcited scope with requirements that are unlikely to change throughout the project</h2>
                          </div>
                      </div>
                      <div className="relative w-11/12 h-[27.5rem] items-center justify-center flex justify-self-start">
                          <div className="flex flex-col p-16 items-center justify-center absolute inset-0 text-center">
                              <h1 className="text-white z-20 font-bold text-4xl pb-4">Artificial Intelligence</h1>
                              <p className="z-20 text-white/90 text-lg px-2 text-left font-medium">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit laudantium rerum eligendi? Suscipit repudiandae et voluptates cupiditate.
                              </p>
                          </div>
                          <div className="absolute inset-0 bg-slate-800/80"></div>
                      </div>
                  </div>



              </div>
            </div> */}

          <div className="py-20">
            <div className="bg-zinc-50">
                <div className="py-32 relative font-manrope mx-auto px-1 sm:max-w-7xl w-screen">
                    <div>
                        <h1 className="text-bloo font-light sm:text-5xl text-4xl pb-4 text-center">Our Flagship Services</h1>
                        <h2 className="text-blackk/60 font-medium py-4 sm:text-2xl text-xl sm:leading-tight leading-snug text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quo sunt tenetur rerum eius, dolorem harum expedita? Ullam molestiae consectetur quis inventore vero minima non. Enim suscipit totam nihil?</h2>
                    </div>
                    <div>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pt-12">
                            <a className="group cursor-pointer hover:bg-emerald-200/10 transition duration-200 rounded-md p-8 w-full h-full border-bloo/30 border-2 shadow-md shadow-bloo/50">
                                <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
                                    <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                                        <LuCloudCog size={100} className="text-bloo"/>
                                    </div>
                                    <div>
                                        <div className="flex flex-col p-2 text-start justify-end">
                                            <h1 className="text-blackk z-20 px-2 font-bold text-4xl pb-4">Digital Transformation</h1>
                                            <p className="z-20 text-blackk/90 text-lg px-2 text-left font-medium">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit laudantium rerum eligendi? Suscipit repudiandae et voluptates cupiditate.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="group cursor-pointer hover:bg-fuchsia-200/10 transition duration-200 rounded-md p-8 w-full h-full border-bloo/30 border-2 shadow-md shadow-bloo/50">
                                <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
                                    <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                                        <IoIosBuild size={100} className="text-bloo"/>
                                    </div>
                                    <div>
                                        <div className="flex flex-col p-2 text-start justify-end ">
                                            <h1 className="text-blackk z-20 px-2 font-bold text-4xl pb-4">DevOps</h1>
                                            <p className="z-20 text-blackk/90 text-lg px-2 text-left font-medium">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit laudantium rerum eligendi? Suscipit repudiandae et voluptates cupiditate.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="group cursor-pointer hover:bg-yellow-200/10 transition duration-200 rounded-md p-8 w-full h-full border-bloo/30 border-2 shadow-md shadow-bloo/50">
                                <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
                                    <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                                        <div className="grid grid-cols-2 gap-0">
                                        <TbLetterA size={100} className="text-bloo"/>
                                        <TbLetterI size={100} className="text-bloo -ml-8"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col p-2 text-start">
                                            <h1 className="text-blackk z-20 px-2 font-bold text-4xl pb-4">Generative AI</h1>
                                            <p className="z-20 text-blackk/90 text-lg px-2 text-left font-medium">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit laudantium rerum eligendi? Suscipit repudiandae et voluptates cupiditate.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
          </div>
          
          <div className="">
            <div className="py-16 relative font-manrope mx-auto px-1 sm:max-w-7xl w-screen">
              <div>
                <h1 className="text-bloo font-light sm:text-5xl text-4xl pb-4 text-center">Emerging Technologies</h1>
                <h2 className="text-blackk/60 font-medium py-4 sm:text-2xl text-xl sm:leading-tight leading-snug text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quo sunt tenetur rerum eius, dolorem harum expedita? Ullam molestiae consectetur quis inventore vero minima non. Enim suscipit totam nihil?</h2>
                <h2 className="text-blackk font-bold sm:text-4xl text-2xl sm:leading-tight leading-snug text-center"></h2>        
              </div>
              <div>
                  <div className="grid grid-cols-4 gap-1 pt-16">
                    <div className="w-full h-full p-4 py-16 flex flex-col items-center justify-center">
                        <div className="h-1/2 rounded-full py-2">
                            <LuBrainCircuit size={60} className="text-bloo"/>
                        </div>
                        <div className="pt-6 h-full text-center">
                            <h1 className="font-semibold text-start px-8 pb-2 text-xl">AI & ML</h1>
                            <p className="text-left px-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quidem excepturi perspiciatis voluptas quaerat deserunt mollitia soluta? </p>
                        </div>
                    </div>
                    <div className="w-full h-full p-4 py-16 flex flex-col items-center justify-center">
                        <div className="h-1/2 rounded-full py-2">
                            <GiCircuitry size={60} className="text-bloo"/>
                        </div>
                        <div className="pt-6 h-full text-center">
                            <h1 className="font-semibold pb-2 text-start px-8 text-xl">Internet of Things</h1>
                            <p className="text-left px-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quidem excepturi perspiciatis voluptas quaerat deserunt mollitia soluta?</p>
                        </div>
                    </div>
                    <div className="w-full h-full p-4 py-16 flex flex-col items-center justify-center">
                        <div className="h-1/2 rounded-full py-2">
                          <SiBlockchaindotcom size={60} className="text-bloo"/>
                        </div>
                        <div className="pt-6 h-full text-center">
                            <h1 className="font-semibold pb-2 text-start px-8 text-xl">Blockchain Development</h1>
                            <p className="text-left px-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quidem excepturi perspiciatis voluptas quaerat deserunt mollitia soluta?</p>    
                        </div>
                    </div>
                    <div className="w-full h-full p-4 py-16 flex flex-col items-center justify-center">
                        <div className="h-1/2 rounded-full py-2">
                            <LuBrainCircuit size={60} className="text-bloo"/>
                        </div>
                        <div className="pt-6 h-full text-center">
                            <h1 className="font-semibold pb-2 text-start px-8 text-xl">AI & ML</h1>
                            <p className="text-left px-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quidem excepturi perspiciatis voluptas quaerat deserunt mollitia soluta? </p>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>


        <div className="bg-zinc-50">
        <div className="py-32 relative font-manrope mx-auto px-1 sm:max-w-7xl w-screen">
            <div>
              <h1 className="text-bloo font-light sm:text-5xl text-4xl pb-4 text-center">App Development Services</h1>
              <h2 className="text-blackk/60 font-medium py-4 sm:text-2xl text-xl sm:leading-tight leading-snug text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quo sunt tenetur rerum eius, dolorem harum expedita? Ullam molestiae consectetur quis inventore vero minima non. Enim suscipit totam nihil?</h2>
              <h2 className="text-blackk font-bold sm:text-4xl text-2xl sm:leading-tight leading-snug text-center"></h2>        
            </div>
            <div className="">
                <div className="grid grid-cols-3 gap-6 pt-16">
                  <div className="w-full h-full border-2 border-bloo rounded-lg shadow-md shadow-bloo/30 p-8 py-16 flex flex-col items-center justify-center">
                      <div className="h-1/2 rounded-full bg-bloo/10">
                          <FaAndroid size={60} className="text-bloo"/>
                      </div>
                      <div className="pt-6 h-full text-center">
                          <h1 className="font-semibold pb-2 text-xl">Android App Development</h1>
                          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quidem excepturi perspiciatis voluptas quaerat deserunt mollitia soluta? </p>
                      </div>
                  </div>
                  <div className="w-full h-full border-2 border-bloo rounded-lg shadow-md shadow-bloo/30 p-8 py-16 flex flex-col items-center justify-center">
                      <div className="h-1/2 rounded-full bg-bloo/10">
                          <FaAppStoreIos size={60} className="text-bloo"/>
                      </div>
                      <div className="pt-6 h-full text-center">
                          <h1 className="font-semibold pb-2 text-xl">iOS App Development</h1>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quidem excepturi perspiciatis voluptas quaerat deserunt mollitia soluta?</p>
                      </div>
                  </div>
                  <div className="w-full h-full border-2 border-bloo rounded-lg shadow-md shadow-bloo/30 p-8 py-16 flex flex-col items-center justify-center">
                      <div className="h-1/2 rounded-full bg-bloo/10">
                        <GrCloudSoftware size={60} className="text-bloo"/>
                      </div>
                      <div className="pt-6 h-full text-center">
                          <h1 className="font-semibold pb-2 text-xl">SAAS Development</h1>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quidem excepturi perspiciatis voluptas quaerat deserunt mollitia soluta?</p>    
                      </div>
                  </div>
                  <div className="w-full h-full border-2 border-bloo rounded-lg shadow-md shadow-bloo/30 p-8 py-16 flex flex-col items-center justify-center">
                      <div className="h-1/2 rounded-full bg-bloo/10">
                        <FaLaptopCode size={60} className="text-bloo"/>
                      </div>
                      <div className="pt-6 h-full text-center">
                          <h1 className="font-semibold pb-2 text-xl">Web App Development</h1>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quidem excepturi perspiciatis voluptas quaerat deserunt mollitia soluta?</p>    
                      </div>
                  </div>
                  <div className="w-full h-full border-2 border-bloo rounded-lg shadow-md shadow-bloo/30 p-8 py-16 flex flex-col items-center justify-center">
                      <div className="h-1/2 rounded-full bg-bloo/10">
                        <IoIosChatboxes size={60} className="text-bloo"/>
                      </div>
                      <div className="pt-6 h-full text-center">
                          <h1 className="font-semibold pb-2 text-xl">Chat Bot Development</h1>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quidem excepturi perspiciatis voluptas quaerat deserunt mollitia soluta?</p>    
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>


          <div className="py-28 relative font-manrope mx-auto px-1 sm:max-w-7xl w-screen">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
              <div className="relative flex items-center justify-center text-center scale-90 w-full h-full rounded-xl">
                <img src={consultancy} alt="" className="absolute inset-0 object-cover w-full h-full rounded-xl"/>
                <div className="absolute inset-0 w-full h-full bg-cyan-300/90 rounded-xl"></div>
                <div className="absolute inset-0 flex flex-col gap-6 text-white font-extrabold text-6xl text-left p-8">
                  <h1 >Consultancy Services</h1>
                  <FaPeopleArrows size={100} className="text-white"/>
                </div>
                
              </div>
              <div>
                <div className="py-6 flex flex-row gap-10 items-center justify-center">
                    <FaComputer size={190} className="text-bloo"/>
                    <p className="text-wrap text-lg">
                        <span className="text-lg font-semibold">App Consulting: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minima, magnam vitae eos fugit eligendi quae quam? Aspernatur adipisci voluptatum nihil. Enim, natus voluptatibus similique dolorum minus reiciendis optio dolores.
                    </p>
                </div>
                <div className="py-6 flex flex-row gap-10 items-center justify-center">
                    <MdDesignServices size={190} className="text-bloo"/>
                    <p className="text-wrap text-lg">
                        <span className="text-lg font-semibold">Design & UI / UX Consulting: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minima, magnam vitae eos fugit eligendi quae quam? Aspernatur adipisci voluptatum nihil. Enim, natus voluptatibus similique dolorum minus reiciendis optio dolores.
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Technical Services */}
          </div>
          
        </div>
      )
    }
export default Servmain; 