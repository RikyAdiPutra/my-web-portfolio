import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Your Name</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
