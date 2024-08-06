import React from "react";
import Footer from "../Othercomps/Footer";
import Copyright from "../Othercomps/Copyright";

import temp from "../assets/Compressed/temp.png";
import temp2 from "../assets/Compressed/temp2.png";
import espctquote1 from "../assets/Compressed/espctquote1.png";
import espctquote2 from "../assets/Compressed/espctquote2.png";
import petrosim1 from "../assets/Compressed/kbcchempetro1.png";
import petrosim2 from "../assets/Compressed/kbcchempetro2.png";
import adanigas1 from "../assets/Compressed/adanigas1.png";
import adanigas2 from "../assets/Compressed/adanigas2.png";
import datamgmt1 from "../assets/Compressed/datamgmt1.png";
import datamgmt2 from "../assets/Compressed/datamgmt2.png";
import peep1 from "../assets/Compressed/Peep1.png";
import peep2 from "../assets/Compressed/Peep2.png";
import voicecall1 from "../assets/Compressed/voicecall1.png";
import voicecall2 from "../assets/Compressed/voicecall2.png";

import { GiVirtualMarker } from "react-icons/gi";
import { Link } from "react-router-dom";

function VoiceCallAI() {
  return (
    <div className="text-justify">
      <div className="max-w-7xl text-justify mx-auto px-4 2xl:pt-12 pt-32">
        <div className="w-full">
          <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
            Voice Call Assistant
          </h1>
          <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-5xl py-1">
            Developement of an Advanced AI Voice Call Assistant: Revolutionizing
            Customer Interaction and Efficiency
          </h2>
          <p className="font-medium max-w-4xl mx-auto text-justify text-blackk/60 sm:text-xl text-lg pt-4 px-4">
            For our client, we meticulously developed an AI-based voice call
            assistant technology by integrating large language models (LLMs),
            advanced speech-to-text, natural language processing (NLP), and
            text-to-speech methodologies. This integration ensured seamless,
            natural, and effective communication with their customers.
          </p>
          <div className="w-full h-full max-w-7xl mx-auto items-center justify-center pt-12 pb-4 flex flex-row flex-wrap gap-16">
            <img
              src={voicecall1}
              alt=""
              className="h-[400px] object-contain rounded-lg"
            />
            <div className="relative">
              <div className="w-full h-full absolute bg-bloo/10  rounded-lg"></div>
              <img
                src={voicecall2}
                alt=""
                className="h-[400px] z-20 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full pb-6 text-left">
          <h2 className="text-blackk max-w-3xl pb-2 font-bold text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] pt-12">
            Key Challenges
          </h2>
          <div className="max-w-3xl  mx-auto flex flex-col py-4 gap-4">
            <div className="flex gap-4 ">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                01
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                {" "}
                Ensuring accurate speech recognition across diverse accents and
                languages.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                02
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Maintaining real-time response generation and interaction
                throughout the call.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                03
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Integrating sentiment analysis for improved emotional
                understanding and response.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                04
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Development of robust contextual awareness for more personalized
                interactions.
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
                05
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
                Ensuring data privacy and security during the storage and
                analysis of conversations.
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
          <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1"></h2>
          <p className="font-medium text-blackk/60 sm:text-xl text-lg pt-4">
            Our client is a leading IT consulting company operating
            internationally, renowned for delivering innovative technology
            solutions. They specialize in digital transformation, cloud
            computing, and cybersecurity services, helping businesses optimize
            their IT infrastructure. With a commitment to excellence, they
            empower organizations to achieve their strategic goals efficiently
            and securely.
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
                    Our client aimed to significantly enhance their customer
                    service efficiency, scalability, and cost-effectiveness. By
                    leveraging cutting-edge natural language processing (NLP)
                    and machine learning technologies, we designed an advanced
                    AI-based voice call assistant that would function as a
                    virtual receptionist, conduct surveys, and serve as a
                    customer support agent. Our overarching mission was to
                    AUTOMATE, OPTIMIZE & GROW their customer interactions and
                    business processes, thereby driving operational excellence
                    and fostering sustainable business growth.
                  </p>
                </div>
                {/* Recognizing the transformative potential of AI, we
                    envisioned a solution that could streamline repetitive tasks
                    and deliver highly personalized interactions. We set out to
                    create an advanced AI-based voice call assistant that would
                    function as a virtual receptionist, conduct surveys, and
                    serve as a customer support agent.  */}
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
                    We employed a multi-phase approach, beginning with extensive
                    research and development to build a robust AI framework
                    tailored to the client’s needs. The system was designed to
                    handle outbound calls, utilizing NLP to interact based on
                    predefined prompts. We incorporated advanced speech
                    recognition technology for real-time transcription and
                    response generation. Emphasizing customization, scalability,
                    and seamless integration, we created a flexible solution
                    that aligned with the client’s operational goals. Our core
                    mission was to AUTOMATE, OPTIMIZE & GROW their customer
                    interactions and business processes.
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
                    The AI-based voice call assistant significantly enhanced
                    both operational efficiency and customer engagement. The
                    client observed a notable increase in customer satisfaction,
                    attributed to the assistant’s round-the-clock availability
                    and highly personalized interactions. The system’s
                    scalability empowered the client to manage a substantial
                    volume of calls seamlessly, without incurring additional
                    staffing costs. Its robust integration capabilities ensured
                    smooth incorporation into existing workflows, while the
                    multi-language support feature broadened the client’s reach
                    on a global scale.
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
              Elevated Customer Satisfaction: The AI assistant's 24/7
              availability and tailored interactions enhanced the customer
              experience, leading to higher satisfaction and loyalty.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              02
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Streamlined Operational Efficiency: Automation of call handling
              processes significantly decreased operational burdens, enabling
              staff to concentrate on strategic and high-value activities.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              03
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Optimized Cost Efficiency: The flexible pay-as-you-go pricing
              model dramatically reduced operational expenses, offering a
              cost-effective alternative to conventional call center solutions.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              04
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Dynamic Scalability: The solution adeptly managed large volumes of
              calls and seamlessly scaled with the client’s growth, ensuring
              consistent service quality during peak periods.
            </p>
          </div>
          <div className="flex gap-4 rounded-xl border-2 border-blue-900/60 p-4 shadow-md shadow-blue-900/20">
            <h1 className="text-bloo flex items-center justify-center h-full font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
              05
            </h1>
            <p className="font-medium text-blackk/60 sm:text-xl text-lg py-2">
              Advanced Analytics and Insights: Comprehensive transcriptions and
              sophisticated sentiment analysis delivered profound business
              insights, driving continuous improvement and strategic
              decision-making.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 bg-zinc-50">
        <h1 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2">
          More Like This
        </h1>
        <h2 className="text-blackk max-w-3xl pb-2 text-center font-bold text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px]">
          Take a look at other Case Studies
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 w-full">
          <div className="p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link
              to="/Casestudy/PetroSIM"
              className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <img
                  src={petrosim1}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    PetroSIM
                  </h3>
                  <p className="font-medium text-blackk/60 text-lg text-left">
                    Product Quality Assurance for Refinery Simulation Tool
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link
              to="/Casestudy/ReliMonitor"
              className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <img
                  src={temp}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    RE.LI Monitor
                  </h3>
                  <p className="font-medium text-blackk/60 text-lg text-left">
                    Developed a Real Time Sensor monitoring tool using SCADA
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="p-2 rounded-xl hover:scale-[.99] transition duration-300">
            <Link
              to="/Casestudy/EspctQuote"
              className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <img
                  src={espctquote1}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    ESPCT Quote
                  </h3>
                  <p className="font-medium text-blackk/60 text-lg text-left">
                    Web Based Sales and Quotation Tool
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default VoiceCallAI;
