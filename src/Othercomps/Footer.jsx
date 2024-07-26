import React from "react";
import x from "../assets/x.svg";
import linkedin from "../assets/linkedin.svg";
import fb from "../assets/fb.svg";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { Routes, Route, Outlet, NavLink, Link } from "react-router-dom";

function Footer() {
  const [email, setemail] = useState("");

  const putdetail = (e) => {
    setemail(e.target.value);
  };

  const printvalue = async () => {
    let a = await fetch(
      "https://eice-website.onrender.com/v1/newsletter/email",
      {
        method: "post",
        body: JSON.stringify({ email: email }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    a = await a.json();
    if (a.result === "successful") {
      console.log(a.response);
      alert(`Subscribed Successfully`);
    }
    console.log(a);
  };

  return (
    <footer className="bg-white text-manrope lg:py-12 py-20 px-2 lg:max-w-7xl w-screen mx-auto">
      <div className="container mx-auto flex flex-row flex-wrap gap-8 w-full">
        {/* Company Info */}
        <div className="px-3 col-span-1 md:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block mb-4">
            <img src={logo} alt="EICE Logo" className="h-12 w-auto" />
          </Link>
          <p className="font-medium text-blackk/60 sm:text-xl text-lg text-justify pb-6">
            EICE Technology is an outstanding software development company with
            deep domain knowledge, well-designed processes, and technical
            expertise. We have a highly skilled team of software engineers with
            expertise in advanced technologies such as GIS, IoT, Blockchain,
            Cloud, Data Analytics, DevOps and Generative Artificial
            Intelligence. Our mission is to develop innovative and scalable
            digital products and services that drive business transformation and
            differentiate our company from the competition. Our expertise lies
            in Financial Services and Enterprise Services. Our headquarters are
            in Houston, Texas, and we have offices in Noida, India, and Delhi,
            India.
          </p>
          <div className="flex space-x-4">
            <Link
              to="https://twitter.com/EICE_Int"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={x}
                alt="Twitter"
                className="h-6 w-6 hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/company/eice-technologies-private-ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-6 w-6 hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link
              to="https://www.facebook.com/Eicetechnologies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={fb}
                alt="Facebook"
                className="h-6 w-6 hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
        </div>

        {/* Company Links */}

        {/* Services Links */}
        {/* <div className="">
      <h3 className="font-bold text-lg mb-4">Services</h3>
      <div className="space-y-2 space-x-2 items-center justify-center text-center flex flex-wrap  text-sm">
        <a href="/application-services" className="hover:underline">Application Services</a>
        <a href="/consultancy-services" className="hover:underline">Consultancy Services</a>
  
      </div>
    </div> */}

        <div className="flex flex-col text-start">
          <h1 className="px-3 py-2 text-lg font-bold">
            Services and Technologies
          </h1>
          <div className="flex flex-row flex-wrap">
            {/* <Link to="/services-digitaltransformation" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Digital Transformation</Link>
          <Link to="/services-aiml" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">AIML</Link>
          <Link to="/services-iot" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">IOT</Link>
          <Link to="/services-devops" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">DevOps</Link>
          <Link to="/services-uiuxconsulting" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">UI/UX Consulting</Link>
          <Link to="/services-aspdotnet" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">ASP.NET</Link>
          <Link to="/services-react" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">React</Link>
          <Link to="/services-reactnative" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">React Native</Link>
          <Link to="/services-laravel" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Laravel</Link>
          <Link to="/services-mysql" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">MySQL</Link>
          <Link to="/services-android" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Android App Development</Link>
          <Link to="/services-ios" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">iOS App Development</Link>
          <Link to="/services-enterpriseappdev" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Web App Development</Link>
          <Link to="/services-blockchain" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Blockchain</Link>
          <Link to="/services-appconsulting" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">App Consulting</Link>
          <Link to="/services-softwaretesting" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Software Testing</Link>
          <Link to="/services-flutter" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Flutter</Link>
          <Link to="/services-php" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">PHP</Link>
          <Link to="/services-ionic" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Ionic</Link>
          <Link to="/services-swift" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Swift</Link>
          <Link to="/services-kotlin" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Kotlin</Link>
          <Link to="/services-objectivec" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">ObjectiveC</Link>
          <Link to="/services-vue" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Vue</Link>
          <Link to="/services-angular" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Angular</Link>
          <Link to="/services-jquery" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Jquery</Link>
          <Link to="/services-typescript" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Typescript</Link>
          <Link to="/services-postgresql" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">PostgreSQL</Link>
          <Link to="/services-mongodb" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">MongoDB</Link>
          <Link to="/services-dynamodb" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">DynamoDB</Link>
          <Link to="/services-django" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Django</Link>
          <Link to="/services-oracle" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Oracle</Link>
          <Link to="/services-apache" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Apache</Link>
          <Link to="/services-rubyonrails" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Ruby on Rails</Link>
          <Link to="/services-express" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Express</Link>
          <Link to="/services-docker" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Docker</Link>
          <Link to="/services-firebase" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Firebase</Link>
          <Link to="/services-nodejs" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">NodeJS</Link>
          <Link to="/services-git" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Git</Link>
          <Link to="/services-kubernetes" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Kubernetes</Link>
          <Link to="/services-jira" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Jira</Link>
          <Link to="/services-ansible" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Ansible</Link>
          <Link to="/services-aws" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">AWS</Link>
          <Link to="/services-azure" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Azure</Link> */}

            <Link
              to="/services-digitaltransformation"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              Digital Transformation
            </Link>
            <Link
              to="/services-aiml"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              AI/ML
            </Link>
            <Link
              to="/services-blockchain"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              Blockchain
            </Link>
            <Link
              to="/services-iot"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              IOT
            </Link>
            <Link
              to="/services-uiuxconsulting"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              UI/UX Consulting
            </Link>
            <Link
              to="/services-android"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              Desktop and Mobile App Development
            </Link>
            <Link
              to="/services-webdevelopment"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              Web Development
            </Link>
            <Link
              to="/services-devops"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              DevOps
            </Link>
            <Link
              to="/services-cloud"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              Cloud Services
            </Link>
            <Link
              to="/services-softwaretesting"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              Software Testing
            </Link>
          </div>
        </div>

        <div className="flex flex-col text-start">
          <h1 className="px-3 py-2 text-lg font-bold">Company</h1>
          <div className="flex flex-row flex-wrap">
            <Link
              to="/about"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              About Us
            </Link>
            <Link
              to="/resources"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              Contact Us
            </Link>
            <Link
              to="/industries"
              className="text-blackk/60 sm:text-xl text-lg hover:text-blackk font-semibold hover:underline py-1 px-3"
            >
              Industries
            </Link>
          </div>
        </div>

        {/* Newsletter Subscription */}
        {/* <div>
      <h3 className="font-bold text-lg mb-4">Subscribe to our Newsletter</h3>
      <div className="flex flex-col gap-4">
      <input 
          type="email" 
          placeholder="your-email@provider.com" 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
          onChange={putdetail}
          required
        />
        <button 
          type="submit"
          className="bg-bloo w-1/2 text-white px-6 py-2 rounded-md hover:bg-bloo/80 transition-colors duration-300"
          onClick={printvalue}
        >
          Subscribe
        </button>
      </div>
    </div> */}
      </div>
    </footer>
  );
}

export default Footer;
