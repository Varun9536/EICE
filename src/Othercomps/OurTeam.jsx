import React from "react";
import Footer from "./Footer";
import Copyright from "./Copyright";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import temp from "../assets/Compressed/temp.png";
import teamsbanner from "../assets/Compressed/teamsbanner.png";
import teamsbanner2 from "../assets/Compressed/teamsbanner2.png";
import teamsbanner11 from "../assets/Compressed/teamsbanner11.png";
import teamsbanner12 from "../assets/Compressed/teamsbanner12.png";
import teamsbanner13 from "../assets/Compressed/teamsbanner13.png";
import { Link } from "react-router-dom";

function OurTeam() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 300,
    autoplaySpeed: 0,
    cssEase: "linear",
    prevArrow: <button type="button" className="slick-prev">Previous</button>,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="-mt-6">
      <div className="relative w-full 2xl:pt-12 pt-32 pb-12 ">
        <img
          src={teamsbanner}
          alt=""
          className="-z-20 absolute inset-0 w-full h-full object-cover"
        />
        <h1 className="text-white font-bold text-center text-3xl lg:text-5xl py-16">
          Our Team
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl py-2">
          <h1>Our Leaders</h1>
          <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-5xl py-1">
            The driving force behind our innovation and success
          </h2>
          <p className="text-justify text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-4 text-2xl sm:leading-tight leading-snug">
            EICE's leadership team is a dynamic blend of creativity, vision, and
            strategic thinking. They inspire a culture of innovation and
            passion, driving our entire organization towards shared success.
            With a commitment to excellence and a collaborative spirit, our
            leaders foster a vibrant environment that empowers every member of
            the EICE family. Proudly operating from offices in India, the USA,
            and Canada, our team of experts is dedicated to delivering
            exceptional solutions and exceeding client expectations.
          </p>
        </div>
        <div className="py-12 grid grid-cols-3 gap-8 items-center justify-center w-full">
          <div className="w-full flex items-center justify-center ">
            <div className="flex bg-white shadow-lg shadow-blackk/20 p-8 rounded-md flex-col justify-center w-full">
              <img src="" alt="" />
              <h1 className="text-blackk  font-bold text-2xl sm:text-2xl md:text-3xl lg:text-[32px] py-1">
                Uma Nath Tripathi
              </h1>
              <h2 className="text-bloo font-bold sm:text-2xl text-2xl sm:leading-tight leading-snug">
                Director
              </h2>
              <h3 className="py-1 text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug">
                MBA (IIT Delhi)
              </h3>
              <h4 className="text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug py-1">
                Experience: 20+ Years
              </h4>
            </div>
          </div>
          <div className="w-full flex items-center justify-center ">
            <div className="flex bg-white shadow-lg shadow-blackk/20 p-8 rounded-md flex-col justify-center w-full">
              <img src="" alt="" />
              <h1 className="text-blackk  font-bold text-2xl sm:text-2xl md:text-3xl lg:text-[32px] py-1">
                Anupam Shukla
              </h1>
              <h2 className="text-bloo font-bold sm:text-2xl text-2xl sm:leading-tight leading-snug">
                Director
              </h2>
              <h3 className="py-1 text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug">
                MCA
              </h3>
              <h4 className="text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug py-1">
                Experience: 20+ Years
              </h4>
            </div>
          </div>
          <div className="w-full flex items-center justify-center ">
            <div className="flex bg-white shadow-lg shadow-blackk/20 p-8 rounded-md flex-col justify-center w-full">
              <img src="" alt="" />
              <h1 className="text-blackk  font-bold text-2xl sm:text-2xl md:text-3xl lg:text-[32px] py-1">
                Piyush Pandey
              </h1>
              <h2 className="text-bloo font-bold sm:text-2xl text-2xl sm:leading-tight leading-snug">
                Director
              </h2>
              <h3 className="py-1 text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug">
                Ph. D (IIT Roorkee)
              </h3>
              <h4 className="text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug py-1">
                Experience: 30+ Years
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-blackk font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-5xl py-1">
            Key Team Leads
          </h2>
          <p className="text-justify text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-4 text-2xl sm:leading-tight leading-snug">
            At EICE, our team is the backbone of our success. Our exceptional
            team leaders are the ones who help deliver projects to the best of
            our capability.
          </p>
        </div>
        <div className="py-4">
          <Slider className="w-full h-full" {...settings}>
            <div className="w-full flex items-center justify-center py-4 px-4">
              <div className="flex bg-white shadow-lg shadow-blackk/20 p-8 rounded-md flex-col justify-center w-full">
                <img src="" alt="" />
                <h1 className="text-blackk  font-bold text-2xl sm:text-2xl md:text-3xl lg:text-[32px] py-1">
                  Piyush Pandey
                </h1>
                <h2 className="text-bloo font-bold sm:text-2xl text-2xl sm:leading-tight leading-snug">
                  Director
                </h2>
                <h3 className="py-1 text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug">
                  Ph. D (IIT Roorkee)
                </h3>
                <h4 className="text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug py-1">
                  Experience: 30+ Years
                </h4>
              </div>
            </div>
            <div className="w-full flex items-center justify-center py-4 px-4">
              <div className="flex bg-white shadow-lg shadow-blackk/20 p-8 rounded-md flex-col justify-center w-full">
                <img src="" alt="" />
                <h1 className="text-blackk  font-bold text-2xl sm:text-2xl md:text-3xl lg:text-[32px] py-1">
                  Piyush Pandey
                </h1>
                <h2 className="text-bloo font-bold sm:text-2xl text-2xl sm:leading-tight leading-snug">
                  Director
                </h2>
                <h3 className="py-1 text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug">
                  Ph. D (IIT Roorkee)
                </h3>
                <h4 className="text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug py-1">
                  Experience: 30+ Years
                </h4>
              </div>
            </div>
            <div className="w-full flex items-center justify-center py-4 px-4">
              <div className="flex bg-white shadow-lg shadow-blackk/20 p-8 rounded-md flex-col justify-center w-full">
                <img src="" alt="" />
                <h1 className="text-blackk  font-bold text-2xl sm:text-2xl md:text-3xl lg:text-[32px] py-1">
                  Piyush Pandey
                </h1>
                <h2 className="text-bloo font-bold sm:text-2xl text-2xl sm:leading-tight leading-snug">
                  Director
                </h2>
                <h3 className="py-1 text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug">
                  Ph. D (IIT Roorkee)
                </h3>
                <h4 className="text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug py-1">
                  Experience: 30+ Years
                </h4>
              </div>
            </div>
            <div className="w-full flex items-center justify-center py-4 px-4">
              <div className="flex bg-white shadow-lg shadow-blackk/20 p-8 rounded-md flex-col justify-center w-full">
                <img src="" alt="" />
                <h1 className="text-blackk  font-bold text-2xl sm:text-2xl md:text-3xl lg:text-[32px] py-1">
                  Piyush Pandey
                </h1>
                <h2 className="text-bloo font-bold sm:text-2xl text-2xl sm:leading-tight leading-snug">
                  Director
                </h2>
                <h3 className="py-1 text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug">
                  Ph. D (IIT Roorkee)
                </h3>
                <h4 className="text-blackk/80 font-medium sm:text-xl text-xl sm:leading-tight leading-snug py-1">
                  Experience: 30+ Years
                </h4>
              </div>
            </div>
          </Slider>
        </div>
        <div className="max-w-7xl mx-auto w-full py-20">
            <h2 className="text-blackk  font-bold text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-5xl py-1">
                Teamwork is the only way we work
            </h2>
            <div className="pt-8 flex flex-col gap-8">
                <div className=" px-4">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 border-2 p-4 rounded-md">
                        <div className="col-span-2 w-full">
                            <h1 className="text-bloo font-bold text-xl sm:text-xl lg:text-2xl py-1">Innovation at Every Level</h1>
                            <p className="lg:text-justify text-left text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-1 text-2xl sm:leading-tight leading-snug">
                                Our employees are innovators at heart. They continually seek out new ideas, technologies, and methodologies to drive our projects forward.
                                This culture of innovation ensures that we stay ahead of our competition and deliver cutting edge solutions to our clients.
                            </p>
                        </div>
                        <img src={teamsbanner11} alt=""  className="lg:order-last order-first"/>
                    </div>
                </div>
                <div className=" px-4">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 border-2 p-4 rounded-md">
                        <div className="col-span-2 w-full">
                            <h1 className="text-bloo font-bold text-xl sm:text-xl lg:text-2xl py-1">Innovation at Every Level</h1>
                            <p className="lg:text-justify text-left text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-1 text-2xl sm:leading-tight leading-snug">
                                Our employees are innovators at heart. They continually seek out new ideas, technologies, and methodologies to drive our projects forward.
                                This culture of innovation ensures that we stay ahead of our competition and deliver cutting edge solutions to our clients.
                            </p>
                        </div>
                        <img src={teamsbanner12} alt=""  className="order-first "/>
                    </div>
                </div>
                <div className=" px-4">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 border-2 p-4 rounded-md">
                        <div className="col-span-2 w-full">
                            <h1 className="text-bloo font-bold text-xl sm:text-xl lg:text-2xl py-1">Innovation at Every Level</h1>
                            <p className="lg:text-justify text-left text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-1 text-2xl sm:leading-tight leading-snug">
                                Our employees are innovators at heart. They continually seek out new ideas, technologies, and methodologies to drive our projects forward.
                                This culture of innovation ensures that we stay ahead of our competition and deliver cutting edge solutions to our clients.
                            </p>
                        </div>
                        <img src={teamsbanner13} alt=""  className="lg:order-last order-first"/>
                    </div>
                </div>
            </div>
            
        </div>
        
      </div>
      <div className="relative py-12">
            <img src={teamsbanner2} alt="" className="-z-20 absolute inset-0 h-full w-full object-cover"/>
            <div className="max-w-7xl mx-auto w-full h-full px-4 py-12">
                <h2 className="text-white font-bold text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px]  py-1">
                    Come and Work with Us
                </h2>
                <p className="lg:text-justify text-left text-white font-semibold  mx-auto sm:text-2xl py-1 text-2xl sm:leading-tight leading-snug">Join our dynamic team and contribute to innovative solutions that drive success. At EICE, we value talent, creativity, and a passion for excellence</p>
                <div className="pt-4">
                    <Link to="/contact" className="">
                    <button className="w-full sm:w-auto py-4 px-24 font-semibold rounded transition duration-200 border-2 border-bloo bg-bloo text-white hover:bg-bloo/90 text-lg sm:text-xl">
                        Join Our Team
                    </button>
                    </Link>
                </div>
            </div>
        </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default OurTeam;
