/* eslint-disable react/jsx-key */
import React from "react";
import tata from "../assets/tata.png";
import indianoil from "../assets/indianoil.png";
import pandg from "../assets/pandg.png";
import halli from "../assets/halli.png";
import NIC from '../assets/NIC.png';
import IIC from '../assets/IIC.png';

import salesvu from '../assets/salesvu.png';
import wapcos from '../assets/wapcos.png';
import geologix from '../assets/geologix.png';
import dgh from '../assets/dgh.png';
import nrf from '../assets/nrf.png';
import slb from '../assets/slb.png';

import Rottextt from "./subcomps/Rottextt";

function Clients()
{
    return (
        <div className="font-manrope flex flex-col justify-center
                        2xl:text-5xl 2xl:mt-20 2xl:mb-20
                        mt-8 -mb-12 text-3xl">
            <div className="">
                <div className="rounded-lg">
                    <div className="2xl:pt-24 2xl:pb-24
                                    pb-8">
                        <h1 className="text-center items-center justify-center 2xl:p-0 px-0 pt-8">
                            <span className="text-muted font-bold 2xl:px-0 px-4">Proudly serving{' '}</span><span className="text-bloo font-semibold 2xl:-ml-0 -ml-4"><br className="2xl:hidden"/> Global Clients</span><span className="text-muted font-bold ">{' '}with <br className="2xl:hidden"/>excellence</span>
                        </h1>
                    </div>
                    <div className="bg-white 2xl:pl-[240px] 2xl:pr-[240px] pt-10 pb-10">
                        
                    <Rottextt
                        divs={[
                        <div className="bg-white 2xl:scale-100 scale-150">
                            <div className="flex items-center justify-center
                                            2xl:h-[100px]">
                                <div className="grid  
                                                2xl:grid-cols-11 2xl:scale-[0.8] 2xl:p-0
                                                pl-12 pr-12 grid-cols-7 gap-4">
                                    {/* extra divs act as spacers */}
                                    <div className="2xl:hidden"></div>
                                    <div className="grid items-center justify-center scale-[0.9]  hover:saturate-100 ">
                                        <img src={IIC} alt="" className=""/>
                                    </div>
                                        <div></div>
                                    <div className="grid scale-[1.30] items-center justify-center  hover:saturate-100 ">
                                        <img src={tata} alt="" className=""/>
                                    </div>
                                        <div></div>
                                    <div className="grid items-center justify-center  hover:saturate-100 ">
                                        <img src={indianoil} alt="" />
                                    </div>
                                        <div></div>
                                    <div className="2xl:hidden"></div>
                                    <div className="grid items-center justify-center  hover:saturate-100 ">
                                        <img src={pandg} alt="" />   
                                    </div>
                                        <div></div>
                                    <div className="grid items-center justify-center  hover:saturate-100 ">
                                        <img src={halli} alt="" />   
                                    </div>
                                        <div></div>
                                    <div className="grid items-center justify-center scale-[1.2]  hover:saturate-100">
                                        <img src={NIC} alt="" />   
                                    </div>
                                </div>
                            </div>
                        </div>,

                        <div className="bg-white 2xl:scale-100 scale-150">
                            <div className="flex items-center justify-center
                                            2xl:h-[100px]">
                                <div className="grid  
                                                2xl:grid-cols-11 2xl:scale-[0.8] 2xl:p-0
                                                pl-12 pr-12 grid-cols-7 gap-4">
                                    {/* extra divs act as spacers */}
                                    <div className="2xl:hidden"></div>
                                    <div className="grid items-center justify-center scale-[0.8]  hover:saturate-100">
                                        <img src={geologix} alt="" className=""/>
                                    </div>
                                        <div></div>
                                    <div className="grid scale-[0.75] items-center justify-center  hover:saturate-100">
                                        <img src={salesvu} alt="" className=""/>
                                    </div>
                                        <div></div>
                                    <div className="grid items-center justify-center  hover:saturate-100 ">
                                        <img src={slb} alt="" />
                                    </div>
                                        <div></div>
                                    <div className="2xl:hidden"></div>
                                    <div className="grid scale-[0.75] items-center justify-center  hover:saturate-100 ">
                                        <img src={nrf} alt="" />   
                                    </div>
                                        <div></div>
                                    <div className="grid items-center justify-center  hover:saturate-100 ">
                                        <img src={dgh} alt="" />   
                                    </div>
                                        <div></div>
                                    <div className="grid items-center justify-center scale-[1.2]  hover:saturate-100 ">
                                        <img src={wapcos} alt="" />   
                                    </div>
                                </div>
                            </div>
                        </div>,
                        
                        ]}
                        interval={3500}
                    />
                    </div>
                    <div className="pt-8 pb-12"></div>
                </div>
            </div>
        </div>
    )
}

export default Clients;