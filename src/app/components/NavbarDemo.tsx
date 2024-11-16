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
import { FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import dyplogo from "@/app/img/image-removebg-preview (2).png";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const handleClick = (item: string) => {
    setActive(item);
    setMenuOpen(false); // Close menu when an item is clicked
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-lg p-4 w-full">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={dyplogo}
            alt="Logo"
            height={30}
            width={60}
            className="mr-3"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/#home" passHref>
            <NavItem
              icon={<FaHome />}
              label="HOME"
              active={active === "HOME"}
              onClick={() => handleClick("HOME")}
            />
          </Link>
          <Link href="/#Aboutus" passHref>
            <NavItem
              icon={<FaInfoCircle />}
              label="ABOUT"
              active={active === "ABOUT"}
              onClick={() => handleClick("ABOUT")}
            />
          </Link>
          <Link href="/#footer-section" passHref>
            <NavItem
              icon={<FaEnvelope />}
              label="CONTACT"
              active={active === "CONTACT"}
              onClick={() => handleClick("CONTACT")}
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-gray-800 p-4 rounded-lg">
          <Link href="/#home" passHref>
            <NavItem
              icon={<FaHome />}
              label="HOME"
              active={active === "HOME"}
              onClick={() => handleClick("HOME")}
            />
          </Link>
          <Link href="/#Aboutus" passHref>
            <NavItem
              icon={<FaInfoCircle />}
              label="ABOUT"
              active={active === "ABOUT"}
              onClick={() => handleClick("ABOUT")}
            />
          </Link>
          <Link href="/#footer-section" passHref>
            <NavItem
              icon={<FaEnvelope />}
              label="CONTACT"
              active={active === "CONTACT"}
              onClick={() => handleClick("CONTACT")}
            />
          </Link>
        </div>
      )}
    </nav>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center space-x-2 text-lg font-semibold cursor-pointer transition duration-300 ease-in-out ${
      active ? "text-white border-b-2 border-white" : "text-gray-200"
    } hover:text-white hover:border-b-2 hover:border-white`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

