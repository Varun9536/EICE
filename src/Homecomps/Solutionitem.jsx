// ***** THIS FILE ISNT IN USE BECAUSE OF IMAGE RENDERING INCONSISTENCIES *****

// import React from "react";
// import PropTypes from 'prop-types';

// function Solutionitem({ title, image, subtext, link }) {
//   const handleItemClick = () => {
//     // Check if the link is available before navigating
//     if (link) {
//       window.open(link, "_blank");
//     }
//     // Handle the case where there is no link
//     else {
//       console.log("No link available for this item.");
//     }
//   };

//   const defaultImage = "https://via.placeholder.com/600x900";

//   return (
//     <div>
//         {/* rem for div height-width is 3:2,(36x24) adding a bit more size to height for the text */}
//         <div className="m-2 h-[36rem] w-[24rem] border-2 rounded-md border-[#01b0f1] cursor-pointer" onClick={handleItemClick}>
//             {/* <img src={defaultImage} alt=":/" className="" /> */}
//             {/* <div className={`bgimage`}></div> */}
//         <div className="w-full p-4">
//             <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
//             {title}
//             </h3>
//             <p className="">
//             {subtext}
//             </p>
//         </div>
//         </div>
//     </div>
//   );
// }

// Solutionitem.propTypes = {
//   title: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   subtext: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired,
// };

// export default Solutionitem;