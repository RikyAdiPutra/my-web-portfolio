import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white font-hind">
          Riky Adi Putra
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link legacyBehavior href="#about">
                <a className="text-white hover:text-gray-200 transition duration-300 font-hind">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#skills">
                <a className="text-white hover:text-gray-200 transition duration-300 font-hind">
                  Skills
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#projects">
                <a className="text-white hover:text-gray-200 transition duration-300 font-hind">
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#contact">
                <a className="text-white hover:text-gray-200 transition duration-300 font-hind">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
