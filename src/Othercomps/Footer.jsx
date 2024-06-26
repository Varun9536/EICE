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
        <footer className="bg-white text-manrope py-12 px-4 md:px-8 lg:px-16">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Company Info */}
    <div className="col-span-1 md:col-span-2 lg:col-span-1">
      <a href="/home" className="inline-block mb-4">
        <img src={logo} alt="EICE Logo" className="h-12 w-auto"/>
      </a>
      <p className="text-sm text-gray-600 mb-6">
        EICE is a global software services organization offering high-quality solutions to businesses.
        It services the IT requirements of multiple fortune 500 companies by utilizing specialized domain knowledge, 
        best-of-breed technologies, rapidly deployable proprietary frameworks/solutions and flexible management models.
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
    <div>
      <h3 className="font-bold text-lg mb-4">Company</h3>
      <ul className="space-y-2">
        <li><a href="/mission-vision" className="hover:underline">Mission and Vision</a></li>
        <li><a href="/careers" className="hover:underline">Careers</a></li>
      </ul>
    </div>

    {/* Services Links */}
    <div>
      <h3 className="font-bold text-lg mb-4">Services</h3>
      <ul className="space-y-2">
        <li><a href="/application-services" className="hover:underline">Application Services</a></li>
        <li><a href="/consultancy-services" className="hover:underline">Consultancy Services</a></li>
      </ul>
    </div>

    {/* Newsletter Subscription */}
    <div>
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
    </div>
  </div>
</footer>
    )
}

export default Footer;