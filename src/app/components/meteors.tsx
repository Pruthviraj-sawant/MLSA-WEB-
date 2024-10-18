// import React from "react";
// import { Meteors } from "@/app/components/ui/meteors";
// // import { Span } from "next/dist/trace";

// export default function MeteorsDemo() {
//   return (
//     <div className="flex flex-col mt-40" id="Aboutus">
//         <div className="text-[3rem] ml-20 flex space-x-10">About <div className="text-blue-700 ml-5"> us</div></div>
        
//         <div className="flex place-content-start mt-20 flex-wrap gap-20 ">
//       <div className=" w-full relative max-w-[20rem] ml-72 ">
//         <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
//         <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
//           <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="h-2 w-2 text-gray-300"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
//               />
//             </svg>
//           </div>

//           <h1 className="font-bold text-xl text-white mb-4 relative z-50">
//           Vision
//           </h1>

//           <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
//           MLSA envisions a world where everyone has access to the benefits of technology.
//            We believe that technology has the potential to be an effective tool for education.
//            We are committed to educating everyone about various tech stacks, thus keeping them updated.
//           </p>

//           <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
//           <a href="https://coek.dypgroup.edu.in/campus-life/mlsa-chapter/" target="_blank"> Explore </a>
//           </button>

//           {/* Meaty part - Meteor effect */}
//           <Meteors number={20} />
//         </div>
//       </div>
//       <div className=" w-full relative max-w-[20rem] ">
//         <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
//         <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
//           <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="h-2 w-2 text-gray-300"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
//               />
//             </svg>
//           </div>

//           <h1 className="font-bold text-xl text-white mb-4 relative z-50">
//           Goal
//           </h1>

//           <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
//           Connecting people with technology and assisting them in using it to enhance their lives are the two main objectives of MLSA.
//            In order to achieve this, we organize events, work on projects, and educate everyone on various tech stacks.
//           </p>

//           <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
//            <a href="https://coek.dypgroup.edu.in/campus-life/mlsa-chapter/" target="_blank"> Explore </a>
//           </button>

//           {/* Meaty part - Meteor effect */}
//           <Meteors number={20} />
//         </div>
//       </div>
//       <div className=" w-full relative max-w-[20rem]">
//         <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
//         <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
//           <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="h-2 w-2 text-gray-300"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
//               />
//             </svg>
//           </div>

//           <h1 className="font-bold text-xl text-white mb-4 relative z-50">
//             Mission
//           </h1>

//           <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
//           The mission of MLSA is &quot;Tech for All&quot;.We empower individuals to embrace the digital world with confidence through engaging events, innovative projects, and meaningful connections. 
//           We are dedicated to bridging the technological ensuring that no one is left behind.
//           </p>

//           <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
//           <a href="https://coek.dypgroup.edu.in/campus-life/mlsa-chapter/" target="_blank"> Explore </a>
//           </button>

//           {/* Meaty part - Meteor effect */}
//           <Meteors number={20} />
//         </div>
//       </div>
      
//     </div>
//     </div>
//   );
// }


import React from "react";
import { Meteors } from "@/app/components/ui/meteors";

export default function MeteorsDemo() {
  return (
    <div className="flex flex-col mt-20 px-4" id="Aboutus">
      {/* Title Section */}
      <div className="text-[2rem] md:text-[3rem] ml-0 md:ml-10 flex space-x-2 justify-center md:justify-start">
        About <div className="text-blue-700"> us</div>
      </div>

      {/* Card Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 gap-20 flex-wrap">
        {/* Vision Card */}
        <div className="w-full md:w-[20rem] relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Vision
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            MLSA envisions a world where everyone has access to the benefits of technology.
            We believe that technology has the potential to be an effective tool for education.
            We are committed to educating everyone about various tech stacks, thus keeping them updated.
            </p>

            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              <a
                href="https://coek.dypgroup.edu.in/campus-life/mlsa-chapter/"
                target="_blank"
              >
                Explore
              </a>
            </button>

            {/* Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>

        {/* Goal Card */}
        <div className="w-full md:w-[20rem] relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Goal
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Connecting people with technology and assisting them in using it to enhance their lives are the two main objectives of MLSA.
           In order to achieve this, we organize events, work on projects, and educate everyone on various tech stacks,keep update on it
            </p>

            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              <a
                href="https://coek.dypgroup.edu.in/campus-life/mlsa-chapter/"
                target="_blank"
              >
                Explore
              </a>
            </button>

            {/* Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>

        {/* Mission Card */}
        <div className="w-full md:w-[20rem] relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Mission
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            The mission of MLSA is &quot;Tech for All&quot;.We empower individuals to embrace the digital world with confidence through engaging events, innovative projects, and meaningful connections. 
             We are dedicated to bridging the technological ensuring that no one is left behind.
            </p>

            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              <a
                href="https://coek.dypgroup.edu.in/campus-life/mlsa-chapter/"
                target="_blank"
              >
                Explore
              </a>
            </button>

            {/* Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
