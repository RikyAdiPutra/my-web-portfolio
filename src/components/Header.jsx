"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 p-6 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white font-hind">
          Riky Adi Putra
        </h1>
        <nav className="hidden md:flex ">
          <ul className="flex space-x-6">
            <li className="relative group">
              <Link legacyBehavior href="#about">
                <a className="text-white hover:text-gray-200 transition duration-300 font-hind">
                  About
                </a>
              </Link>
              <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <Link legacyBehavior href="#skills">
                <a className="text-white hover:text-gray-200 transition duration-300 font-hind">
                  Skills
                </a>
              </Link>
              <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <Link legacyBehavior href="#articles">
                <a className="text-white hover:text-gray-200 transition duration-300 font-hind">
                  Articles
                </a>
              </Link>
              <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <Link legacyBehavior href="#projects">
                <a className="text-white hover:text-gray-200 transition duration-300 font-hind">
                  Projects
                </a>
              </Link>
              <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <Link legacyBehavior href="#contact">
                <a className="text-white hover:text-gray-200 transition duration-300 font-hind">
                  Contact
                </a>
              </Link>
              <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <Link legacyBehavior href="#about">
                <a
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-200 transition duration-300 font-hind"
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#skills">
                <a
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-200 transition duration-300 font-hind"
                >
                  Skills
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#articles">
                <a
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-200 transition duration-300 font-hind"
                >
                  Articles
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#projects">
                <a
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-200 transition duration-300 font-hind"
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#contact">
                <a
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-200 transition duration-300 font-hind"
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
