// ****** NOT IN USE ATM ****** //

/* eslint-disable react/display-name */
// import React, { Component } from 'react';

// function SplashMessage() {
//     return (
//         <div className='font-manrope flex flex-col items-center justify-center w-screen h-screen p-44'>
//             <div>
//                 <div><h1 className="text-8xl font-bold text-blue-950 pb-6">E<span className="text-bloo">IC</span>E</h1></div>
//                 <div className="flex flex-row items-center justify-center">
//                     <h1 className='text-2xl mr-6'>Loading</h1>
//                     <div className='ml-6 animate-spin-medium rounded-full h-8 w-8 border-[3px] border-bloo border-t-transparent'></div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default function Withsplashscreen(WrappedComponent) {
//     return class extends Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 loading: true,
//             };
//         }

//         async componentDidMount() {
//             try {
//                 // Put here your await requests/ API requests
//                 setTimeout(() => {
//                     this.setState({
//                         loading: false,
//                     });
//                 }, 1200)
//             } catch (err) {
//                 console.log(err);
//                 this.setState({
//                     loading: false,
//                 });
//             }
//         }

//         render() {
//             // while checking user session, show "loading" message
//             if (this.state.loading) return SplashMessage();

//             // otherwise, show the desired route
//             return (
//                 <div>
//                     {this.state.loading ? (
//                         <SplashMessage />
//                     ) : (
//                         <WrappedComponent {...this.props} />
//                     )}
//                 </div>
//             );
//         }
//     };
// }
