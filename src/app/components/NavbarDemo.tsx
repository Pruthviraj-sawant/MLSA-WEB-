// "use client";
// import React, { useState } from "react";
// import {  Menu, MenuItem } from "./ui/navbar-menu";
// import { cn } from "@/app/utils/cn";
// import dyplogo from "@/app/img/image-removebg-preview (2).png"
// import Image from "next/image";
// import Link from "next/link";
// export default function NavbarDemo() {



  
//   return (
//     <div className="relative w-full flex items-center justify-end -ml-32">
//       <Navbar className="top-2" />
//       <p className="text-black dark:text-white">
       
//       </p>
//     </div>
//   );
// }

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);

//   const handleScrollToFooter = () => {
//     const footerSection = document.getElementById("footer-section");
//     if (footerSection) {
//       footerSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   return (
//     <div
//       className={cn(" flex flex-row fixed top-10 gap-0.1 max-w-[30rem] mx-auto z-50 bg-gradient-to-r from-blue-500 to-purple-400  via-violet-500  rounded-lg shadow-l g p-4", 
//         className)}
//     >
//       <Image src={dyplogo} alt="asc" height={30} width={60} className="mr-5  " />
//     <div className="flex justify-center items-center">
//      <Menu setActive={setActive} >
//         <MenuItem setActive={setActive} active={active} item="HOME">
//         <Link href="/#home" passHref >
//           <div className="hover:text-white text-lg font-semibold transition duration-300 ease-in-out cursor-pointer">
//             HOME
//           </div>
//           </Link>
//         </MenuItem>

//         <MenuItem setActive={setActive} active={active} item="ABOUT">
//         <Link href="/#Aboutus" passHref scroll={true}>
//           <div className="hover:text-white text-lg font-semibold transition duration-300 ease-in-out cursor-pointer">
//             ABOUT
//           </div>
//           </Link>
//         </MenuItem>
        
//         <MenuItem setActive={setActive} active={active} item="CONTACT US">
//         <Link href="/#footer-section" passHref>
//           <div className="hover:text-white text-lg font-semibold transition duration-300 ease-in-out cursor-pointer"  onClick={handleScrollToFooter}>
//             CONTACT US
//           </div>
//           </Link>
//         </MenuItem>
//       </Menu>
//     </div>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import dyplogo from "@/app/img/image-removebg-preview (2).png";
import Image from "next/image";
import Link from "next/link";

export default function NavbarDemo() {
  return (
    <div className="relative w-full z-[51] flex items-center justify-end -ml-32">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white"></p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const handleScrollToFooter = () => {
    const footerSection = document.getElementById("footer-section");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "flex flex-row fixed top-4 lg:top-10 left-0 right-0 lg:max-w-[30rem]  mx-auto z-50 bg-gradient-to-r from-blue-500 to-purple-400 via-violet-500 rounded-lg shadow-lg p-4 w-full lg:w-auto",
        className
      )}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={dyplogo}
          alt="Logo"
          height={30}
          width={60}
          className="mr-3 lg:mr-5"
        />
      </div>

      {/* Menu items */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-auto">
        <Menu setActive={setActive}>
          {/* HOME */}
          {/* <MenuItem setActive={setActive} active={active} item="HOME"> */}
            <Link href="/#home" passHref>
              <div className="hover:text-white text-lg font-semibold transition duration-300 ease-in-out cursor-pointer">
                HOME
              </div>
            </Link>
          {/* </MenuItem> */}

          {/* ABOUT */}
          {/* <MenuItem setActive={setActive} active={active} item="ABOUT"> */}
            <Link href="/#Aboutus" passHref scroll={true}>
              <div className="hover:text-white text-lg font-semibold transition duration-300 ease-in-out cursor-pointer">
                ABOUT
              </div>
            </Link>
          {/* </MenuItem> */}

          {/* CONTACT US */}
          {/* <MenuItem setActive={setActive} active={active} item="CONTACT US"> */}
            <Link href="/#footer-section" passHref>
              <div
                className="hover:text-white text-lg font-semibold transition duration-300 ease-in-out cursor-pointer"
                onClick={handleScrollToFooter}
              >
                CONTACT US
              </div>
            </Link>
          {/* </MenuItem> */}
        </Menu>
      </div>
    </div>
  );
}

