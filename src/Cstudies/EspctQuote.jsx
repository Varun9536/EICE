import React from "react";
import Footer from "../Othercomps/Footer";
import Copyright from "../Othercomps/Copyright";

import temp from "../assets/Compressed/temp.png";
import temp2 from "../assets/Compressed/temp2.png";
import espctquote1 from "../assets/Compressed/espctquote1.png";
import espctquote2 from "../assets/Compressed/espctquote2.png";

import { GiVirtualMarker } from "react-icons/gi";

function EspctQuote() {
  return (
    <div className="text-justify">
      <div className="max-w-7xl text-justify mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
            ESPCT Quote
          </h1>
          <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            A Sales and Quotation Tool
          </h2>
          <p className="font-medium max-w-4xl mx-auto text-justify text-blackk/60 sm:text-xl text-lg pt-4 px-4">
            A web-based sales automation and quotation tool for engineering
            products, offering customizable configurations, admin-assisted
            optimization, and interactive user support.
          </p>
          <div className="w-full max-w-7xl mx-auto items-center justify-center pt-8 pb-4 grid grid-cols-2 gap-4">
            <img
              src={espctquote1}
              alt=""
              className="w-full h-full object-fit"
            />
            <img
              src={espctquote2}
              alt=""
              className="w-full h-full object-fit"
            />
          </div>
        </div>
        <div className="w-full pb-6">
          <h2 className="text-blackk max-w-3xl pb-2 font-bold text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
            Key Challenges
          </h2>
          <div className="max-w-3xl  mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4 ">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                01
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Developing a user-friendly web interface for complex engineering
                product configurations
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                02
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Integrating admin support for optimal assembly suggestions and
                quotations
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                03
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Implementing a system for real-time user-admin communication
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                04
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Ensuring accurate and up-to-date product information across
                various systems and components
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                05
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Balancing user customization options with admin-guided
                recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
            About Our Client
          </h1>
          <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
            ESPCT : ESP Completion Technologies
          </h2>
          <p className="font-medium text-blackk/60 sm:text-xl text-lg pt-4">
            ESPCT designs, manufactures and installs proprietary completion
            equipment for electric submersible pump (ESP) systems to meet the
            needs of ESP OEMs and E&P operators. ESPCT is headquartered in
            Missouri City, Texas with three service centers located across the
            United States. They specialize in dual parallel and dual concentric
            installations, providing all equipment as a integrated system from
            the wellhead to the motor base. Having hundreds of successful
            installations, ESPCT is a leader in the submersible pump field.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-20 pb-6">
          <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
            Unlocking Success
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 pb-20">
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="w-full h-full items-center justify-start px-2 pb-2">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col p-2 text-start justify-end">
                  <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl">
                    IDEATION:
                  </h1>
                  <p className="z-20 font-medium text-blackk/60 sm:text-xl text-lg">
                    We envisioned a comprehensive web-based tool that would
                    simplify the complex process of configuring and quoting
                    engineering products. Our focus was on creating a platform
                    that balances user flexibility with expert guidance to
                    ensure optimal product selection and pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                <GiVirtualMarker size={50} className="text-bloo" />
              </div>
              <div>
                <div className="flex flex-col p-2 text-start justify-end ">
                  <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl">
                    OUR APPROACH
                  </h1>
                  <p className="z-20 font-medium text-blackk/60 sm:text-xl text-lg">
                    We prioritized user experience by developing an intuitive
                    interface that allows for easy product configuration. By
                    integrating admin support, we aimed to provide expert
                    guidance throughout the quotation process. We also
                    implemented a communication system to facilitate user-admin
                    interactions, ensuring that customers can make informed
                    decisions with professional assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer p-4 bg-zinc-50 rounded-md overflow-hidden shadow-sm shadow-zinc-50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-zinc-50 border-transparent hover:border-gray-200 ">
            <div className="group-hover:scale-[.98] transition duration-200 grid grid-cols-1 gap-3">
              <div className="flex w-full h-full items-center justify-start px-2 pb-2">
                <div className="grid grid-cols-2 gap-0">
                  <GiVirtualMarker size={50} className="text-bloo" />
                </div>
              </div>
              <div>
                <div className="flex flex-col p-2 text-start">
                  <h1 className="text-blackk font-bold text-xl pt-1 pb-3 sm:text-2xl">
                    OUTCOMES
                  </h1>
                  <p className="z-20 font-medium text-blackk/60 sm:text-xl text-lg">
                    The ESPCT Quote tool has revolutionized the sales process
                    for engineering products by providing a user-friendly
                    platform for configuration and quotation. Its ability to
                    combine user customization with admin-guided optimization
                    has significantly improved the accuracy and efficiency of
                    the quoting process. The implementation of a review and Q&A
                    system has enhanced customer satisfaction by providing
                    direct access to expert advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-20 px-4">
        <h2 className="text-blackk max-w-3xl pb-2 font-bold text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
          Project Outcomes
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col py-4 gap-4">
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              01
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Successfully developed a web-based sales and quote tool for
              engineering products
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              02
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Implemented user-configurable options for tools and assemblies
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              03
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Integrated admin support for suggesting optimal assemblies and
              providing best quotes
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              04
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Created a review and Q&A system for users to interact with admins
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              05
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Streamlined the quotation process for complex engineering systems
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default EspctQuote;
