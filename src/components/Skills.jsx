// components/Skills.js
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaTrello,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 size={40} className="text-orange-500 mx-auto" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={40} className="text-blue-500 mx-auto" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} className="text-blue-400 mx-auto" />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare size={40} className="text-yellow-500 mx-auto" />,
    },
    {
      name: "React.js",
      icon: <FaReact size={40} className="text-blue-500 mx-auto" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={40} className="text-white mx-auto" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt size={40} className="text-red-500 mx-auto" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={40} className="text-white mx-auto" />,
    },
    {
      name: "Trello",
      icon: <FaTrello size={40} className="text-blue-600 mx-auto" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={40} className="text-green-500 mx-auto" />,
    },
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white py-12 px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center font-hind mb-8">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg p-6 m-4 w-64 text-center transform hover:scale-105 transition-transform duration-300"
            >
              {skill.icon}
              <p className="text-lg font-semibold text-gray-300 mt-4 font-hind">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
