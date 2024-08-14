import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white font-hind">
          Riky Adi Putra
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="relative group">
              <Link legacyBehavior href="#about">
                <a className="text-gray-300 hover:text-gray-100 transition duration-300 font-hind">
                  About
                </a>
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link legacyBehavior href="#skills">
                <a className="text-gray-300 hover:text-gray-100 transition duration-300 font-hind">
                  Skills
                </a>
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link legacyBehavior href="#articles">
                <a className="text-white hover:text-gray-200 transition duration-300 font-hind">
                  Articles
                </a>
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link legacyBehavior href="#projects">
                <a className="text-gray-300 hover:text-gray-100 transition duration-300 font-hind">
                  Projects
                </a>
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link legacyBehavior href="#contact">
                <a className="text-gray-300 hover:text-gray-100 transition duration-300 font-hind">
                  Contact
                </a>
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
