"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 font-hind">
            Contact & Follow
          </h2>
          <p className="text-gray-400 mb-4">
            Feel free to connect with me on social media or drop me a message.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/RikyAdiPutra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/riky-adi-putra-160127284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://x.com/_RikyAdiPutra_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Riky Adi Putra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
