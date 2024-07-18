import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://eice-website.onrender.com/v1/form/userdata", {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (data.result === 'successful') {
        alert(`Message Sent Successfully`);
        setFormValues({ name: "", email: "", number: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="font-manrope max-w-7xl mx-auto px-4 py-12 pt-28 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-lg shadow-blackk/20 p-8">
          <h2 className="text-2xl font-semibold text-bloo mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
              required
            />
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
              required
            />
            <input
              type="tel"
              name="number"
              value={formValues.number}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
              required
            />
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-bloo text-white font-semibold py-2 px-4 rounded-md hover:bg-bloo-dark transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-lg shadow-blackk/20 p-8">
          <h2 className="text-2xl font-semibold text-bloo mb-6 text-center">Addresses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
            <AddressCard
              country="United States"
              company="EICE International"
              address="440 Cobia Drive, #901 Katy, Texas 77494"
              phone="+1 (832) 982-1500"
              email="info@eiceinternational.com"
            />
            <AddressCard
              country="India"
              company="EICE Consultants & Engineers Private Ltd."
              address="B-8 Second Floor Sec-60, Noida 201301"
              phone="+91 (120) 4355910"
              email="info@eiceinternational.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AddressCard({ country, company, address, phone, email }) {
  return (
    <div className="border-2 border-bloo/40 rounded-lg p-4 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-blackk mb-2">{country}</h3>
        <p className="text-sm mb-2">{company}</p>
        <p className="text-sm mb-2">{address}</p>
        <p className="text-sm mb-2">{phone}</p>
      </div>
{/*       <a href={`mailto:${email}`} className="text-sm text-blue-700 hover:underline">
        {email}
      </a> */}
<Link to={`mailto:${email}`} className="text-sm text-blue-700 hover:underline">
        {email}
      </Link>
      
    </div>
  );
}

export default ContactForm;
