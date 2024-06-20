import React from "react";
import { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

function Contactform()
{

    const [formvalues, setformvalues] = useState(
        {
        name : "", 
        email : "", 
        number: "",
        message: "",
    })

    const putvalue = (e) =>
    {
        setformvalues((prev) => {
            return({...prev, [e.target.name]: e.target.value})
        })
    }

    const printvalues = async () =>
    {
        let a = await fetch("http://192.168.9.91:8000/v1/form/userdata", {
            method : 'post',
            body : JSON.stringify({email:formvalues.email, number:formvalues.number, name:formvalues.name, message:formvalues.message}),
            headers : {
                "Content-Type" : "application/json"
            }
        })

        a = await a.json()
        if(a.result==='successful')
        {
            console.log(a.response)
            alert(`Data Recieved Successfully`)
        }
        
    }

    return (
        <div className="font-manrope
                        2xl:grid 2xl:grid-cols-2
                        2xl:pb-40 2xl:pt-40 2xl:p-12
                        2xl:ml-[400px] 2xl:mr-[400px]

                        ">
            
            <div className="w-full h-full flex flex-col items-center justify-center text-center gap-4">
                <div className="w-full h-full shadow-lg shadow-blackk/50 p-12 grid grid-cols-1 gap-4">
                    <h1 className="text-left font-semibold text-bloo 2xl:text-3xl ">Contact Us</h1>
                    <input onChange={putvalue} type="text" name="name" id="name" placeholder="Name" className="border-2 border-black/30 rounded-md p-2" />
                    <input onChange={putvalue} type="email" name="email" id="email" placeholder="Email" className="border-2 border-black/30 rounded-md p-2"/>
                    <input onChange={putvalue} type="text" name="number" id="number" placeholder="Number" className="border-2 border-black/30 rounded-md p-2"/>
                    <textarea onChange={putvalue} name="message" id="message" placeholder="Message" className="h-[200px] border-2 border-black/30 rounded-md p-2"></textarea>
                    <div className="2xl:pl-4 2xl:pt-2">
                        <button 
                        onClick={printvalues}
                        className="flex flex-row items-center justify-center transition duration-200 border-bloo border-[2px] hover:bg-bloo/90 bg-bloo text-white  hover:shadow-md hover:shadow-bloo/30 font-semibold py-2 px-2 rounded
                                            2xl:w-[234px] 2xl:h-[56px] 2xl:text-xl 2xl:p-0 2xl:scale-100
                                            scale-75 -ml-4 h-[64px] w-[240px] text-2xl">
                            {'Submit'}
                        </button>
                    </div>
                </div>
            </div>
            <div className="font-manrope flex flex-col w-full h-full shadow-lg shadow-blackk/50 ml-12 pl-10">
                <div className="text-center text-bloo font-semibold text-3xl pb-4 pt-2">Addresses</div>
            <div className=" grid grid-cols-2 gap-4 items-center justify-center text-center">
                <div className="border-2 border-bloo/40 h-[15rem] w-[15rem]">
                    <h1 className="text-xl text-blackk font-semibold">United States</h1>
                    <div className="text-left pl-2 pr-2 pt-2 leading-7">    
                        EICE International <br />
                        440 Cobia Drive, #901 Katy, Texas 77494 <br />
                        +1 (832) 982-1500
                    </div>
                    <p className="text-left pl-2 pt-1 text-blue-700 hover:underline"><a href="mailto:info@eiceinternational.com">info@eiceinternational.com</a></p>
                </div>
                <div className="border-2 border-bloo/40 h-[15rem] w-[15rem]">
                    <h1 className="text-xl text-blackk font-semibold">India</h1>
                    <div className="text-left pl-2 pr-2 pt-2 leading-7">    
                        EICE Consultants & Engineers Private Ltd. <br />
                        B-8 Second Floor Sec-60, Noida 201301 <br />
                        +91 (120) 4355910
                    </div>
                    <p className="text-left pl-2 pt-1 text-blue-700 hover:underline"><a href="mailto:info@eiceinternational.com">info@eiceinternational.com</a></p>
                    
                </div>
                <div className="border-2 border-bloo/40 h-[15rem] w-[15rem]">
                    <h1 className="text-xl text-blackk font-semibold">Canada</h1>
                    <div className="text-left pl-2 pr-2 pt-2 leading-7">    
                        EICE Canada ULC <br />
                        20-15 27th Street NE Calgary <br />
                        +1 (403) 903-8225
                    </div>
                    <p className="text-left pl-2 pt-1 text-blue-700 hover:underline"><a href="mailto:info@eiceinternational.com">info@eiceinternational.com</a></p>

                </div>
                <div className="border-2 border-bloo/40 h-[15rem] w-[15rem]">
                    <h1 className="text-xl text-blackk font-semibold">China</h1>
                    <div className="text-left pl-2 pr-2 pt-2 leading-7">    
                        Beijing OGT Inc. <br />
                        205, Beikong Science & Technology Plaza Changping, Beijing <br />
                        +86 139 0128 3332
                    </div>
                    <p className="text-left pl-2 pt-1 text-blue-700 hover:underline"><a href="mailto:ogtech@vip.sina.com">ogtech@vip.sina.com,</a></p>
                    <p className="text-left pl-2 pt-1 text-blue-700 hover:underline"><a href="mailto:info@eiceinternational.com">info@eiceinternational.com</a></p>

                </div>
            </div>

            </div>
        </div>
    )
}

export default Contactform;