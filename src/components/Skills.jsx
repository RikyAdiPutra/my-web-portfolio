// components/Skills.js
import { FaReact, FaJsSquare, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "JavaScript (ES6+)",
      icon: <FaJsSquare size={40} className="text-yellow-500 mx-auto" />,
    },
    {
      name: "React.js",
      icon: <FaReact size={40} className="text-blue-500 mx-auto" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={40} className="text-black mx-auto" />,
    },
    {
      name: "Tailwind CSS",
      icon: <FaCss3Alt size={40} className="text-blue-400 mx-auto" />,
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub size={40} className="text-gray-800 mx-auto" />,
    },
  ];

  return (
    <section id="skills" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-hind">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 m-4 w-64 text-center transform hover:scale-105 transition-transform duration-300"
            >
              {skill.icon}
              <p className="text-lg font-semibold text-gray-700 mt-4 font-hind">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
