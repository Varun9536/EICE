import React from "react";
import tata from "../assets/Compressed/tata.png";
import indianoil from "../assets/Compressed/indianoil.png";
import pandg from "../assets/Compressed/pandg.png";
import halli from "../assets/Compressed/halli.png";
import NIC from '../assets/Compressed/NIC.png';
import IIC from '../assets/Compressed/IIC.png';
import salesvu from '../assets/Compressed/salesvu.png';
import wapcos from '../assets/Compressed/wapcos.png';
import geologix from '../assets/Compressed/geologix.png';
import dgh from '../assets/Compressed/dgh.png';
import nrf from '../assets/Compressed/nrf.png';
import slb from '../assets/Compressed/slb.png';

import Rottextt from "./subcomps/Rottextt";

function Clients() {
    const clientGroups = [
        [IIC, tata, indianoil, pandg, halli, NIC],
        [geologix, salesvu, slb, nrf, dgh, wapcos]
    ];

    return (
        <div className="font-manrope flex flex-col justify-center py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-12 sm:mb-16 lg:mb-20">
                    <span className="text-muted font-bold">Proudly serving </span>
                    <span className="text-bloo font-semibold">Global Clients</span>
                    <span className="text-muted font-bold"> with excellence</span>
                </h1>
                
                <div className="bg-white py-8 sm:py-12">
                    <Rottextt
                        divs={clientGroups.map((group, index) => (
                            <ClientGroup  key={index} clients={group} />
                        ))}
                        interval={3500}
                    />
                </div>
            </div>
        </div>
    )
}

function ClientGroup({ clients }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clients.map((client, index) => (
                <div key={index} className="flex items-center justify-center w-32 h-20 sm:w-40 sm:h-24">
                    <img src={client} alt="" className="max-w-full max-h-full object-contain hover:saturate-100" />
                </div>
            ))}
        </div>
    );
}

export default Clients;