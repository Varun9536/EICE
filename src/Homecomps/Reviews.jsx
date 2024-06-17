import React from "react";
import Rottext from "./subcomps/Rottext";
import TestimonyRot from "./subcomps/TestimonyRot";

function Reviews()
{
    const what = ['"EICE completed my project on time and correctly. Even when we had multiple contracts ongoing at the same time, EICE ensured that the product was correctly made without fault."',
                '"The app was created as desired, although a few bugs had made it through the QA team but EICE’s communication was great and all issues and bugs were resolved on time."', 
                '"EICE developers did a good job developing this project, some issues had come but were resolved satisfactorily. EICE were polite and helpful in their communication."', 
                '"Great work on digging into an existing project. Understanding the underlying tech and business issues and then fixing it up into something we’re proud to have. Good Work!"'];
    const who = ['- AoGe He','- Nathan Foreman','- Weston Argo', '- Uzis Rozkalns'];
    const owns = ['CEO - Yidian Internet Technology', 'IT professional', 'Owner - Groundwork Systems', 'Delivery lead - HSBC']
    return (
        <div className="text-blackk bg-testimonial bg-blend-overlay bg-white/30 grid grid-cols-1 items-center justify-center bg-cover
                        2xl:p-0 2xl:mt-20 2xl:mb-20 2xl:max-h-[450px] 2xl:min-h-[450px]
                        mt-6 pl-4 pr-4 max-h-[500px] min-h-[500px]">
            {/* <div className="pt-1 shadow-sm shadow-blackk/20"></div> */}
            <h1 className="top-0 text-center text-bloo font-bold 
                                2xl:text-3xl 2xl:pb-4 2xl:pt-24 2xl:-mb-0
                                text-3xl">
                    Testimonials</h1>
            
            <div className="text-center font-semibold italic 
                            2xl:max-h-[90px] 2xl:min-h-[90px] 2xl:text-3xl 2xl:pl-[24rem] 2xl:pr-[24rem] 2xl:-mt-0
                            -mt-20 max-h-[200px] min-h-[200px] text-2xl">
                <TestimonyRot words={what} interval={10000} />
            </div>
            <div className="flex flex-col items-center justify-center 
                            2xl:pt-6 2xl:text-2xl 2xl:-mt-0
                            -mt-44 text-xl
                            ">
                
                    <TestimonyRot words={who} interval={10000} />
                
                <div className="text-bloo italic font-semibold 
                                2xl:pt-2 2xl:pb-24">
                    <TestimonyRot words={owns} interval={10000} />
                </div>
            </div>
        </div>
    )
}

export default Reviews;