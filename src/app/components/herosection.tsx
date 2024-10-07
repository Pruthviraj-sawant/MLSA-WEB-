// import React from "react";
// import bg from "@/app/img/heroLeft.webp"
// import Image from "next/image";
// import mlsalogo from "@/app/img/Screenshot_2024-10-04_231011-removebg-preview (1).png";
// import net from "@/app/img/heroVector.webp"
// import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

// export default function BackgroundBeamsWithCollisionDemo() {
//   return (
//     <BackgroundBeamsWithCollision >
//         <div className="relative mx-auto w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] mb-20" id="home">
//           <Image src={bg} alt="yo"   className="absolute -left-[25rem] -top-16"/> 
//           <Image src={net} alt="yo"   className="absolute -left-[30rem] -top-32 rotate-12 h-[60em] w-[500em] z-1"/> 
//           <div className=" mt-40 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-slate-200 via-slate-500 to-slate-700 [text-shadow:0_0_rgba(0,0,0,0.1)] font-bold flex  flex-row justify-center items-center relative">
//            <Image src={mlsalogo} alt="asc" height={10} width={260} className="mr-10  " />
//           <p className="text-[12rem] text-center font-extrabold"  >MLSA</p>
            
//           </div>
//           <div className=" bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
//           <div className="text-[4rem] text-center font-bold">MICROSOFT LEARN <p>STUDENT AMBASSDORS</p></div>
//           </div>
//           <Image src={bg} alt="yo"   className="absolute -right-[25rem] -bottom-32 rotate-180"/> 
//           <Image src={net} alt="yo"   className="absolute -right-[28rem] -bottom-64 rotate-180 h-[60em] w-[500em] "/> 
        
//         </div>
     
//     </BackgroundBeamsWithCollision>
//   );
// }




// 2





// import React from "react";
// import bg from "@/app/img/heroLeft.webp";
// import Image from "next/image";
// import mlsalogo from "@/app/img/Screenshot_2024-10-04_231011-removebg-preview (1).png";
// import net from "@/app/img/heroVector.webp";
// import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

// export default function BackgroundBeamsWithCollisionDemo() {
//   return (
//     <BackgroundBeamsWithCollision>
//       <div
//         className="relative mx-auto w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] mb-20"
//         id="home"
//       >
//         {/* Background elements with lower z-index */}
//         <Image
//           src={bg}
//           alt="yo"
//           className="absolute -left-[25rem] -top-16 z-1"
//         />
//         <Image
//           src={net}
//           alt="yo"
//           className="absolute -left-[25rem] -top-40 rotate-12 h-[72em] w-[110em] z-1"
//         />

//         {/* Text and logo with higher z-index */}
//         <div className="mt-40 relative z-10 flex flex-row justify-center items-center">
//           <Image
//             src={mlsalogo}
//             alt="asc"
//             height={10}
//             width={260}
//             className="mr-10 relative z-20" // Ensure logo is in front
//           />
//           <p className="text-[12rem] text-center font-extrabold relative z-20">
//             MLSA
//           </p>
//         </div>

//         <div className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4 relative z-10">
//           <div className="text-[4rem] text-center font-bold">
//             MICROSOFT LEARN <p>STUDENT AMBASSADORS</p>
//           </div>
//         </div>

//         {/* Background elements with lower z-index */}
//         <Image
//           src={bg}
//           alt="yo"
//           className="absolute -right-[25rem] -bottom-32 rotate-180 z-1"
//         />
//         <Image
//           src={net}
//           alt="yo"
//           className="absolute -right-[28rem] -bottom-64 rotate-180 h-[72em] w-[120em] z-1"
//         />
//       </div>
//     </BackgroundBeamsWithCollision>
//   );
// }

import React from "react";
import bg from "@/app/img/heroLeft.webp";
import Image from "next/image";
import mlsalogo from "@/app/img/Screenshot_2024-10-04_231011-removebg-preview (1).png";
import net from "@/app/img/heroVector.webp";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div
        className="relative mx-auto w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] mb-20"
        id="home"
      >
        {/* Background elements with lower z-index */}
        <Image
          src={bg}
          alt="background-left"
          className="absolute -left-[18rem] md:-left-[35rem] -top-16 z-1 max-w-none"
        />
        <Image
          src={net}
          alt="vector-left"
          className="absolute -left-[15rem] md:-left-[25rem] -top-32 rotate-12 h-[30em] md:h-[72em] w-[50em] md:w-[110em] z-1 max-w-none"
        />

        {/* Text and logo with higher z-index */}
        <div className="mt-40 lg:mt-60 relative z-10 flex flex-col lg:flex-row justify-center items-center">
          <Image
            src={mlsalogo}
            alt="mlsa-logo"
            height={10}
            width={260}
            className="mb-8 lg:mb-0 lg:mr-10 relative z-20"
          />
          <p className="text-[2rem] lg:text-[5rem] xl:text-[9rem] text-center font-extrabold relative z-20">
            MLSA
          </p>
        </div>

        <div className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4 relative z-10">
          <div className="text-[1.2rem] lg:text-[2rem] xl:text-[3rem] text-center font-bold">
            MICROSOFT LEARN <p>STUDENT AMBASSADORS</p>
          </div>
        </div>

        {/* Background elements with lower z-index */}
        <Image
          src={bg}
          alt="background-right"
          className="absolute -right-[15rem] md:-right-[35rem] -bottom-20 md:-bottom-32 rotate-180 z-1 max-w-none"
        />
        <Image
          src={net}
          alt="vector-right"
          className="absolute -right-[15rem] md:-right-[25rem] -bottom-40 md:-bottom-64 rotate-180 h-[30em] md:h-[72em] w-[50em] md:w-[110em] z-1 max-w-none"
        />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
