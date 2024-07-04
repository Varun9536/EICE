import React from "react";
import { GoLaw } from "react-icons/go";
import { FaBusinessTime, FaOilCan, FaSyringe } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import { SiEducative } from "react-icons/si";
import { BiPencil } from "react-icons/bi";
import { MdPermMedia } from "react-icons/md";
import { BsTruck } from "react-icons/bs";

function Indusmain()
{
    return (
        <div className="font-manrope lg:max-w-7xl mx-auto w-screen 2xl:py-20 py-44">
            <div>
                <h1 className="text-bloo font-bold sm:text-3xl text-2xl pb-4 text-center">Core Industries</h1>
                <h2 className="text-blackk font-bold sm:text-4xl text-3xl sm:leading-tight leading-snug text-center">How we affect the world with our work</h2>
            </div>
            <div className="items-center justify-center grid lg:grid-cols-2 grid-cols-1 gap-12 py-12 px-2">
                <a href="home" className="cursor-pointer border-2 border-bloo/50 shadow-sm shadow-bloo/70 w-full h-full rounded-md p-4 group hover:bg-bloo/5  transition duration-200">
                    <div className="flex flex-row gap-8 group-hover:scale-[.98] transition duration-300">
                        <div className="flex items-center justify-center">
                            <div className="p-4 rounded-full bg-bloo/20">
                                <FaOilCan size={60} className="text-blackk"/>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-2xl py-2">Oil and Gas</h1>
                            <p className="font-bold text-blackk/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo quibusdam aspernatur qui reiciendis et voluptatum distinctio! Neque aut eum nobis reprehenderit ducimus quasi ex iste atque, facilis, eos dolore!</p>
                        </div>
                    </div>
                </a>
                <a className="cursor-pointer border-2 border-purple-400/50 shadow-sm shadow-purple-400/70 w-full h-full rounded-md p-4 group hover:bg-purple-400/5  transition duration-200">
                    <div className="flex flex-row gap-8 group-hover:scale-[.98] transition duration-300">
                        <div className="flex items-center justify-center">
                            <div className="p-4 rounded-full bg-purple-400/20">
                                <BiPencil size={60} className="text-blackk"/>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-2xl py-2">Educational</h1>
                            <p className="font-bold text-blackk/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo quibusdam aspernatur qui reiciendis et voluptatum distinctio! Neque aut eum nobis reprehenderit ducimus quasi ex iste atque, facilis, eos dolore!</p>
                        </div>
                    </div>
                </a>
                <a href="home" className="cursor-pointer border-2 border-emerald-400/50 shadow-sm shadow-emerald-400/70 w-full h-full rounded-md p-4 group hover:bg-emerald-400/5  transition duration-200">
                    <div className="flex flex-row gap-8 group-hover:scale-[.98] transition duration-300">
                        <div className="flex items-center justify-center">
                            <div className="p-4 rounded-full bg-emerald-400/20">
                                <GoLaw size={60} className="text-blackk"/>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-2xl py-2">Legal</h1>
                            <p className="font-bold text-blackk/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo quibusdam aspernatur qui reiciendis et voluptatum distinctio! Neque aut eum nobis reprehenderit ducimus quasi ex iste atque, facilis, eos dolore!</p>
                        </div>
                    </div>
                </a>
                <a className="cursor-pointer border-2 border-amber-400/50 shadow-sm shadow-amber-400/70 w-full h-full rounded-md p-4 group hover:bg-amber-400/5  transition duration-200">
                    <div className="flex flex-row gap-8 group-hover:scale-[.98] transition duration-300">
                        <div className="flex items-center justify-center">
                            <div className="p-4 rounded-full bg-amber-400/20">
                                <FaSyringe size={60} className="text-blackk"/>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-2xl py-2">Healthcare</h1>
                            <p className="font-bold text-blackk/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo quibusdam aspernatur qui reiciendis et voluptatum distinctio! Neque aut eum nobis reprehenderit ducimus quasi ex iste atque, facilis, eos dolore!</p>
                        </div>
                    </div>
                </a>
                <a href="home" className="cursor-pointer border-2 border-pink-400/50 shadow-sm shadow-pink-400/70 w-full h-full rounded-md p-4 group hover:bg-pink-400/5  transition duration-200">
                    <div className="flex flex-row gap-8 group-hover:scale-[.98] transition duration-300">
                        <div className="flex items-center justify-center">
                            <div className="p-4 rounded-full bg-pink-400/20">
                                <MdPermMedia size={60} className="text-blackk"/>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-2xl py-2">Digital Media</h1>
                            <p className="font-bold text-blackk/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo quibusdam aspernatur qui reiciendis et voluptatum distinctio! Neque aut eum nobis reprehenderit ducimus quasi ex iste atque, facilis, eos dolore!</p>
                        </div>
                    </div>
                </a>
                <a className="cursor-pointer border-2 border-rose-600/50 shadow-sm shadow-rose-600/70 w-full h-full rounded-md p-4 group hover:bg-rose-600/5  transition duration-200">
                    <div className="flex flex-row gap-8 group-hover:scale-[.98] transition duration-300">
                        <div className="flex items-center justify-center">
                            <div className="p-4 rounded-full bg-rose-600/20">
                                <IoIosCash size={60} className="text-blackk"/>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-2xl py-2">Financial</h1>
                            <p className="font-bold text-blackk/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo quibusdam aspernatur qui reiciendis et voluptatum distinctio! Neque aut eum nobis reprehenderit ducimus quasi ex iste atque, facilis, eos dolore!</p>
                        </div>
                    </div>
                </a>
                <a href="home" className="cursor-pointer border-2 border-amber-600/50 shadow-sm shadow-amber-600/70 w-full h-full rounded-md p-4 group hover:bg-amber-600/5  transition duration-200">
                    <div className="flex flex-row gap-8 group-hover:scale-[.98] transition duration-300">
                        <div className="flex items-center justify-center">
                            <div className="p-4 rounded-full bg-amber-600/20">
                                <BsTruck size={60} className="text-blackk"/>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-2xl py-2">Logistics</h1>
                            <p className="font-bold text-blackk/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo quibusdam aspernatur qui reiciendis et voluptatum distinctio! Neque aut eum nobis reprehenderit ducimus quasi ex iste atque, facilis, eos dolore!</p>
                        </div>
                    </div>
                </a>
                <a className="cursor-pointer border-2 border-rose-400/50 shadow-sm shadow-rose-400/70 w-full h-full rounded-md p-4 group hover:bg-rose-400/5  transition duration-200">
                    <div className="flex flex-row gap-8 group-hover:scale-[.98] transition duration-300">
                        <div className="flex items-center justify-center">
                            <div className="p-4 rounded-full bg-rose-400/20">
                                <FaBusinessTime size={60} className="text-blackk"/>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-2xl py-2">Enterprise</h1>
                            <p className="font-bold text-blackk/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo quibusdam aspernatur qui reiciendis et voluptatum distinctio! Neque aut eum nobis reprehenderit ducimus quasi ex iste atque, facilis, eos dolore!</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Indusmain;