
// "use client";
// import React, { useState } from "react";
// import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
// import Link from "next/link";
// import Image from "next/image";
// import dyplogo from "@/app/img/image-removebg-preview (2).png";

// export default function Navbar() {
//   const [active, setActive] = useState<string | null>(null);

//   const handleClick = (item: string) => {
//     setActive(item);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-lg p-4 w-full">
//       <div className="max-w-5xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image
//             src={dyplogo}
//             alt="Logo"
//             height={30}
//             width={60}
//             className="mr-3"
//           />
//         </div>

//         {/* Menu */}
//         <div className="flex space-x-4">
//           <Link href="/#home" passHref>
//             <NavItem
//               icon={<FaHome />}
//               label="HOME"
//               active={active === "HOME"}
//               onClick={() => handleClick("HOME")}
//             />
//           </Link>
//           <Link href="/#Aboutus" passHref>
//             <NavItem
//               icon={<FaInfoCircle />}
//               label="ABOUT"
//               active={active === "ABOUT"}
//               onClick={() => handleClick("ABOUT")}
//             />
//           </Link>
//           <Link href="/#footer-section" passHref>
//             <NavItem
//               icon={<FaEnvelope />}
//               label="CONTACT"
//               active={active === "CONTACT"}
//               onClick={() => handleClick("CONTACT")}
//             />
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// interface NavItemProps {
//   icon: React.ReactNode;
//   label: string;
//   active: boolean;
//   onClick: () => void;
// }

// const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
//   <div
//     onClick={onClick}
//     className={`flex items-center space-x-2 text-lg font-semibold cursor-pointer transition duration-300 ease-in-out ${
//       active ? "text-white border-b-2 border-white" : "text-gray-200"
//     } hover:text-white hover:border-b-2 hover:border-white`}
//   >
//     {icon}
//     <span>{label}</span>
//   </div>
// );
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

