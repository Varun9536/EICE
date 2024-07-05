import React from "react";
import x from '../assets/x.svg';
import linkedin from '../assets/linkedin.svg';
import fb from '../assets/fb.svg';
import logo from '../assets/logo.svg';
import { useState } from "react";

function Footer()
{
    const [email, setemail] = useState("")

    const putdetail = (e) =>
    {
        setemail(e.target.value)
    }

    const printvalue = async ()=>
    {
        let a = await fetch("https://eice-website.onrender.com/v1/newsletter/email", {
            method : 'post',
            body : JSON.stringify({email:email}),
            headers : {
                "Content-Type" : "application/json"
            }
        })

        a = await a.json()
        if(a.result==='successful')
            {
                console.log(a.response)
                alert(`Subscribed Successfully`)
            }
        console.log(a)
    }

    return (
        <footer className="bg-white text-manrope py-12 px-2 lg:max-w-7xl w-screen mx-auto">
  <div className="container mx-auto flex flex-row flex-wrap gap-8 w-full">
    {/* Company Info */}
    <div className="col-span-1 md:col-span-2 lg:col-span-1">
      <a href="/home" className="inline-block mb-4">
        <img src={logo} alt="EICE Logo" className="h-12 w-auto"/>
      </a>
      <p className="text-sm text-gray-600 mb-6">
      EICE Technology is an outstanding software development company with deep domain knowledge, well-designed processes, and technical expertise. We have a highly skilled team of software engineers with expertise in advanced technologies such as GIS, IoT, Blockchain, Cloud, Data Analytics, DevOps and Generative Artificial Intelligence.
      Our mission is to develop innovative and scalable digital products and services that drive business transformation and differentiate our company from the competition. Our expertise lies in Financial Services and Enterprise Services. Our headquarters are in Houston, Texas, and we have offices in Noida, India, and Delhi, India.
      </p> 
      <div className="flex space-x-4">
        <a href="https://twitter.com/EICE_Int" target="_blank" rel="noopener noreferrer">
          <img src={x} alt="Twitter" className="h-6 w-6 hover:opacity-80 transition-opacity"/>
        </a>
        <a href="https://www.linkedin.com/company/eice-technologies-private-ltd" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="h-6 w-6 hover:opacity-80 transition-opacity"/>
        </a>
        <a href="https://www.facebook.com/Eicetechnologies" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="Facebook" className="h-6 w-6 hover:opacity-80 transition-opacity"/>
        </a>
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
        <h1 className="py-2 text-lg font-bold">Services and Technologies</h1>
        <div className="flex flex-row flex-wrap">
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Android App Development</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">iOS App Development</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Web App Development</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">SAAS Development</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">AIML</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">IOT</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">DevOps</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Blockchain</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Digital Transformation</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">App Consulting</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">UI/UX Consulting</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Software Testing</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">React Native</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Flutter</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">PHP</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Ionic</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Swift</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Kotlin</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">React</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">ObjectiveC</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Vue</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Angular</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Jquery</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Typescript</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">MySQL</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">PostgreSQL</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">MongoDB</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">DynamoDB</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Django</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Oracle</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Apache</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Ruby on Rails</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">ASP.NET</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Express</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Laravel</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Docker</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Firebase</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">NodeJS</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Git</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Kubernetes</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Jira</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Ansible</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">AWS</a>
          <a href="/application-services" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Azure</a>
        </div>
      </div>

      <div className="flex flex-col text-start">
        <h1 className="py-2 text-lg font-bold">Company</h1>
        <div className="flex flex-row flex-wrap">
        <a href="/about" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">About Us</a>
        <a href="/resources" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Resources</a>
        <a href="/contact" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Contact Us</a>
        <a href="/industries" className="text-blackk/70 hover:text-blackk font-semibold hover:underline py-1 px-3">Industries</a>
        
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
    )
}

export default Footer;