"use client";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 py-2 px-8 flex justify-center items-center z-50 bg-white/20 backdrop-blur-md">
      <div className="relative w-full max-w-4xl flex items-center bg-white/85 rounded-full border border-gray-300 shadow-md py-1.5 px-4 sm:px-6">
        
        <ul className="flex flex-wrap w-full justify-center space-x-6 text-gray-700 font-semibold overflow-x-auto text-sm sm:text-base sm:space-x-8 md:space-x-10 lg:space-x-12">
          <li className="cursor-pointer group">
            <a 
              href="#home" 
              className="transition-colors duration-300 hover:text-blue-500 font-sans"
            >
              Home
            </a>
          </li>
          <li className="cursor-pointer group">
            <a 
              href="#projects" 
              className="transition-colors duration-300 hover:text-red-700 font-sans"
            >
              Projects
            </a>
          </li>
          <li className="cursor-pointer group">
            <a 
              href="#experience" 
              className="transition-colors duration-300 hover:text-yellow-600 font-sans"
            >
              Experience
            </a>
          </li>
          <li className="cursor-pointer group">
            <a 
              href="#education" 
              className="transition-colors duration-300 hover:text-green-700 font-sans"
            >
              Education
            </a>
          </li>
          <li className="cursor-pointer group">
            <a 
              href="#contact" 
              className="transition-colors duration-300 hover:text-blue-500 font-sans"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="absolute left-2 flex items-center justify-center">
          <Image
            src="/googleS.png"
            alt="Logo"
            width={31}
            height={31}
            style={{ borderRadius: '50%' }}
          />
        </div>

        <div className="absolute right-3 flex items-center justify-center">
          <FaSearch className="text-lg text-gray-700 cursor-pointer transition-colors duration-300 hover:text-black" />
        </div>
      </div>
    </nav>
  );
}
